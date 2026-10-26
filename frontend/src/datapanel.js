// Mais › Dados: exports (ZIP, CSV, JSON, .ics), backups in share/cronologia,
// imports and automatic versions, like the other apps. Mixed into <cronologia-app>.
import { html, nothing, unsafeSVG } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { plural, clip } from "./util.js";

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;

const size = (n) => (n > 1048576 ? `${(n / 1048576).toFixed(1).replace(".", ",")} MB` : `${Math.max(1, Math.round(n / 1024))} KB`);
const WHY = { "antes-de-importar": "antes de importar", "antes-de-restaurar": "antes de restaurar" };

export const DataMixin = (Base) =>
  class extends Base {
    _dateTime(ms) {
      const d = new Date(ms);
      const p = (n) => String(n).padStart(2, "0");
      return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()} às ${p(d.getHours())}:${p(d.getMinutes())}`;
    }

    async _loadBackups() {
      if (!this.api.backups) return;
      try {
        this._backups = await this.api.backups();
      } catch (err) {
        this._backups = { available: false, error: err.message, backups: [] };
      }
      this.requestUpdate();
    }

    async _createBackup() {
      this._busy = "backup";
      this.requestUpdate();
      try {
        const out = await this.api.createBackup();
        this._showToast(`Backup salvo em ${out.folder}/${out.name}`);
        this._haptic("success");
        await this._loadBackups();
      } catch (err) {
        this._showToast(`Não consegui criar o backup. ${err.message}`);
      }
      this._busy = null;
      this.requestUpdate();
    }

    _exportData(fmt, ev) {
      if (!this.api.dataUrl || !this.api.dataUrl(fmt)) {
        ev.preventDefault();
        this._showToast("Na prévia os arquivos não são baixados.");
      } else if (fmt !== "json") this._showToast("Juntando os eventos de todos os calendários…");
    }

    _pickDataImport() {
      const input = this.renderRoot.querySelector("#cr-data-import");
      if (!input) return;
      input.value = "";
      input.click();
    }

    _onDataImport(ev) {
      const file = ev.target.files && ev.target.files[0];
      ev.target.value = "";
      if (!file) return;
      this._openSheet("confirm", {
        title: "Importar arquivo?",
        text: `Os dados do app (nomes e cores das agendas, pessoas e avisos, placar e marcações) passam a ser os de “${clip(file.name, 40)}”. Os eventos dos calendários não mudam. Antes, o app guarda uma cópia do que existe hoje em Versões anteriores.`,
        label: "Importar",
        run: async () => {
          this._closeSheet();
          try {
            const n = await this.api.importData(file);
            this._haptic("success");
            this._showToast(`Importado: ${plural(n.calendars, "agenda", "agendas")} e ${plural(n.points, "ponto registrado", "pontos registrados")}`);
          } catch (err) {
            this._showToast(`Não consegui importar. ${err.message}`);
          }
        },
      });
    }

    _confirmRestoreBackup(b) {
      this._openSheet("confirm", {
        title: "Restaurar este backup?",
        text: `Os dados do app passam a ser os do backup de ${this._dateTime(b.date)}. Os eventos dos calendários não mudam (estão no .zip, para importar se precisar). Antes, o app guarda uma cópia do que existe hoje.`,
        label: "Restaurar",
        run: async () => {
          this._closeSheet();
          try {
            await this.api.restoreBackup(b.name);
            this._showToast("Backup restaurado");
          } catch (err) {
            this._showToast(err.message);
          }
        },
      });
    }

    async _openVersions() {
      this._openSheet("versions", { list: null, error: null });
      try {
        const list = await this.api.versions();
        if (this._sheet === "versions") this._setForm({ list });
      } catch (err) {
        if (this._sheet === "versions") this._setForm({ error: err.message });
      }
    }

    _confirmRestoreVersion(v) {
      this._openSheet("confirm", {
        title: "Restaurar esta versão?",
        text: `Os dados do app voltam a ser os de ${this._dateTime(v.when)}. Antes, o app guarda uma cópia do que existe hoje.`,
        label: "Restaurar",
        run: async () => {
          this._closeSheet();
          try {
            await this.api.restoreVersion(v.name);
            this._showToast("Versão restaurada");
          } catch (err) {
            this._showToast(err.message);
          }
        },
      });
    }

    _renderVersions() {
      const f = this._form;
      return html`
        ${this._sheetHead("Versões anteriores")}
        ${f.error
          ? html`<div class="imp-error">${icon("circle-alert")}<span>${f.error}</span></div>`
          : f.list == null
            ? html`<div class="imp-loading"><span class="spin">${icon("loader-circle")}</span><span>Carregando…</span></div>`
            : !f.list.length
              ? html`<p class="sheet-note top">Ainda não há versões anteriores. Elas aparecem depois das primeiras alterações.</p>`
              : html`<div class="data-list">
                  ${f.list.map(
                    (v) => html`<div class="data-item"><div><b>${this._dateTime(v.when)}</b><span>${plural(v.calendars, "agenda", "agendas")} · ${plural(v.points, "ponto", "pontos")} · ${WHY[v.reason] || "automática"}</span></div>
                      <button class="btn outline sm" @click=${() => this._confirmRestoreVersion(v)}>Restaurar</button></div>`,
                  )}
                </div>`}
      `;
    }

    _renderDataPanel() {
      const b = this._backups;
      const writable = this._writable();
      const exp = (fmt, label, ic) => html`<a class="btn outline sm" href=${(this.api.dataUrl && this.api.dataUrl(fmt)) || "#"} download @click=${(e) => this._exportData(fmt, e)}>${icon(ic)}${label}</a>`;
      return html`<div id="dados">
        <div class="panel">
          ${this._secHead("download", "Exportar", "Baixe para guardar ou levar para outro programa. Os arquivos são abertos e legíveis: o ZIP tem os dados do app, os eventos de cada calendário em .ics e as planilhas de eventos e pontos.")}
          <div class="btn-row sec-actions">${exp("zip", "Tudo (ZIP)", "archive")} ${exp("csv", "Eventos (CSV)", "sheet")} ${exp("json", "Dados (JSON)", "braces")}
            <button class="btn outline sm" @click=${() => this._openExport()}>${icon("calendar")}Agenda (.ics)</button></div>
        </div>
        <div class="panel">
          ${this._secHead("archive", "Backup na pasta share", html`Cria uma cópia completa em <code>share/cronologia</code>, que você acessa pela rede do Home Assistant. Os backups do próprio Home Assistant também incluem o CronologIA e os calendários locais.`)}
          <div class="btn-row sec-actions">
            <button class="btn primary sm" ?disabled=${this._busy === "backup" || (b && b.available === false)} @click=${() => this._createBackup()}>${icon("archive")}${this._busy === "backup" ? "Criando…" : "Criar backup"}</button>
          </div>
          ${b && b.available === false ? html`<p class="data-note">A pasta share não está disponível para o app.</p>` : nothing}
          ${b && b.backups && b.backups.length
            ? html`<div class="data-list">
                ${b.backups.slice(0, 8).map(
                  (x) => html`<div class="data-item"><div><b>${this._dateTime(x.date)}</b><span title=${x.name}>${size(x.size)} · ${x.name}</span></div>
                    <button class="btn outline sm" @click=${() => this._confirmRestoreBackup(x)}>${icon("archive-restore")}Restaurar</button></div>`,
                )}
              </div>`
            : nothing}
        </div>
        <div class="panel">
          ${this._secHead("upload", "Importar", "Traz os dados do app de um .zip ou .json exportado pelo CronologIA: agendas, pessoas e avisos, placar e marcações. Antes de importar, o app guarda uma cópia do que existe hoje.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" @click=${() => this._pickDataImport()}>${icon("upload")}Escolher arquivo</button></div>
        </div>
        <div class="panel">
          ${this._secHead("calendar-plus", "Importar eventos (.ics)", "Traz os eventos de um convite, de outra agenda ou de um calendário do backup. Você revisa e escolhe o calendário antes de adicionar.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" ?disabled=${!writable.length} @click=${() => this._openImport("ics")}>${icon("upload")}Escolher .ics</button></div>
        </div>
        <div class="panel">
          ${this._secHead("archive-restore", "Versões anteriores", "O app guarda sozinho uma cópia dos dados a cada 10 minutos de uso. Se algo sair errado, volte para uma versão anterior.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" @click=${() => this._openVersions()}>${icon("archive-restore")}Ver versões</button></div>
        </div>
        <div class="panel">
          ${this._secHead("database", "Onde ficam os dados", html`Os eventos ficam nos próprios calendários (no Home Assistant, no Google, no Outlook…). O app guarda nomes, cores, preferências, pessoas, o placar e as marcações em <code>/data/cronologia.json</code>, que entra no backup do Home Assistant.`)}
        </div>
        <input id="cr-data-import" class="sr" type="file" accept=".zip,.json,application/zip,application/json" tabindex="-1" aria-hidden="true" @change=${(e) => this._onDataImport(e)} />
      </div>`;
    }
  };

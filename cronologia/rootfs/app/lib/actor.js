/**
 * Who is acting right now, for the Extrato of the placar. Each message from the app runs
 * with the person of its Home Assistant user; events from the ResolvIA and automations
 * run with their own source. AsyncLocalStorage carries it through the awaits, so two
 * people acting at once never mix.
 */
import { AsyncLocalStorage } from "node:async_hooks";

const ctx = new AsyncLocalStorage();

/** {by: "Diego", via: "ResolvIA" | "Automação" | ""} of the current action, or {}. */
export const actor = () => ctx.getStore() || {};

/** Runs fn as that actor. */
export const asActor = (who, fn) => ctx.run({ by: String((who && who.by) || "").slice(0, 40), via: String((who && who.via) || "").slice(0, 20) }, fn);

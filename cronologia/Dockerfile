# https://developers.home-assistant.io/docs/apps/dockerfile
ARG BUILD_FROM=ghcr.io/home-assistant/base:3.23
FROM ${BUILD_FROM}

# Node.js runs the app (no npm packages needed); tzdata for local times.
RUN apk add --no-cache nodejs tzdata

COPY rootfs /
RUN chmod a+x /etc/services.d/cronologia/run /etc/services.d/cronologia/finish

LABEL \
    org.opencontainers.image.title="Home Assistant App: CronologIA" \
    org.opencontainers.image.description="Os calendários do Home Assistant numa agenda bonita." \
    org.opencontainers.image.source="https://github.com/diegozapella63/cronologia-ha" \
    org.opencontainers.image.licenses="MIT"

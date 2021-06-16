---
layout: base.njk
key: firefox-sync
title: Firefox Sync
---
# <i class="i-firefox-browser"></i> Firefox Sync

Nutzt du Firefox auf mehreren Geräten zum Surfen? Dann kannst du mit Firefox Sync deine Browserdaten (Lesezeichen, offene Tabs, die Suchhistorie, uvm.) zwischen all deinen Geräten synchronisieren.

Dafür benötigst du zunächst einen Firefox-Account und musst dich auf deinen Geräten damit anmelden. Standardmäßig nutzt du dann automatisch den Sync-Service von Mozilla. Möchtest du einen anderen Server nutzen, kannst du das in den Einstellungen ändern.

__Seit Februar 2020 biete ich einen öffentlichen Service für Firefox-Sync an.__ Gerne kannst du ihn nutzen, um deine Daten zwischen deinen Geräten zu synchronisieren. 

Tippe dafür [about:config](about:config) in die Adresszeile von Firefox und suche anschließend nach `identity.sync.tokenserver.uri` und setze den Wert auf `https://sync.firefox.sp-codes.de/token/1.0/sync/1.5`. Du nutzt nun den eingetragenen Sync-Service.

## Weitere nützliche Links

* [Firefox Sync](https://www.mozilla.org/de/firefox/accounts/)
* [Quellcode](https://github.com/mozilla-services/syncserver)

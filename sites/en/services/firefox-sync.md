---
layout: base.njk
key: firefox-sync
title: Firefox Sync
---
# Firefox Sync

Do you use Firefox on more than one device for surfing? Then Firefox Sync lets you synchronize your browser data (bookmarks, open tabs, search history, and more) between all your devices.

To do this, you first need a Firefox account and must log in to your devices. By default, you will then automatically use the Mozilla sync service. If you want to use a different server you can change this in the settings.

__Since February 2020 I offer a public service for Firefox-Sync.__ You can use it to synchronize your data between your devices.

Therefore type [about:config](about:config) in the Firefox address bar, search for `identity.sync.tokenserver.uri` and set the value to `https://sync.firefox.sp-codes.de/token/1.0/sync/1.5`. You are now using the entered sync service.

## More useful links

* [Firefox Sync](https://www.mozilla.org/de/firefox/accounts/)
* [Source code](https://github.com/mozilla-services/syncserver)

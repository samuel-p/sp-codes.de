---
layout: base.njk
key: connectivitycheck
title: Captive Portal Check
---
# <i class="fas fa-wifi"></i> Captive Portal Check

Ein Captive Portal ist eine Anmeldeseite in öffentlichen WLAN-Netzwerken, um den Internet-Zugriff an die Zustimmung bestimmter Nutzungsregeln zu binden. Wenn du in einem öffentlichen Netzwerk eine Anmeldeseite angezeigt bekommst, nutzt dein Gerät dafür einen Captive Portal Check. Dieser ermöglicht es dem Gerät, herauszufinden, ob du einen direkten Internetzugang hast oder nicht. Unter Android wird hierfür beispielsweise eine Anfrage an einen Google-Server gestellt.

__Seit Mitte 2019 stelle ich einen freien Captive Portal Check zur Verfügung: [https://connectivitycheck.sp-codes.de/generate204](https://connectivitycheck.sp-codes.de/generate204)__ Gerne kannst du ihn nutzen, wenn du möchtest.

## Einrichtung in Android

Um den Captive Portal Check in Android zu ändern, benötigt man eine Terminal-App oder eine Verbindung über ADB zu einem Computer. 

Nun können die folgenden Befehle mit der jeweiligen Methode ausgeführt werden, um `http` zu verwenden:

```
# settings put global captive_portal_use_https 0
# settings put global captive_portal_http_url "http://connectivitycheck.sp-codes.de/generate204"
```


Um `https` zu verwenden, müssen die beiden folgenden Befehle genutzt werden:


```
# settings put global captive_portal_use_https 1
# settings put global captive_portal_https_url "https://connectivitycheck.sp-codes.de/generate204"
```

Eventuell musst du dein Gerät anschließend neu starten.

Wenn du AFWall+ verwendest, musst du _[1000] Android-System_ und eventuell _[10040] CaptivePortalLogin_ Internetzugriff gewähren.

## Einrichtung in Ubuntu

Unter Ubuntu muss die Datei `/etc/NetworkManager/NetworkManager.conf` geändert werden. Füge die folgenden Zeilen hinzu oder passe sie entsprechend an:

```
[connectivity]
uri=https://connectivitycheck.sp-codes.de/generate204
```

Starte den _network-manager_ neu:

```
sudo service network-manager restart
```

## Einrichtung in Firefox

Tippe [about:config](about:config) in die Adresszeile von Firefox und suche anschließend nach `captivedetect.canonicalURL` und `network.connectivity-service`. Setze die URL-Werte auf `https://connectivitycheck.sp-codes.de/generate204`, die Domain-Werte auf `connectivitycheck.sp-codes.de`. Das war es schon.

## Weitere nützliche Links

* [Captive Portal Wikipedia](https://de.wikipedia.org/wiki/Captive_Portal)
* [Quellcode](https://git.sp-codes.de/samuel-p/connectivity-check)
* [Docker Image](https://hub.docker.com/r/samuelph/connectivity-check)
* [Setup on Android](https://android.stackexchange.com/a/186995/288049)
* [Setup on Ubuntu](https://askubuntu.com/q/1167177/920103)
* [Captive Portal Kuketz Blog](https://www.kuketz-blog.de/android-captive-portal-check-204-http-antwort-von-captiveportal-kuketz-de/)

---
layout: base.njk
key: connectivitycheck
title: Captive Portal Check
---
# Captive Portal Check

A captive portal is a login page in public WLAN networks to restrict Internet access to the approval of certain terms of use. When you see a login page on a public network, your device uses a captive portal check. This allows the device to find out whether you have direct Internet access or not. In Android, for example, your device sends a request to a Google server.

Since mid 2019 I provide a free Captive Portal Check: [https://connectivitycheck.sp-codes.de/generate204](https://connectivitycheck.sp-codes.de/generate204) You are welcome to use it.

## Setup in Android

To change the Captive Portal Check in Android, you need a terminal app or a connection via ADB to a computer.

To use `http` you can run the following commands with the respective method:

```
# settings put global captive_portal_use_https 0
# settings put global captive_portal_http_url "http://connectivitycheck.sp-codes.de/generate204"
```

To use `https` you can use the following two commands:

```
# settings put global captive_portal_use_https 1
# settings put global captive_portal_https_url "https://connectivitycheck.sp-codes.de/generate204"
```

Maybe you have to reboot your phone after updating the settings.

If you are using AFWall+ you need to give access to _[1000] Android-System_ and in some cases _[10040] CaptivePortalLogin_ to make it work.

## Setup in Ubuntu

In Ubuntu, the file `/etc/NetworkManager/NetworkManager.conf` must be changed. Add or change the following lines:

```
[connectivity]
uri=https://connectivitycheck.sp-codes.de/generate204
```

Restart the network-manager:

```
sudo service network-manager restart
```

## Setup in Firefox

Type [about:config](about:config) in the Firefox address bar and search for `captivedetect.canonicalURL` and `network.connectivity-service`. Set the URL values to `https://connectivitycheck.sp-codes.de/generate204`, the domain values to `connectivitycheck.sp-codes.de`. That's it.

## More useful links

* [Captive Portal Wikipedia](https://en.wikipedia.org/wiki/Captive_portal)
* [Source code](https://git.sp-codes.de/samuel-p/connectivity-check)
* [Docker Image](https://hub.docker.com/r/samuelph/connectivity-check)
* [Setup on Android](https://android.stackexchange.com/a/186995/288049)
* [Setup on Ubuntu](https://askubuntu.com/q/1167177/920103)
* [Captive Portal Kuketz Blog](https://www.kuketz-blog.de/android-captive-portal-check-204-http-antwort-von-captiveportal-kuketz-de/)

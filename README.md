# DWC-CNC Merging With Duet Web Control

DWC-CNC's changes have been merged into Duet Web Control 3.4-b2. In Duet Web Control 3.4 there is a menu option to select which dashboard you want to use or by default it will use the dashboard based on the Duet's mode. This project will no longer be receiving updates.

# Duet Web Control - EXPERIMENTAL CNC version

Duet Web Control is a fully-responsive HTML5-based web interface for RepRapFirmware which utilizes the Bootstrap framework, JQuery and a few other libraries to allow easy control of Duet-based 3D printer electronics.

It is designed to communicate with RepRapFirmware using WebSockets and RESTful HTTP requests. One goal of the core application is to keep things compact, so a good loading speed can be achieved even on slow networks. Another one is to communicate to the firmware using only AJAX calls, which either return JSON objects, plain texts or binary blobs.

Duet Web Control is free software; it is licensed under the terms of the GNU Public License v3.

Please note, **this CNC version of DWC is experimental and it may not be maintained**. Some or all of the features of this version may in future be made available as options in the regular version of Duet Web Control. The CNC dashboard will only be visible when the Duet is in CNC mode.

## Supported electronics

At this time the following platforms are officially supported:

* Duet 2 Maestro
* Duet 2 WiFi
* Duet 2 Ethernet
* Duet 3 MB 6HC
* Duet 3 Mini 5+ Ethernet
* Duet 3 Mini 5+ WiFi

## Build variants

There are two build variants available:

* DuetWebControl-SD for Duet Maestro, Duet 2 series, and Duet 3 series in standalone mode
* DuetWebControl-SBC for Duet 3 series in SBC mode

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

In order to use the local development setup with software versions >= 3.2.0, it is possible to add `M586 C"*"` to your `config.g`.
However, this is a potential security issue because it permits cross-origin requests from ALL foreign sites.

### Compiles and minifies for production

```
npm run build
```

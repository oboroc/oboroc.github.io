---
layout: post
title:  "NGP development setup"
date:   2013-12-04 00:00:00
categories: posts
---

This post is mostly here to formalize my train of thoughts.

My hypothetical NGP development setup consists of a NeoGeo Pocket or Pocket Color handheld, Bung or FlashMasta flash cartridge with flasher,
a NGP link cable with some modifications (MAX232 3.3v <-> 5v voltage converter and / or FDDI serial to USB).

The link cable will have to be cut, but it can be done in a non-destructive way.
We can bridge the gap with a pair of male/female DIN5/8/9 or DB9 connectors, so it could keep on functioning as normal if gap is reconnected.
This DIN or DB connector would go to a small box, which would couple serial port voltage levels and then either connect to legacy PC COM port or to USB port through FDDI chip.

On NGPC, flash cartridge would need a boot loader that supports accepting commands from link port.
It would function in a mode somewhat similar to ActionReplay / Caetla firmware for Playstation, or like Dreamcast CD with serial / BBA loader from Napalm-X.
The most important command would be to load X bytes at address Y in RAM and then jump to Y.
Second most important feature would be to force reset from PC side if NGPC is stuck, although I'm not sure if this can be done in software only.

On PC side we would need a program that is similar to PC-Comms tools for Playstation with Caetla.
Ideally the tool should be command line, so it could be included in makefile or other build script.

Such setup would allow to quickly test homebrew programs on real hardware without too much hassle.
If homebrew is built with awareness of such setup, and calls a callback in boot loader every second
(which is forever even for the modest TLCS900H CPU), then some interesting debugging features can be supported.
Called boot loader hook would normally immediately return, but on request from control program it could do things like reset the program,
dump an area of memory, edit some live variables, or even modify code in debugger on the fly.

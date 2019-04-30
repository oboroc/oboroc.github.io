---
layout: post
title:  "HP Z800 loud fan noise fix"
date:   2019-04-29 19:15:00
categories: posts
---

I bought an HP Z800 3 years ago, but didn't use it much due to it being very loud.
[Turns out this is not normal and is caused by a transistor failure in a cable behind the front panel](https://h30434.www3.hp.com/t5/Business-PCs-Workstations-and-Point-of-Sale-Systems/z800-fan-speed-and-temperature-sensor/td-p/6619799).

I didn't feel like paying close to 100 CA$ for a replacement cable from HP, so I ordered a bag of 100 NPN 2N2222 transistors from eBay.
The cost was something under 2$ shipped. Today I got my bag of transistors and decided to replace the faulty one in my Z800.

Disassembly turned out to be [simple and straight forward](https://support.hp.com/ca-en/document/c01756915):

- remove power supply: lift and pull on the handle attached to it;
- unscrew two torx-15 screws from the bottom on the opposite side from the removable side panel;
- slide the panel from under which I removed the screws down. This was rather hard, but in the end it did slide down;
- lift and remove the panel;
- unscrew 4x torx-15 screws from the front panel. One near each corner;
- remove front panel;

The cable that needs to be fixed is the one that snakes to the little compartment
in front of the power supply and behind the top of front hinge.
Unplug two connectors: one for the speaker and another for chassis intrusion button.
Pull the cable out of compartment. Strip the big black shrinking tubing from the cable to reveal the 2N3904 NPN transistor.
Shorter transistor leg is collector and it is connected to the grey wire.
The other two legs are base and emitter and they are connected to black wire.

![bad original 2n3904 NPN transistor](/img/2019-04-29-hp-z800-loud-fan-noise-fix-1.jpg)

I unsoldered the old transistor, added my new heat shrinking tubing to the wires and resoldered the new 2N2222 NPN transistor.
I then shrank the tubing, used a bit of black isolation tape to bundle the cables together.
I left the body of NPN transistor uncovered, so it hopefully won't heat up too much and go bad like the old 2N3904 did.
Internet search says 2N2222 is very similar to 2N3904, but can handle 3x times the current.
I hope it won't go bad.

![new 2n2222 NPN transistor soldered in](/img/2019-04-29-hp-z800-loud-fan-noise-fix-2.jpg)

I reassembled and tested my Z800. While not whisper quiet, it's a lot less loud now.
It is totally bearable to sit next to it.

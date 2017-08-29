---
layout: post
title:  "Windows 7 Starter Edition works on a Pentium 3 system"
date:   2017-08-29 18:11:00
categories: posts
---

I got curious if it's possible to run Windows 7 on a Pentium 3 system and set out to find out.
Turns out it works fine, provided you can find supported expansion cards.

I sort of barely met the minimum requirements of 1GB of RAM and 1GHz+ 32-bit CPU.

ISA is completely out of question. On Vista it's disabled but can be re-enabled. On XP it's fully enables.

Hardware specs:

- 1999 vintage ASUS P3B-F v1.04 motherboard that I got from some kind gentleman
from GTABUG mailing list back in 2003;
- Celeron Tualatin 1400MHz with built-in Coppermine motherboard compatibility modification from a Korean eBay seller user88;
- 2003 vintage ATI Radeon 9800 Pro 128MB AGP video card;
- 1GB of RAM (4 x 256MB PC133 CL3 SDRAM);
- Sound Blaster 128 PCI;
- RTL8139 NIC;
- period accurate biege AOpen ATX case and 300Wt Zalman ATX power supply.

I had to replace parts that worked great in Windows 98 SE and Windows XP,
but are unsupported in Windows 7:

- ATI Radeon 9200 128MB low-profile, passive cooled AGP video card;
- 512MB of RAM (2x 256MB PC133 CL2 SDRAM);
- Sound Blaster AWE64 ISA;
- Intel 10/100 Pro NIC.

Computer feels slow but usable.

Here is the Windows 7 hardware scores:

![Windows 7 hardware scores for a Pentium 3 system](/img/2017-08-29-windows-7-starter-edition-works-on-a-pentium-3-system.png)

---
layout: post
title:  "Upgrade VRAM in your your MSX2+/TurboR to 192KBytes"
date:   2005-03-23 00:00:00
categories: posts
---

*WARNING*: Procede at your own risk. You've been warned. I can't be held
responsible for any damage.

What is this upgrade all about?

It's about using your V9958 VDP to it's maximimum potential. V9958 is used in
all variants of MSX2+ and TurboR computers. By default it is equipped with
128Kbytes of VRAM (that is dedicated Video RAM), just like V9938 from MSX2
computers. With this mod your V9958 can address extra 64Kbytes of RAM.

To upgrade your VRAM to 192K, you'll need two 4464 chips 120ns or faster.
You'll have to lift pin 16 on each chip and solder all other pins on top of
two existing 4464 chips. Make sure that you put new chips on top of existing
chips from different 64K banks, so one extra chip will use D0-D3 signals from
data bus, and the other - D4-D7.

Normally VRAM chips look like this on computer PCB:

          +--------+
        1 |  4464  (  \
          +--------+   \ bank 1 (D0-D3)
          +--------+   /
        2 |  4464  (  /
          +--------+
          +--------+
        3 |  4464  (  \
          +--------+   \ bank 2 (D4-D7)
          +--------+   /
        4 |  4464  (  /
          +--------+

Here is the pinout for 4464 DRAM chip in DIP-18 package (viewing from top):

             +---U---+
         /OE |1    18| GND
          D0 |2    17| D3
          D1 |3    16| /CAS
         /WE |4    15| D2
        /RAS |5    14| A0
          A6 |6    13| A1
          A5 |7    12| A2
          A4 |8    11| A3
         Vcc |9    10| A7
             +-------+

The extra chips should go on top of chip 2 and 4. Just bend pin 16 (/CAS) on
each chip first and solder the rest of pins to corresponding pins of existing
chips. Make sure you orient the chips the right way before you start soldering,
because unsoldering "piggy back" chips isn't fun at all. Now join both /CAS
pins with a piece of wire and then connect them to V9958 pin 59 (/CASX) via
100 Ohm resistance. All done!

Please note that you will still see 128K VRAM on bootup screen, but don't
worry, it doesn't mean your upgrade didn't work. The text is hardcoded in
BIOS. It can potentially be hacked to reflect actual VRAM size, same way MSX2
BIOS can be adjusted to calculate actual mapper memory "MSX2+ style" instead of
showing hard-coded default value.

After successful upgrade you'll get extra pages in various video modes. In
addition there is at least one program that make use of extra 64Kbytes VRAM -
FastCopy. And if enough people install this mod on their MSX2+/TurboR
computers, this feature might get support in more MSX software and in MSX
emulators. If you've recently upgraded a Panasonic of Sanyo MSX2+ computer
from 64K to 256 or 512K, you can reuse the 4464 chips that are left over from
upgrade. They are slow ("-12" in chip marking stands for 120ns), but it's
good, because the faster is DRAM timing, the hotter it usually gets. And your
MSX power supply wasn't designed for hot and power-hungry chips. If can go bust
some day with smoking fast memory chips (80ns and faster).

This information is based on MRC forum posts from members Guillian (most
information) and Chardson (resistance value between DRAM /CAS and VDP /CASX).

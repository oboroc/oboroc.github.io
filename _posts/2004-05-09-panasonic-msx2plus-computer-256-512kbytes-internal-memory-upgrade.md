---
layout: post
title:  "Panasonic MSX2+ computer 256 / 512Kbytes internal memory upgrade"
date:   2004-05-09 15:28:00
categories: posts
---

*WARNING*: Procede at your own risk. You've been warned. I can't be held
responsible for any damage.

I performed two 512K WSX upgrades myself, and at least three other people
upgraded their Panasonic FS-A1FX, A1WX and A1WSX since this instruction was
published. No one so far reported killing their precious MSX2+ systems while
trying to upgrade memory. This means that there is a good chance you'll be
successful as well!

Desolder 4464 DRAM chips from IC22 and IC23 and capacitors from C89 and C90
(you can use those chips to upgrade your VRAM to 192KBytes or expand SCC+
cartridge from 64 to 128Kbytes). Put those capacitors in C88 and C91 and 44256
DRAM chips in IC21 and IC24 positions.

Look for T9769 MSX engine chip on the bottom side of PCB. Next to it you will
find two jumpers: J3 and J2 (R140 and R141 for WSX PCB). Desolder resistance
from J2 (R140 on WSX). Short J3 (R141) with a small piece of wire to get +5V on
T9769 pin 52. This is all you need to do for a 256Kbytes upgrade!

If you want to get full 512Kbytes of memory, follow the rest of the steps.

Solder two more 44256 chips over first two, leave pin 17 unsoldered and bended
up.

_Now comes the toughest part of this upgrade. Be extra cateful, since you can
damage your MSX2+ computer beyond repair!_

Desolder T9769 pin 51 and connect it to pin 52 (+5V). Solder a wire from T9769
pin 50 to pin 17 of both "second flour" 44256 chips.

All done! If you did everything correctly, you'll get full 512KBytes of RAM in
your MSX2+ computer. This is enough to play english disk version of Metal Gear
2 with SCC sound.


## Chip pinouts

DIP-20 44256 256Kword x 4-bit DRAM chip
<pre>
     +---+  +---+
  D0 |1  +--+ 20| GND
  D1 |2       19| D3
 /WE |3       18| D2
/RAS |4       17| /CAS
     |5 44256 16| /OE
  A0 |6 44258 15| A8
  A1 |7       14| A7
  A2 |8       13| A6
  A3 |9       12| A5
 VCC |10      11| A4
     +----------+
</pre>

Toshiba T9769 "MSX Engine"
<pre>
     108 107       74 73
      |  | ....... |  |
      _________________
109--|                 |--72
110--|                 |--71
    :|     TOSHIBA     |:
    :|                 |:
    :|      T9769      |:
143--|  o              |--38
144--|_________________|--37
      |  | ....... |  |
      1  2        35 36
</pre>

## Obtaining 44256 DRAM chips

What you need are DIP-20, 256K x 4-bit DRAM chips. They are normally marked
with xxxx4256-yy or xxxx4C256-yy, where "xxxx" is anything at all, and "-yy" is
speed in nanoseconds divided by 10 if first digit is 1 or two, or as is, if
it's 5 to 9. So "-12" stands for 120ns, "-20" - for 200ns and "-80" - for 80ns.
If you have a choice, try to find xxxx4256, not the xxxx4C256. "C" stands for
CMOS, i.e. designed to operate at 3.3V, not the 5V TTL levels your MSX uses.
CMOS chips will work, but will get pretty hot after a while and will put a
strain on the power supply.

I got my first DRAM chips from an old 512K SVGA board (4 x TMS514C256-80) from
a local electronic junk store. It was 8 CA$, which is about 5.5 US$ or 4 euro.
Later on I bought entire 386 PC with a Trident ISA SVGA card, which had full
megabyte of DRAM (8 x OKI534256-10). All for 3$! Just check some thrift stores
and / or friends with really old PCs. I'm sure you'll find it!

## Some fairly generic soldering adiveces

Use desoldering braid or a special air-sucking tool to desolder components from
PCB without damage. Use good flux to cleanly solder components. Try to remove
excess of flux from PCB using some alcohol. Use a low-power soldering iron
(~20Watt). Try to find a low voltage grounded soldering station, for example
Solomon SL-20. Make sure your soldering gun is properly cleaned before you work
on T9769. Try to reduce the shaking of your hands by relaxing for a few minutes
before you start the work. A nice cup of fresh green tea and a few deep breaths
can help. Be extra careful then working with high pin density chips like T9769.
Use a fine needle and a soldering iron to heat-up and gently pull the surface
mounted pin from the PCB. Don't touch pin with soldering gun for more then a
second or two at a time.

## Credits

Big thanks to Manuel "Guillian" Pazos <http://personales.mundivia.es/mpazos/>
for helping me out on MRC forum: <http://www.msx.org/forum/msx-talk/hardware/ram-upgrade-kit?page=2>

## Updates

1. PDF copy with photos of the first version of this instruction, converted by
Hans Otten. <http://www.msxarchive.nl/pub/msx/docs/hwmodsetc/msxa1wsxmemory.pdf>

2. Clifer, a korean MSX fan, made similar mod using 1MByte DRAM chip from
72-pin PC SIMM. His instruction is more comprehensive, since it actually
explains what the mod does, not just the steps on doing it.
~~http://myhome.naver.com/clifer98/menu2.html~~

3. I performed this upgrade on Sanyo Wavy 35 PHC-35J. There is no ready place
for 44256 DRAM chips, so I had to sorder them on a separate prototype mini-PCB
and use old IDE cable to connect it to main board. I used hot glue gun to
permanently attach mod PCB to main board.

---
layout: post
title:  "Matrox Millennium"
date:   2016-07-01 22:11:00
categories: posts
---

A couple of days ago I bought an original Matrox Millennium PCI SVGA video card.
It's a 1997 DELL OEM rev. B board with 4MB WRAM.
Board layout and components are really beautiful:

<a href="/img/2016-07-01-matrox-millennium-1-full.jpg">
![Matrox Millennium front side](/img/2016-07-01-matrox-millennium-1.jpg)
</a>

<a href="/img/2016-07-01-matrox-millennium-2-full.jpg">
![Matrox Millennium front side](/img/2016-07-01-matrox-millennium-2.jpg)
</a>

Back in it's heyday this card was selling for around 600$.
Needless to say I used a much cheaper and slower noname PCI SVGA card with Cirrus Logic CL-GD5436 chipset and 1MB DRAM.
I can't quite explain why it's so much fun to play around with stuff that was way out of reach when it was current, but it is.

Out of curiosity I searched online for BIOS update and found this mirror of Matrox web site download page from 2005:
[BIOS updates for Matrox Millennium, Millennium II, Mistique, Mistique 220, Productiva G100, Millennium G200, G200MMS, G400, G450, G450MMS, G550, P650, P750 and Parhelia](http://video.rom.by/matrox/recovery/html/home2.htm).
For some unfathomable reasons Matrox removed those files from it's current web site, but they are still available on [Matrox ftp server](ftp://ftp.matrox.com/pub/mga/bios/)

Updating BIOS was fairly straightforward.
Run setup351.exe under Windows, it unzips files to C:\mgafold\setup351\.
To start flashing, run C:\mgafold\setup351\UPDBIOS.EXE.
This is a DOS-only program, it didn't work under Windows.
C:\mgafold\setup351\ directory size is about 1.6MB, so it won't fit on a single 3.5" floppy.
I reformated HDD to FAT32, booted from Windows 98 boot floppy and ran UPDBIOS.EXE.
It helpfully notified me that I had BIOS v2.3 and it will be updated to v3.0:

![Matrox Millennium BIOS update](/img/2016-07-01-matrox-millennium-3.jpg)

Here is a backup copy of [Matrox Millennium BIOS v2.3](/files/2016-07-01-matrox-millennium-bios-v2.3.zip) for anyone interested.

Since it's an OEM version of card, I wasn't sure if it has 175 or 220MHz RAMDAC.
Fortunately Matrox drivers reported it as 220MHz version:

![Matrox Millennium information](/img/2016-07-01-matrox-millennium-4.png)

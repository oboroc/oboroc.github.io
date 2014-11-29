---
layout: post
title:  "Zalman VE200 SE annoyances"
date:   2013-08-25 00:00:00
categories: posts
---

![Zalman VE200 SE image][]

I wanted to install FreeBSD on my Zotac ID42 mini-PC, and just for the kicks I decided to use my Zalman VE200 SE 2.5" SATA HDD enclosure I bought a few years ago.
This enclosure allows to mount ISO files located in "\_ISO" folder and then present them as a CD/DVD/BD-ROM drive.
Getting it to work was a bit challenging, because my enclosure firmware was at 1.00.00-65F version ("F" here means FAT32/ExFAT, "N" is for NTFS).
I used 20GB SATA drive from old RRoD Xbox 360. Formatting it as NTFS was useless, since current firmware is FAT-only.
Formatting it as FAT32 didn't work out either - firmware didn't see any ISO files in "\_ISO" folder.
However formatting it in ExFAT with default 32K cluster size did the trick.
Short trip to Zalman web site yielded "\_iso\_firm\_ZMVE200-1.00.00-70N.iso" update file, which I was able to flash.
After this I reformatted drive as NTFS, leaving default 4K cluster size and now it seems to work.

I wish Zalman spent extra 5 cents, got a bigger flash chip to store firmware, and made universal firmware that supports FAT32/ExFAT and NTFS.
Whatever money they would loose upfront they'd make up in fewer support calls and better customer satisfaction.

[Zalman VE200 SE image]: /img/2013-08-25-zalman-ve200-se-annoyances.jpg
"Zalman VE200 SE"

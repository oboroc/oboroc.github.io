---
layout: post
title:  "Windows 10 on ASUS A8N-SLI Premium"
date:   2016-10-30 22:07:00
categories: posts
---

TL;DR: Windows 10 x86 works fine on 2005 vintage ASUS A8N-SLI Premium motherboard.

I build this PC back in 2005, it was expensive and top of the line all around:

* ASUS A8N-SLI Premium motherboard;
* Athlon 64 X2 4400+ CPU with 1MB L2 cache;
* SilverStone Nitrogon NT02 cooler;
* 2x 1GB DDR400 OCZ Platinum;
* Geforce 7800 GT with IceQ aftermarket cooler;
* Creative Sound Blaster X-Fi Platinum with 5.25" bay, remote and mini-DIN to DIN converters;
* NEC ND-3520A DVD writer;
* 2x 250GB SATA HDDs in RAID-0 (don't remember the brand or model, they had SATA and molex power connectors);
* Thermaltake 680 Watt power supply (with cheap Chinese electrolytic capacitors, as I learned later);
* black, windowless Thermaltake Tsunami Dream case.

It was a very competent PC for it's time.
I used it up until 2007, when I upgraded to a new PC with Core 2 Quad Q6600 CPU.
I kept it around until ~2011, and then gave it away to a coworker that needed a home PC but didn't want to spend any money.
Fast forward 5 years, my coworker told me that power supply died, so he bought a new PC, and if I want, I can have it back.
I decided to take it.
I vacuumed it, replaced the power supply with [Cooler Master GX 750W](http://www.coolermaster.com/powersupply/gx-series/gx-750w/) and got it working again.
I upgraded HDD to Samsung Spinpoint 750 GB.
I used to have a pair of them in RAID-0, but one died long time ago.
I also upgraded Geforce 7800 GT with a beastly and beloved ASUS Geforce 8800 GTX.

I decided to try installing Windows 10 on it.
x64 version flat out refused to install due to lack of [CMPXCHG16B](https://en.wikipedia.org/wiki/X86-64#Older_implementations) instruction.
x86 did go through full install, but would panic on startup.
I found an advise on some forum to try disabling memory remapping in BIOS, but this didn't help.

I decided to get the memory to maximum 4GB. I bought 2 more 1GB OCZ Platinum DIMMs off eBay for under 20$.
I had to trim a piece of plastic from NT02 fan to fit extra memory in secondary black slots.
Once installed, memory was recognized, but with default BIOS DRAM settings on AUTO, it would switch to DDR333.
I did a bit of research, and it was due to earlier Athlon 64 CPU memory controller not being able to keep up with 4 DDR400 DIMMs.
My CPU didn't have this issue.
I changed DRAM settings to manual: DDR400, 2-3-2-5, 2T (was 1T for just two DIMMs).
It worked fine, passed MEMTEST86.
With 1T it wouldn't even boot.

With 4GB working, I attempted Windows 10 x86 install again, and it worked fine this time!
It does feel slower then more modern PCs, but still entirely usable.
Chrome with uBlock Origin is snappy.
Youtube playback works great.


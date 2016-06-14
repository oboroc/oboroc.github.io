---
layout: post
title:  "I bought old junk PC"
date:   2016-05-13 20:08:00
categories: posts
---

I bought an old junk PC from a scrap collector on the street.

The reason for this is my very first PC parents bought me in 1996.
It was a Pentium 120MHz overclocked to 133MHz (FSB 60MHz -> 66MHz).
My memory is vague, but most likely it had ASUS P2T4 motherboard,
16MB RAM (2x 8MB 60ns EDO 72-pin SIMM),
a glitchy Cirrus CL-GD5434 PCI VGA card with 1MB RAM,
a Sound Blaster Pro compatible ISA sound card with ESS AudioDrive 688 chipset,
a single-speed IDE CDROM I got for free from a generous colleague at University,
a 1.7GB Fujitsu IDE HDD and a 3.5" floppy drive.
It was housed in AT mid-tower case.
It came with affordable but very nice Chicony keyboard and Mitsumi mouse.
It cost us about 1600 US$, and I managed to sell it 1.5 years later for 700 US$ and was very happy.
But now I'm kind of nostalgic and wish I kept it, but that would've been way to expensive.
I ended up using 700 US$ towards my new 1998 system, It also had an ASUS motherboard, AMD K6 300MHz CPU, Nvidia Riva TNT 16MB, Gravis Ultrasound PnP with 8MB sample RAM and a 2x2x4 HP CD-RW drive.

A few days ago I went out to buy lunch and on my way I saw a truck full of old junk computers, printers and CRT monitors.
On an impulse, I spoke to driver and offered 10$ for the PC that looked least damaged.
It was in a baby-AT case, predecessor of modern ATX cases.
I took it home and tried to start it, things didn't go well.
On power-on it would spin CPU fan and turn up all the lights (power, ide, suspend), but it would not react to keyboard, output anything to monitor or even produce any beep codes if I pulled memory.
After a few minutes of trying to make it run it started exuding strong moldy odor.
I took it apart and left pieces out on the balcony under direct summer sun.
After 6 hours of baking, I hooked up motherboard to a known good power supply and hurrah, it booted to post screen.
Motherboard has very few labels or silkscreen text on it, not a good sign. Good brands plaster their logos and model numbers all over their products.
It did have Elpina and BA E-VO in silk screen.
This was enough to find a [forum post](https://www.wimsbios.com/forum/where-can-find-motherboard-manual-f34/manual-for-elpina-9814-t5742.html) about it being a relabeled M571 motherboard from PCChips.
For those who don't know, PCChips was a very prolific motherboard vendor in late 90-s to early 2000-s.
It was offering very cheap prices and their motherboards sort of worked, but not very well.
I did search online and found a couple of very comprehensive sites, dedicated to M571: [1](http://m571.com/m571/) and [2](http://cwcyrix.duckdns.org/techpage/html/m1.html).
Thanks a lot to people who created and maintain those pages!
If it wasn't for them, I'd give up and just desolder power, SIMM-72 and battery sockets and trash the rest.
Apparently there are 3 main versions of this motherboard.
Versions 3.2 and 7.x have 3 ISA slots and on-board CM8830 sound chip, and version 1.x have 4 ISA slots but no sound chip.
Version 7.x supports 2.2v core voltage for AMD K6-2+/K6-III CPUs, and it's clearly marked with black dot next to 2.2v jumper.
On versions 1.x and 3.2, same jumper provides 2.5v, and is clearly labeled as such in silkscreen.
This let me to believe I got version 3.2.
Once I booted, the CPU was mis-identified.
It is a Pentium MMX 200MHz, configured as 66MHz FSB and 3x multiplier.
It was showing 225, 250 or 266 randomly on each boot.
Surprisingly this got fixed once I switched from on-board VGA to Diamond Stealth 2000 PCI VGA card with 4MB (S3 Virge 325, BIOS v1.2).
I tested it again with on-board VGA, and it was showing correct 200MHz setting.
I then disabled on-board VGA completely with JP3 jumper.
I replaced 32MB DIMM it had with two speedy 64MB DIMMs for a total of 128MB of RAM.
After this it finally booted to Windows 98 that was on the 2GB hard drive it came with.
This PC belonged to a Tamil christian church, was last used around 2002 and had Corel WordPerfect, Quattro Pro 9 and Corel Draw 7 on it.
It also had bloat in form of Norton Antivirus 2002 and AOL, so I did clean re-install of Windows 98 SE.
Floppy drive wouldn't accept floppy disks, so I had it replaced.
Later I disassembled it to find hair and a bunch of used long distance calling cards.
I cleaned floppy drive thoroughly, but I'm still doubtful if it's salvageable after all the abuse it suffered.
I finally decided to update to a more recent version of BIOS.
I couldn't flash BIOS with amiflash 6.x that came from PCChips with BIOS file, it would just hang.
While looking for different versions of amiflash, I came across an amazing project: [UniFlash](http://www.rainbow-software.org/uniflash/).
This program worked beautifully, I took backup of BIOS that motherboard came with and upgraded to BIOS version 19990514S.
The one I had before was 1997xxyyS, sadly I forgot to take a picture and now I can't see it as clear text in BIOS file.
Someday I may flash back just to see if the version I got is somehow unique, and if so, share it with the good folks who maintain M571 support pages.
If anyone is curious to look at it, here is the file: [2016-05-13-m571-1997-bios-backup.zip](/files/2016-05-13-m571-1997-bios-backup.zip).
After upgrade, booting from CDROM works. It didn't with original BIOS.

I'm kind of tired of this project for now, so I'll just put it on hold until I have some free time and willpower to continue.
I also need to update this post with some pictures.

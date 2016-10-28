---
layout: post
title:  "SATA SSD performance"
date:   2016-10-27 22:55:00
categories: posts
---

TL;DR: Be careful which PCI Express slot you use for your SATA-3 controller card. Performance difference could be 2x.

I built my current home PC in 2010. 4 years later I upgraded it with Samsung 840 EVO 256GB SSD.
My ASUS P6TD Deluxe motherboard only supports SATA-2, which peaks out around 250MB/S, way below 500MB/S that SSD can handle.
To address this bottleneck, I bought a cheap PCI Express controller card with Marvell 88SE9123 controller.
I installed this card in the bottom PCI Express slot, connected SSD and forgot about it.
Recently, however, I learned about a free software for benchmarking storage devices:
[Crystal Disk Mark](http://crystalmark.info/software/CrystalDiskMark/index-e.html).
And boy oh boy, did my SSD performance suck:

![Samsung 840 EVO SSD with default Microsoft Windows 10 x64 driver in bottom PCIE slot](/img/2016-10-27-sata-ssd-performance-1.png)

I tought may be Windows 10 x64 default driver isn't all that great, so I wanted to try vendor drivers.
Marvell cares so little about this chip, it doesn't even provide drivers on it's own support site.
I got Marvell 1.2.0.1047-WHQL OEM driver from the awesome french site
[Station-Drivers](http://www.station-drivers.com/index.php?option=com_remository&Itemid=352&func=select&id=348&lang=en).
It made performance slightly worse:

![Samsung 840 EVO SSD with Marvell 1.2.0.1047-WHQL x64 driver in bottom PCIE slot](/img/2016-10-27-sata-ssd-performance-2.png)

I reverted driver back to Microsoft.

At this point it hit me: what if the slot I'm using is not the highest performing one?
Moving controller card one slot up, to PCI Express slot that would normally be used with a second CrossFire/SLI videocard, improved performance drammatically:

![Samsung 840 EVO SSD with default Microsoft Windows 10 x64 driver in second from the bottom PCIE slot](/img/2016-10-27-sata-ssd-performance-3.png)

While researching information about Marvell 88SE9123 controller, I stumbled across some forum posts claiming it doesn't pass TRIM command to attached SSD.
If this is true, it's quite terrible.
I may try another SATA-3 controller card with a different chipset, like Asmedia ASM1061.

I decided to try latest Marvell OEM drivers 1.2.0.1048_WIN10_WHQL from Station-Drivers.

![Samsung 840 EVO SSD with Marvell 1.2.0.1048_WIN10_WHQL x64 driver in second from the bottom PCIE slot](/img/2016-10-27-sata-ssd-performance-4.png)

Sequential reads/writes are a bit slower when with default Microsoft Windows 10 x64 drivers, but random 4k reads are faster.

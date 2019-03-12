---
layout: post
title:  "Setting up a PC Engines apu2c4 headless mini-PC"
date:   2019-03-11 22:41:00
categories: posts
---

Those notes are mostly for myself, in case if I need to do this again.

Get serial connection going. I use a cheap Trendnet USB to serial cable and a serial null-modem cable.
Null modem cable should have a female DB-9 connector on both ends. Pin 2 goes to pin 3 on the other side.

Install PuTTY, configure it for the COM port you use as 115200 8N1.
![PuTTY settings](/img/2019-03-11-setting-up-a-pc-engines-apu2c4-headless-mini-pc-1.png)

Turn apu2c4 system on by plugging in the power supply.
You should see a bunch of output in PuTTY, first from BIOS and then from whatever OS is currently installed:
```
PC Engines apu2
coreboot build 20170831
BIOS version v4.0.12
4080 MB ECC DRAM

SeaBIOS (version rel-1.10.2.1)

Press F10 key now for boot menu
C o n s o l e s :   i n t e r n a l   v i d e o / k e y b o a r d
s e r i a l   p o r t       Disk...
 /bboooott//ccoonnffiigg::  --SS111155220000  --DD
B I O S   d r i v e   C :   i s   d i s k 0 0
 \
B I O S   6 3 8 k B / 3 6 6 8 6 6 4 k B   a v a i l a b l e
m e m o r y y
```

Next, grab the latest mainline BIOS release from <https://pcengines.github.io/>. At the time of writting it's v4.9.0.3.

If you are a Windows user, grab "TinyCore USB installer v1.8" from [here](https://pcengines.ch/howto.htm#TinyCoreLinux).

Get a USB stick. I am using an old 2GB USB stick formatted as FAT32.
Run downloaded "apu-bootable-usb-installer_v1.8.exe", elevate permissions, accept license,
select your USB stick and click on the check box saying "...format drive...".

![Preparing USB stick for BIOS update](/img/2019-03-11-setting-up-a-pc-engines-apu2c4-headless-mini-pc-2.png)

Click "Next", then "Finish".

Copy BIOS file to the stick.
If you check the USB stick, you'll see the following files on it:
```
E:\>dir
 Volume in drive E is TINYCORE
 Volume Serial Number is 4CD0-998B

 Directory of E:\

09/02/2016  11:55 AM             1,500 syslinux.cfg
08/02/2017  05:29 AM        19,839,127 core.gz
07/15/2016  10:30 AM               394 Readme.txt
07/15/2016  10:30 AM            18,339 Copying
07/20/2016  05:31 AM         4,103,744 vmlinuz
07/15/2016  10:30 AM            26,140 memdisk
03/03/2016  09:58 PM            26,568 menu.c32
03/03/2016  09:58 PM            25,204 chain.c32
07/15/2016  10:30 AM            24,148 libutil.c32
07/15/2016  10:30 AM           306,411 ipxe.krn
07/15/2016  10:30 AM               233 takemehome.txt
05/15/2017  03:38 AM               156 autostart.sh
03/11/2019  10:29 PM         8,388,608 apu2_v4.9.0.3.rom
              13 File(s)     32,760,572 bytes
               0 Dir(s)   1,984,458,752 bytes free
```

Eject the stick, plug it in apu2c4 and unplug/replug apu2c4 power supply.
PuTTY should print out something like this:
```
PC Engines apu2
coreboot build 20170831
BIOS version v4.0.12
4080 MB ECC DRAM

SeaBIOS (version rel-1.10.2.1)

Press F10 key now for boot menu
```

Press F10, next you'll see:

```
Select boot device:

1. USB MSC Drive Forza Motorsport 3 8.02
2. ata0-0: Samsung SSD 850 EVO mSATA 120GB ATA-9 Hard-Disk (11
3. Payload [memtest]
4. Payload [setup]
```

Press 1. This will take you to TinyCore shell prompt:

```
Booting Core 6.4
Running Linux Kernel 4.2.9-tinycore.
Checking boot options... Done.
Starting udev daemon for hotplug support... Done.
Skipping compressed swap in ram as requested from the boot command line.
Scanning hard disk partitions to create /etc/fstab
Setting Language to C Done.
Ignoring swap partition(s) seek as requested.
Loading extensions... Done.
Setting keymap to us Done.
Skipping DHCP broadcast/network detection as requested on boot commandline.
Setting hostname to box Done.

  ____   ____   _____             _
 |  _ \ / ___| | ____|_ __   __ _(_)_ __   ___  ___
 | |_) | |     |  _| | '_ \ / _` | | '_ \ / _ \/ __|
 |  __/| |___  | |___| | | | (_| | | | | |  __/\__ \
 |_|    \____| |_____|_| |_|\__, |_|_| |_|\___||___/
                            |___/

TinyCore 6.4 www.tinycorelinux.com

login[647]: root login on 'ttyS0'
waiting for USB being mounted .sd 4:0:0:0: [sdb] No Caching mode page found
.

Welcome to TinyCore running on PC Engines apu boards
To update the BIOS type "flashrom -w apu_xyz.rom -p internal"

[+46.9 C][root@box:/media/TINYCORE]$
```

Next, type in `flashrom -w bios-file-name -p internal` and press enter:
```
[+45.1 C][root@box:/media/TINYCORE]$ flashrom -w apu2_v4.9.0.3.rom -p internal
flashrom v0.9.9-r1954-beead91-17 on Linux 4.2.9-tinycore (i686)
flashrom is free software, get the source code at https://flashrom.org

Using default programmer "internal" with arguments "".
Error accessing high tables, 0x100000 bytes at 0xdffae000
/dev/mem mmap failed: Resource temporarily unavailable
Failed getting access to coreboot high tables.
Found chipset "AMD FCH".
Enabling flash write... OK.
Identifying board "PC Engines apu2"... OK.
Found Winbond flash chip "W25Q64.V" (8192 kB, SPI) mapped at physical address 0xff800000.
Reading old flash chip contents... done.
Erasing and writing flash chip... Erase/write done.
Verifying flash... VERIFIED.
```

Next, unplug USB stick, type `reboot` and press enter. apu2c4 will restart. You should see something like this:
```
PC Engines apu2
coreboot build 20190803
BIOS version v4.9.0.3
4080 MB ECC DRAM
SeaBIOS (version rel-1.12.0.1-0-g393dc9c)

Press F10 key now for boot menu
```

BIOS update is done!

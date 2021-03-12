---
layout: post
title:  "Intel Above Board PS/PC RTC support"
date:   2021-03-11 21:45:00
categories: posts
---

I decided to make public my work on Intel Above Board PS/PC RTC support:

<https://github.com/oboroc/intel-above-board-ps-pc-rtc>

![Intel Above Board PS/PC card photo](/img/2021-03-11-intel-above-board-ps-pc-rtc-support.jpg)

So far I had lots of fun using Ghidra to disassemble original Intel driver.
I did my best to format and clearly label functions and data structures and generally follow the logic along.
WinMerge is a fantastic tool for spotting the differences between binary files.
I left labes as lXXX, where XXX is the label address in hexadecimal.

Next, I want to:

- convert repetitive code blocks into macros;
- consider optimizing out inefficiencies to shave some bytes from the 1280 bytes that Intel driver occupies in base memory;
- consider converting to NASM/YASM or JWASM, so driver can be built without DosBox and MASM 5.1;
- develop stand-alone getclock/setclock DOS programs to keep the time accurate without the use of driver.

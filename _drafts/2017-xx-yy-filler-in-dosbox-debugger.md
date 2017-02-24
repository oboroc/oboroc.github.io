---
layout: post
title:  "Filler in DosBox debugger"
date:   2017-xx-yy hh:mm:ss
categories: posts
---

Back in 1991-1992, I enjoyed playing [Filler](http://www.myabandonware.com/game/filler-33k).
It's a DOS game, probably written in Turbo Pascal 5 or 6, by some russian computer wiz kids.

I'd like to reimplement it as a game for MSX and/or SEGA Master System.
I could try to guess how it works from observing it.
It would be more cool if I can observe and document how it works using DosBox built-in debugger.

Here is some article on
[dumping executable from memory](https://www.codejuggle.dj/unpack-dos-binaries-dosbox-debugger/).
It was how I found out about DosBox debugger.

It points to [this Vogons forum thread](http://www.vogons.org/viewtopic.php?t=7323) for
DosBox built with debugger enabled.

To switch to debugger, press Alt-Pause.

Now you can type in debugger commands. If you type in `help`, you'll see this information:

```
LV [filename]             - Load var list from file.
MEMDUMP [seg]:[off] [len] - Write memory to file memdump.txt.
MEMDUMPBIN [s]:[o] [len]  - Write memory to file memdump.bin.
SELINFO [segName]         - Show selector info.
INTVEC [filename]         - Writes interrupt vector table to file.
INTHAND [intNum]          - Set code view to interrupt handler.
CPU                       - Display CPU status information.
GDT                       - Lists descriptors of the GDT.
LDT                       - Lists descriptors of the LDT.
IDT                       - Lists descriptors of the IDT.
PAGING [page]             - Display content of page table.
EXTEND                    - Toggle additional info.
TIMERIRQ                  - Run the system timer.
HELP                      - Help
```

This [Vogons forum post](http://www.vogons.org/viewtopic.php?t=3944#p465594)
has some more commands:

```
Debugger commands (enter all values in hex or as register):
-----------------------------------------------------------
F3/F6 - Previous command in history.
F4/F7 - Next command in history.
F5 - Run.
F9 - Set/Remove breakpoint.
F10/F11 - Step over / trace into instruction.
ALT + D/E/S/X/B - Set data view to DS:SI/ES:DI/SS:SP/DS:DX/ES:BX.
Escape - Clear input line.
Up/Down - Move code view cursor.
Page Up/Down - Scroll data view.
Home/End - Scroll log messages.
BP [segment]:[offset] - Set breakpoint.
BPINT [intNr] * - Set interrupt breakpoint.
BPINT [intNr] [ah] * - Set interrupt breakpoint with ah.
BPINT [intNr] [ah] [al] - Set interrupt breakpoint with ah and al.
BPM [segment]:[offset] - Set memory breakpoint (memory change).
BPPM [selector]:[offset]- Set pmode-memory breakpoint (memory change).
BPLM [linear address] - Set linear memory breakpoint (memory change).
BPLIST - List breakpoints.
BPDEL [bpNr] / * - Delete breakpoint nr / all.
C / D [segment]:[offset] - Set code / data view address.
DOS MCBS - Show Memory Control Block chain.
INT [nr] / INTT [nr] - Execute / Trace into interrupt.
LOG [num] - Write cpu log file.
LOGS/LOGL [num] - Write short/long cpu log file.
HEAVYLOG - Enable/Disable automatic cpu log when dosbox exits.
ZEROPROTECT - Enable/Disable zero code execution detection.
SR [reg] [value] - Set register value.
SM [seg]:[off] [val] [.]..- Set memory with following values.
IV [seg]:[off] [name] - Create var name for memory address.
SV [filename] - Save var list in file.
LV [filename] - Load var list from file.
ADDLOG [message] - Add message to the log file.
MEMDUMP [seg]:[off] [len] - Write memory to file memdump.txt.
MEMDUMPBIN [s]:[o] [len] - Write memory to file memdump.bin.
SELINFO [segName] - Show selector info.
INTVEC [filename] - Writes interrupt vector table to file.
INTHAND [intNum] - Set code view to interrupt handler.
CPU - Display CPU status information.
GDT - Lists descriptors of the GDT.
LDT - Lists descriptors of the LDT.
IDT - Lists descriptors of the IDT.
PAGING [page] - Display content of page table.
EXTEND - Toggle additional info.
TIMERIRQ - Run the system timer.
HELP - Help
```

Another [blog post on DosBox debugging](https://yurichev.com/blog/55/).

I'll take a break and try to see if filler.exe is packed.
[Unp 4.11/4.12beta](http://unp.bencastricum.nl) say it's not packed.

[Cup 3.2](http://old-dos.ru/index.php?page=files&mode=files&do=show&id=719)
can't find entry point.

An acquaintance recommended using IDA instead.

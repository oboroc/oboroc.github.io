---
layout: post
title:  "Zeitgeist for February 2017"
date:   2017-02-06 20:41:00
categories: posts
---

I haven't posted anything in a few months, so I'll provide a personal status update of sorts.

I followed a no-carbs diet from August to December 2016.
I'm back to eating carbs, but in rather moderate quantity.

I had my last alcoholic beverage somewhere in July 2016, didn't dring anything since then.
This is not really an effort, as I never liked alcohol anyway.

I discovered a very nice band: [Young Knives](https://en.wikipedia.org/wiki/Young_Knives).
It reminds me a little of my other favorite band: [The Rakes](https://en.wikipedia.org/wiki/The_Rakes).

I am trying again to learn to use
[lex/yacc again](http://www.oboroc.com/posts/2015/07/09/trouble-with-the-unicorn/).
This time around I'm following the hoc language design from chapter 8 of
[The UNIX Programming Environment](https://en.wikipedia.org/wiki/The_Unix_Programming_Environment).
The book is from 1984, and the C dialect is very old: K&R 1-st edition style.
Still, with minor tweaks it works great with the latest GCC and flex/bison.
I'm about to do excersises for
[hoc3 and move on to hoc4](https://github.com/oboroc/redrage/tree/master/src/misc).

I officially stopped working on [asmsx-cleanup](https://github.com/oboroc/asmsx-cleanup)
and contribute to [Fubukimaru asMSX](https://github.com/Fubukimaru/asMSX) instead.
I even [announced it on MRC](https://www.msx.org/forum/msx-talk/development/compare-assemblers?page=2).
I don't want to be the maintainer for asMSX, as it's hard to fully refactor without breaking it.
Instead I'm working towards writing my own MSX assembler from scratch,
aiming at full compatibility with asMSX 0.16.1.
I call this effort [Red Rage](https://github.com/oboroc/redrage).

A minor recent accomplishment is getting rid of VS2015 compilation warnings for
my very old but still sometimes useful
[printargs](https://github.com/oboroc/misc/tree/master/printargs) program.

I am also following
[Maxim Zhao's SMS assembly programming tutorial](http://www.smspower.org/maxim/HowToProgram/Lesson1).
So far so good, I understand what is going on quite well.
I am documenting my progress in a [journal](https://github.com/oboroc/sms-journey/blob/master/journal.md).
Structure of background tiles and sprites yet evades me, but I don't fret.
Alas it's nothing some practical experiemnts can't cure.
The end goal is but of course a game written in assembler.
It will hopefully use as many different opcodes,
addressing modes and VDP and PSG tricks as I can find.

I ran into a [few issues](http://www.smspower.org/forums/16518-MekaIssues)
with the [last official release of Meka](http://www.smspower.org/meka/),
a debugging emulator for SMS, Mark III and SG-1000.
Most of the issues are addressed well enough in the
[latest alpha version of Meka](http://www.smspower.org/forums/13019-Meka080WithNewSoundEngineTESTERSWANTED?start=300#86895).

I am quite tempted to get a hold of
[MSXPI device](https://www.msx.org/forum/msx-talk/hardware/msxpi-msx-raspberry-pi-interface-under-development?page=2).
Combined with RPi3, it could work as all around accelerator and Wi-Fi enabled unapi network interface.
Current design is neither elegant not fast, but it's a fantastic start!

My next endeavor is to get CI server for my and my friends GitHub projects.
I am following [GitHub's Building a CI server](https://developer.github.com/guides/building-a-ci-server/)
tutorial, which in turn requires learning [Sinatra](http://www.sinatrarb.com/).
I may run this off my [APU2C4 passive cooled custom PC](https://www.pcengines.ch/apu2c4.htm).

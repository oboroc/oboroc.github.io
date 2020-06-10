---
layout: post
title:  "Restoring classic DOS colors in Windows 10 console"
date:   2020-06-09 10:00:00
categories: posts
---

I started messing around with my Turbo Vision game from 23 years ago.
I'm trying to make it work using Free Pascal and Free Vision library.
When I started using Free Pascal IDE, I noticed colors look wrong.
Same with Far Manager, but not as noticeable.

Turns out Microsoft folks decided to "update" the colors by "brightening" the palette in Windows 10 1709.
Check [this announcement](https://devblogs.microsoft.com/commandline/updating-the-windows-console-colors/)
to see the difference in colors. 

Turns out there is a quick and easy way to revert to old colors.
Microsoft released [Color Tool](https://github.com/microsoft/terminal/releases/tag/1708.14008).
Download it, extract it, copy files `colortool.exe` and `campbell-legacy.ini` somewhere
and then run this command:

    colortool.exe -b campbell-legacy.ini

This will tweak the colors for both the current console and for the default console.

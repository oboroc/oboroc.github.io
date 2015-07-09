---
layout: post
title:  "Trouble with the unicorn"
date:   2015-01-16 16:31:00
categories: posts
---

I know how learning of complex subject is supposed to work, but it's not happening for me right now.

You're supposed to mimic someone else as much as possible, slowly gaining small insights into why
they are doing something this way or that. And hopefully eventually you kind of daydream or sleep
on it, and it all clicks together into overall comprehension. I guess criticism could accelerate it
dramatically if you can get someone to see what you do and tell you what they think about it.

For a while now I'm trying to understand how proper lexer and parser generators work.
Specifically, ![flex](http://flex.sourceforge.net/manual/) and
![bison](http://www.gnu.org/software/bison/manual/html_node/index.html).

I ended up buying this book:

![Introduction to Compiler Construction with UNIX](/img/2015-07-09-trouble-with-the-unicorn.jpg ""Introduction to Compiler Construction with UNIX, Axel T. Schreiner and H. Gerorge Friedman, Jr., 1985"")

It is also available [online](http://scholarworks.rit.edu/cgi/viewcontent.cgi?article=1064&context=books).

I got stuck dead very early, on page 11. I just don't get what is formulation and position marker.
I can't quite grep states in .output file from running `bison -v` on your grammar (pages 9-10).
I don't understand trees related to LL and LR parsing (pages 6-8). I think this is somehow related to
deconstructing input string left to right or right to left, but I'm not sure.

I wish I had someone to chat about this. Potential benefits of using flex/bison or similar tools are
really impressive. Instead or rolling your own hand crafted parser, you generate it and avoid stupid bugs
and unnecessary code bloat.

It is infuriating being unable to understand how stuff works... I know I'll get a huge satisfaction if
I'll eventually get it, but hope is slim at this point.

---
layout: post
title:  "Errors and warnings in C"
date:   2017-11-22 7:41:00
categories: posts
---

I want to come up with a good strategy for error and warning handing in my C code.

Right now I validate any action that may potentially fail or require a warning.

If an error is detected, I use `fprintf` to `stderr` to print an informative
error message starting with big fat "ERROR:" and continuing with details about
failure and what function it happen in (using `__func__`).

I then use `exit(1)` to crash and burn fast. `1` is to be replaced by a more
meaningful error code if software gets stable and mature and I start polishing code.
I don't bother with cleanup (memory freeing, file closing etc.) since `exit()`
should take care of it I think.

For warnings it's the same, but message starts with "WARNING:"
and there is no `exit()`.

This mostly works but I feel it could be done better:

- messages shouldn't be baked into the code, it's bad for internationalization;
- may be I should start doing some cleanup before `exit()`,
such as deleting unfinished output files;
- for warnings, think of recovery strategy that avoids excess of
nested `if` / `else` conditions. Perhaps start using goto in some limited way.
This would trigger Dijkstra's zealots, but would improve code readability,
which would improve my ability to reason about it;
- consider using `perror()` instead of `fprintf(stderr, ...)` where apropriate;

It is obvious I should read through some popular code bases
to see how other people handle errors.
May be read through OpenBSD or Linux kernel code.

Meanwhile I did some searching and found some interesting materials:

- sensible error handling:
[part 1](http://bitsquid.blogspot.ca/2012/01/sensible-error-handling-part-1.html),
[part 1](http://bitsquid.blogspot.ca/2012/01/sensible-error-handling-part-2.html),
[part 1](http://bitsquid.blogspot.ca/2012/01/sensible-error-handling-part-3.html);
- [exceptions are hard](https://gamedev.stackexchange.com/questions/46424/try-catch-or-ifs-for-error-handling-in-c);
- [using `longjmp()` / `setjmp()` for error recovery](http://www.on-time.com/ddj0011.htm);

To be continued...
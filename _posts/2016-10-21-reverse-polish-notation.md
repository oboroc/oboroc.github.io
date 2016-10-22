---
layout: post
title:  "Reverse polish notation"
date:   2016-10-21 21:47:00
categories: posts
---

A while ago I complained how I [strugle to understand yacc/lex inner workings](/posts/2015/07/09/trouble-with-the-unicorn/).
I hope to break this irritating barrier over this weekend with the help of a blog:
[LL and LR Parsing Demystified by Josh Haberman](http://blog.reverberate.org/2013/07/ll-and-lr-parsing-demystified.html).

I'm going to go all Richard Phillips Feynman on you, my hypothetical audience member.
He told at some point that if you want to understand a hard subject, you have to explain it to someone first.
It's kind of like [rubber ducking](https://en.wikipedia.org/wiki/Rubber_duck_debugging), only there is no duck.
I'm a very poor Feyman. Kind of like poor Kleborp from "E.T. Returns Home" Robot Chicken episode is bad at aliening.
But since only my mom would read my blog, and she doesn't speak English, it's alright.

RPN (Reverse Polish Notation), also known as postfix notation, is a hard prerequisite to groking mathematically derived, error free parsing.

There is a [Wikipedia article about RPN](https://en.wikipedia.org/wiki/Reverse_Polish_notation).
It's pretty good and straight forward at first.
Normal notation is called infix.
Reverse polish notation is for binary operators.
I think unary operands are treated as part of operand, not sure for now, will leave it for later.
If you only have two operands and one operator, things are super simple: you write first operand, then second, then operator.
For example infix `3+2` is `3 2 +`.
I'll use space as token delimeter, because infix `33+22` is RPN `33 22 +`.
It would be hard to understand if it was `3322+`.
    
Things get hairy for me once you have 3 or more operators. Somehow infix `3-4*5` turns to `3 4 5 * -`.
One way to process RPN is to scan for any two operands that are already numbers, immediately followed by an operator.
We then replace this simple expression with result and look at bigger expression again.
In our `3 4 5 * -` RPN, we should replace `4 5 *` with `20`. Now it's `3 20 -`, which in turn is `-17`.
If we look at infix expression `(3-4)*5`

But I'm not sure computer is well used if your code repeatedly scans expression and replace simple subexpressions with their result.

One way to deal with this is to use one of the basic computer data structures: stack.

Say, we want to represent infix expression `(1+2*3-4)/5-6` in RPN.
I think we can prepare by using brackets gratuitously, which is what we would need to do if we didn't had operator precedence rules.
Our bracketized infix would look like this: `(((1+(2*3))-4)/5)-6`.
We scan this expression until we reach the very first closing bracket.
Then we track back until we hit matching opening bracket.
Then we do our RPN transformation, and so on.
So our RPN will be `((((2 3 *) 1 +) 4 -) 5 /) 6 -`.
If you look at it like this, you'll see that there is no ambiguity about the order of operator application and it's operands,
so we can drop all brackets, and it still makes sense: `2 3 * 1 + 4 - 5 / 6 -`.
Now if we move all the operands to the left and all the operators to the rights, the final RPN expression will look like this:
`2 3 1 4 5 6 * + - / -`. At least I think that's how it is.
I used some
[online infix to RPN converter](http://www.meta-calculator.com/learning-lab/how-to-build-scientific-calculator/infix-to-postifix-convertor.php),
and it says infix `(1+2*3-4)/5-6` is `1 2 3 * + 4 - 5 / 6 -` in RPN.

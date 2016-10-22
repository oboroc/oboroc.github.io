---
layout: post
title:  "Reverse polish notation"
date:   2016-10-21 21:47:00
categories: posts
---

A while ago I complained how I [strugle to understand yacc/lex inner workings](/posts/2015/07/09/trouble-with-the-unicorn/).
I hope to break this irritating barrier over this weekend with the help of a blog post:
[LL and LR Parsing Demystified by Josh Haberman](http://blog.reverberate.org/2013/07/ll-and-lr-parsing-demystified.html).

I'm going to go all Richard Phillips Feynman on you, my hypothetical audience member.
He told at some point that if you want to understand something, you have to explain it to someone first.
It's kind of like [rubber ducking](https://en.wikipedia.org/wiki/Rubber_duck_debugging), only there is no duck.
I'm a very poor Feyman. Kind of like Kleborp from "E.T. Returns Home" Robot Chicken episode.
It's alright, though. Only my mom would read my blog, and she doesn't speak English.

RPN (Reverse Polish Notation), also known as postfix notation, is a hard prerequisite to understanding correct parsing.

There is a [Wikipedia article about RPN](https://en.wikipedia.org/wiki/Reverse_Polish_notation).
It's pretty good and straight forward at first.
Normal notation is called infix.
Reverse polish notation is for binary operators.
If you only have two operands and one operator, things are simple: you write first operand, then second, then operator.
For example infix `3+2` is RPN `3 2 +`.
    
Things get hairy for me once you have 2 or more operators. Somehow infix `3-4*5` turns to `3 4 5 * -`.
One way to process RPN is to scan for any two operands that are already numbers, immediately followed by an operator.
We then replace this simple expression with result and look at bigger expression again.
In our `3 4 5 * -` RPN, we should replace `4 5 *` with `20`. Now it's `3 20 -`, which in turn is `-17`.
This works for humans, but I don't think computer is well used if you make it repeatedly scan expression and replace simple subexpressions with their result.

Lets do a simple mental excersise.

We'll start with string I = `(1-2*3)/4*5`, which is an infix representation of expression we want to transform into RPN representation.
Please note, `(1-2*3)/4*5` = `-6.25`. We'll have to make sure that any RPN representation we build evaluates to same value.

Let us pretend we don't know operator precedence rules but want no ambiguity, so we use lots of brackets: `((1-(2*3))/4)*5`.
Initial RPN expression R is empty. S is a temporary value we'll use to build R.

1. In each iteration, we scan I for a closing bracket `)`;
2. If there is no `)` in I, assign S the value of I, assign I an empty value and jump to step 6;
3. If we found `)` in I, we track back to the last opening bracket `(` before it;
4. Do the RPN transform on simple expression whithin the brackets and assign it to a temporary variable S;
5. In I, we replace the whole substring between and including `(` and `)` with a special token `X`;
6. If R is empty, assign R the value of S;
7. If R is not empty, assign R a string that we build by replacing `X` in S with the old value of R;
8. If I is not empty, jump to step 1.

At this point R should be the full RPN representation of initial infix expression.

Lets see how it works:

Initial values are I = `((1-(2*3))/4)*5`, R is empty, S is undefined.

1. I = `((1-X)/4)*5`, S = `2 3 *`, R = `2 3 *`
2. I = `(X/4)*5`, S = `1 X -`, R = `1 2 3 * -`
3. I = `X*5`, S = `X 4 /`, R = `1 2 3 * - 4 /`
4. I = empty, S = `X 5 *`, R = `1 2 3 * - 4 / 5 *`

If you do a search for "convert to RPN", first link is an
[Infix to Postfix Convertor](http://www.meta-calculator.com/learning-lab/how-to-build-scientific-calculator/infix-to-postifix-convertor.php).
If you give it our infix expression `(1-2*3)/4*5`, it will print out `1 2 3 * - 4 / 5 *`.
Oh yeah!

How does computer evaluate an RPN expression?
I think an easy approach is to use stack.
We start by reading a token from input. If it's an operand, we push it to stack.
Repeat until we get an operator.
If you got an operator, pop the top two operands from stack to variables a and b.
Calculate the value of `b operator a` and push it to stack.
Repeat until input is empty.
Once we run out of tokens, the only value in stack should be the result of RPN evaluation.

Lets see how it works for our RPN example above: `1 2 3 * - 4 / 5 *`.
We read `1 2 3` from input and push them to stack. At this point we have:
<pre>
Input: `* - 4 / 5 *`
Stack:
3
2
1
</pre>
Next we read `*`, which is an operator, so we pop 3 and 2 from stack, evaluate the value of `2 * 3` = `6` and push it to stack:
<pre>
Input: `- 4 / 5 *`
Stack:
6
1
</pre>
Next we read `-`, an operator. Pop 6 and 1, evaluate `1 - 6` = `5`, push it to stack:
<pre>
Input: `4 / 5 *`
Stack:
-5
</pre>
Read next token, it's operand:
<pre>
Input: `/ 5 *`
Stack:
4
-5
</pre>
Next token is operator. Pop 4 and -5. Eval `-5 / 4` = `-1.25`, push it to stack:
<pre>
Input: `5 *`
Stack:
-1.25
</pre>
Next token is operand:
<pre>
Input: `*`
Stack:
5
-1.25
</pre>
Next token is operator. Pop 5 and -1.25. Evaluate `-1.25*5` = `-6.25`, push to stack.
<pre>
Input: empty
Stack:
-6.25
</pre> 

TODO: read about [shunting yard algorithm](http://andreinc.net/2010/10/05/converting-infix-to-rpn-shunting-yard-algorithm/).

---
author: Chunbo Liu
title: Learning Python Log
description: A learning log about python grammar.
pubDatetime: 2026-07-10T15:07:00.565Z
modDatetime: 2026-07-10T15:07:00.565Z
tags: 
- CS
- python
---

# Basic ideas

## elemets
Actually, elements is not a formal name, but I love to say so. That it solve from a really natural problem, how do we describe our world to the computer? 

Exactly, we use words to describe our ideas, and we use numbers to count. So here are two sorts of elements, numbers and text.
```python
num = 0
text = "hello"
text2 = 'hello'
```
As you can see here, that we can use both "" and '' to describe a text, but actually there ae something deeper in number and text. Notice that I use "=" but it seems it is not the equal, actually, we use one = to describe "define" something, I define "hello" to the variable `text`, actually, it is another widely form of equal, but remember the order. We use `==` to show the **truly** equal.

## number
Here are 2 types of numbers: `int` and `float`. Actually, you can see int and float as functions.
As int, it turns a number to its integer part,
While 
```
class int(number=0, /)
class int(string, /, base=10)
```
So int([what you want to write here], [base of what you want to type and defaultly 10:2,8,16])
```python
int(123.45) # 123
int('123') # 123
int('   -12_345\n')# -12345
int('FACE', 16) # F A C E from 16 to decimal, which is 64206
int('0xface', 0) # base 0 means let the computer to check the prefix: 0x: 16; 0b: 2; 0o: 8
int('01110011', base=2) # 115
```

About **float**
```python
float('+1.23') # 1.23
float('   -12345\n') # -12345.0
float('1e-003') # 0.001, this means exponent by 10, like 1 * 10 ^(-3)
float('+1E6') # samely, 100000.0
float('-Infinity') # -inf, infinity is actually another form of float value.
```
```text
sign:          "+" | "-"
infinity:      "Infinity" | "inf"
nan:           "nan"
digit:         <a Unicode decimal digit, i.e. characters in Unicode general category Nd>
digitpart:     digit (["_"] digit)*
number:        [digitpart] "." digitpart | digitpart ["."]
exponent:      ("e" | "E") [sign] digitpart
floatnumber:   number [exponent]
absfloatvalue: floatnumber | infinity | nan
floatvalue:    [sign] absfloatvalue
```

We can also do some basic computation here:
+,-,*,/ are actually what you think, but there are still something out of range.
```python
17/3 # 5.66666666667
17 // 3 # divide but only the int part, so it is 5
17 % 3 # remainder of the division 2
5 ** 2 # ** means power, so this is 5^2 =25
```

## List 
Actually, I'd like to say list is the most basic and important part of the whole python, whatever we want, a bench of things, are lists. We do orderings, we do executings, we do algorithms, they are all based on lists.
```python
list = [1,2,3]
```
Actually, it is pretty easy to understand, use "[]", abnd comma for each element. And here are some basic properties in lists
```python
list = [1,2,3] # We define a list here, "list" is somewhere a variable, if we want, we can change its value later
print(list[0]) # 1 exactly. 

```
Here is one thing pretty necessary to notice that list is counted from zero, where is out of our intuition. And what I use `list[i]` means the ith term in the list of "list".


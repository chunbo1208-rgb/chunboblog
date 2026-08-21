---
author: Chunbo Liu
title: Some views on permutation
description: My class Notes about CXM in Shanghai
pubDatetime: 2026-08-17T07:13:49.465Z
modDatetime: 2026-08-21T01:45:03.296Z
draft: false
publishStatus: published
tags:
  - others
---
## Topic 1: About permutation
Here is a bench of problems when we meet a permutation of a sequence.
1. If we can only move two adjacent numbers, how many at lease can we make this to a regular order.
2. If we can pick one number and place anywhere
3. If we can change any of 2 numbers

As for problem 1, the core is the number of inversions.
Here is a typical problem of inversions which you can feel. This one happens most on computing a determinations.
> https://artofproblemsolving.com/community/c6h3622041p35499602

Problem 2, the core in on LIS (longest increase subsequence)

Problem 3, the core is on the number of circuits if we write this in the form of a directed graph.

But still, there are some more questions to consider.

If we already know the total least steps, then how many methods can we to achieve this?

For an example, 3,9,2,4,6,5,8,1,7.

The total number of inversions is 16. As we want to transform this into 1,2,3,4,5,6,7,8,9, then every step should be on a inversion.


## Topic 2: About Pigeonhole Principle

An impressive one is like this:If we choose a subset $A$ of the set $[100]$, how many at most can we make sure there is no 2 distinct subset of $A$, such that their sum is not the same?

While 7 is absolutely possible, and we just need to choose $\{1,2,4,\cdots,2^6\}$.
Actually, there are 2 methods to construct situation 8.
- From 100 and use greedy algorithm
	100, 99, 98, 96, 93, 87, 76, 54
	(100-n): 0, 1, 2, 4, 7, 13, 24, 46
	Because there is another extra condition that if $S_A=S_B\Rightarrow \#A=\#B$
- From the view of subset sum

When we come to a subsets' sum problem, we will reflect to the structure of this. We want to track all the situation.

For example, we will not list all of them in one go but in this recursive way.
$a_1+a_2+a_3$ and when we add $a_4$ here, we get the idea on the number axis:
Keep the original and transform in $a_4$ steps.

It can be written in generating function: $$\prod(1+x^{a_i})$$
So we can construct as this $$3,6,12,24,48,96,97,98$$


Also. how can we prove that 9 is impossible.

Idea 1 is from a basic pigeonhole principle.
If we can find the range of sums is less than the total number of subsets. Then we can make sure that there must be 2 subsets whose sums the same.

Idea 2 is to detect this sequence: $$\pm a_1\pm a_2\cdots\pm a_9$$
we can find some really basic property of this:
- All integer
- same parity
- symmetric with 0
When we use the condition to prove by contradiction, we can know that:
- They are pairwise distinct
- no 0

And we can consider variance of this sequence.

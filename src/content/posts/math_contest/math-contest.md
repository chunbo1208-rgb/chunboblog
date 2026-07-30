---
author: Chunbo Liu
title: Math Contest Retake
description: This is the first time I retake up my math contest career, I really want to say my experiences here.
pubDatetime: 2026-07-12T12:39:11.152Z
modDatetime: 2026-07-30T13:36:05.981Z
tags: 
- math contest
- experiences
---

## Table of Contents

Previously, the last cycle of my math contest learning, I reached to the height of CMO silver medal, which I thought really not the top of myself, so I retook now after a long time of confusing and discovering.

So to start with, I can't directly start intensively thinking work, so I decide to start little by little, read previously articles and problems.

Actually, I find I have a disadvantage that I can't memorize problems that I have already solved. For example, some classmates around me can directly reveal that this problem has been shown somewhere. Or maybe that is just I didn't reach the level.

But actually, my final interests is not on Math Contest, it is actually on pure math. I know that they are not contradicts, but actually not intersects. However, there are still many problems come from the idea of advanced problems and knowledge. So I will try to discover this interesting part.

No matter what happens, just follow what I am really keen on.

# 0730 Fu Yun hao
1. Suppose that $\{x_n\}$ is a positive real number sequence, prove that: there exist infinitely many positive integers $n$ such that $$x_1+\cdots +x_{n+1}\ge 3.99 x_n$$
	**Core idea**
	This is not a difficult problem for there is only a view turn that:
	We will use prove reversely, suppose that as $n>n_0,$ $x_1+\cdots +x_{n+1}< 3.99 x_n$
	- **Consider Sum**: $S_n=x_1+\cdots+x_n$ 
	It is easy to consider sum first, and if it is just **=** we gonna use the characteristic polynomial to determine the sum directly, but now it is useless.
	- Consider this $$a_n=\frac{x_1+\cdots +x_{n-1}}{x_n}$$ We have that $$\frac{x_{n+1}}{x_n}= \left( \frac{x_{n+1}}{x_1+\cdots +x_n} \right)\left(\frac{x_1+\cdots +x_n}{x_n} \right)=\frac{a_n+1}{a_{n+1}}$$ So from the equality, we know that $(a_n+1)(1+\frac{1}{a_{n+1}})<3.99$. It is known that $(1+a)(1+\frac{1}{a})\ge 4$ 
	  We multiple them all that $3.99^{n-n_0+1}>(1+a_{n_0})\cdots (1+1/a_{n+1})\ge 4^{n-n_0}(1+a_{n_0})(1+1/a_{n+1})$. And thus we know that  here comes the contradiction: that right hand side after division can be vanished, but right hiand side still >4.
	**To Summary**: while it is not some really hard technique, just the "magic" algebra form that matters, and some basic inequality.

2. Suppose $m$ is a positive integer, strictly increasing positive integer sequence $\{a_n\}$, such that $a_{n+1}-a_n<m$ is followed by all n. Prove that: there exist pairwise different positive integers $p,q,r,s$, such that $a_pa_q=a_ra_s$.
	 **Find the density**.
	 Suppose $M= \max(a_1,m)$ for convenience,
	 then we have that $a_n\le nM$, so $a_pa_q\le pqM^2\le AM^2\Leftrightarrow pq\le A$. What we do is to count $\#(m,n):mn\le A$. For which, we fix $m=k<n$, then $n=k+1,\cdots,\lfloor\frac{A}{k}\rfloor$.
	 So the num is $$\sum_{k=1}^{\lfloor\sqrt{A}\rfloor}(\lfloor\frac{A}{k}\rfloor-k)\ge \sum_{k=1}^{\lfloor\sqrt{A}\rfloor}(\frac{A}{k}-k-1)\ge A(\ln\lfloor\sqrt A\rfloor) - \frac{\lfloor\sqrt A\rfloor^2+\lfloor\sqrt A\rfloor}{2}-\lfloor\sqrt A\rfloor >A $$ which is easy to prove as $A$ big enough.
	 **To Summarize**
	 Actually, dealing with the product, what we do is to <span style="color:rgb(0, 176, 80)">find the density</span>, is somewhere really interesting and seems quite useful. Not that hard to keep further, but hard on the inspire.

3. We call $S$ as an *Aristotle Set* such that, if for every $x<y<z\in S$ we all have $\frac{z-x}{y}\in S$, find all positive integer $n\ge 4$, such that there exist an $n$ elements *Aristotle Set*. (<span style="color:rgb(255, 0, 0)">To be expanded</span>)
	**Step 1** 
	We can understand that $n$ won't be many. So we will try to estimate a basic <span style="color:rgb(255, 255, 0)">upper bound </span>of $n$.
	here is the key:
	$$\frac{a_n-a_{n-2}}{a_{n-1}}<\frac{a_n-a_{n-3}}{a_{n-1}}<\cdots<\frac{a_n-a_1}{a_{n-1}}<\frac{a_{n-1}-a_1}{a_2}<\cdots<\frac{a_3-a_1}{a_2}$$ here are totally $n-2+n-3\le n\Rightarrow n\le 5$
	**Step 2**: Talk about $n=5$: 
	We can construct one but 
	**Step 3**: Talk about n=4: which is possible. 
	0.51,0.7,1,1.21

4. Given an integer $n \ge 100$, find the smallest positive real number $r$ such that for any complex number $c$, there exist complex numbers $a_1, a_2, \dots, a_n$ satisfying all of the following conditions:
   $|a_1| \ge |a_2| \ge \dots \ge |a_n|$
   $|a_2| \le r$
   $a_1 + a_2 + \dots + a_n = c$
   $a_1 a_2 \dots a_n = 1$
	**Ideas**:
	We will first hold the feeling of number that if  $c$ is really large, then it is easy to achieve just make $a_1$ close to c.
	So we first let $c=0$.
	$|a_1|\le |a_2|+\cdots +|a_n|\le (n-1)r$
	So we know that $1\le (n-1)r^n\Rightarrow r\ge \frac{1}{\sqrt [n]{n-1}}$
	So we guess that the answer is so.
	**Prove part**:
	1. stretch, r to 1
	2. take the construction as $b_2=\cdots=b_k, b_{k+1}=\cdots =b_{n-1}=1/b_2$ (by even and odd talk)
	3. We talk about the existence of $b_1$ and $b_n$
	
5. Prove that for any positive integer $N$, there exists positive integers a, b such that $b>a>N$, such that 

 $a-1\mid b-1$ and for all positive integer n: $a^n-1\not \mid b^n-1$.
	 Inspire from this problem:
		 prove that if $m,n$ are odd numbers, then $2^m-1\not\mid 3^n-1$.
	The proof is by: if p is their factors, then we have that 2,3 are the quadratic residue of  p, so we get that $p\equiv 1,-1\pmod{12}$(which is all prime factors). However, $2^m-1\equiv 7\pmod{12}$ as m>1.
	Back to this question:
		We want to show that n matters in factor 2, we construct that $v_2(a)=1$, and $3\mid b$. So easily, we take that $a=12k+2,b=3l^2$. 
		talk n odd and even 


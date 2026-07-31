---
author: Chunbo Liu
title: Math Contest Retake
description: This is the first time I retake up my math contest career, I really want to say my experiences here.
pubDatetime: 2026-07-12T12:39:11.152Z
modDatetime: 2026-07-31T16:21:41.708Z
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
## 综合练习1
### Problem 1
Suppose that $\{x_n\}$ is a positive real number sequence, prove that: there exist infinitely many positive integers $n$ such that $$x_1+\cdots +x_{n+1}\ge 3.99 x_n$$
**Core idea**
This is not a difficult problem for there is only a view turn that:
We will use prove reversely, suppose that as $n>n_0,$ $x_1+\cdots +x_{n+1}< 3.99 x_n$
- **Consider Sum**: $S_n=x_1+\cdots+x_n$ 
It is easy to consider sum first, and if it is just **=** we gonna use the characteristic polynomial to determine the sum directly, but now it is useless.
- Consider this $$a_n=\frac{x_1+\cdots +x_{n-1}}{x_n}$$ We have that $$\frac{x_{n+1}}{x_n}= \left( \frac{x_{n+1}}{x_1+\cdots +x_n} \right)\left(\frac{x_1+\cdots +x_n}{x_n} \right)=\frac{a_n+1}{a_{n+1}}$$ So from the equality, we know that $(a_n+1)(1+\frac{1}{a_{n+1}})<3.99$. It is known that $(1+a)(1+\frac{1}{a})\ge 4$ 
  We multiple them all that $3.99^{n-n_0+1}>(1+a_{n_0})\cdots (1+1/a_{n+1})\ge 4^{n-n_0}(1+a_{n_0})(1+1/a_{n+1})$. And thus we know that  here comes the contradiction: that right hand side after division can be vanished, but right hiand side still >4.
**To Summary**: while it is not some really hard technique, just the "magic" algebra form that matters, and some basic inequality.

### Problem 2
Suppose $m$ is a positive integer, strictly increasing positive integer sequence $\{a_n\}$, such that $a_{n+1}-a_n<m$ is followed by all n. Prove that: there exist pairwise different positive integers $p,q,r,s$, such that $a_pa_q=a_ra_s$.
 **Find the density**.
 Suppose $M= \max(a_1,m)$ for convenience,
 then we have that $a_n\le nM$, so $a_pa_q\le pqM^2\le AM^2\Leftrightarrow pq\le A$. What we do is to count $\#(m,n):mn\le A$. For which, we fix $m=k<n$, then $n=k+1,\cdots,\lfloor\frac{A}{k}\rfloor$.
 So the num is $$\sum_{k=1}^{\lfloor\sqrt{A}\rfloor}(\lfloor\frac{A}{k}\rfloor-k)\ge \sum_{k=1}^{\lfloor\sqrt{A}\rfloor}(\frac{A}{k}-k-1)\ge A(\ln\lfloor\sqrt A\rfloor) - \frac{\lfloor\sqrt A\rfloor^2+\lfloor\sqrt A\rfloor}{2}-\lfloor\sqrt A\rfloor >A $$ which is easy to prove as $A$ big enough.
 **To Summarize**
 Actually, dealing with the product, what we do is to <span style="color:rgb(0, 176, 80)">find the density</span>, is somewhere really interesting and seems quite useful. Not that hard to keep further, but hard on the inspire.

### Problem 3
We call $S$ as an *Aristotle Set* such that, if for every $x<y<z\in S$ we all have $\frac{z-x}{y}\in S$, find all positive integer $n\ge 4$, such that there exist an $n$ elements *Aristotle Set*. (<span style="color:rgb(255, 0, 0)">To be expanded</span>)
**Step 1** 
We can understand that $n$ won't be many. So we will try to estimate a basic <span style="color:rgb(255, 255, 0)">upper bound </span>of $n$.
here is the key:
$$\frac{a_n-a_{n-2}}{a_{n-1}}<\frac{a_n-a_{n-3}}{a_{n-1}}<\cdots<\frac{a_n-a_1}{a_{n-1}}<\frac{a_{n-1}-a_1}{a_2}<\cdots<\frac{a_3-a_1}{a_2}$$ here are totally $n-2+n-3\le n\Rightarrow n\le 5$
**Step 2**: Talk about $n=5$: 
We can construct one but 
**Step 3**: Talk about n=4: which is possible. 
0.51,0.7,1,1.21

### Problem 4
Given an integer $n \ge 100$, find the smallest positive real number $r$ such that for any complex number $c$, there exist complex numbers $a_1, a_2, \dots, a_n$ satisfying all of the following conditions:
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
### Problem 5
Prove that for any positive integer $N$, there exists positive integers a, b such that $b>a>N$, such that 
$a-1\mid b-1$ and for all positive integer n: $a^n-1\not \mid b^n-1$.
 Inspire from this problem:
	 prove that if $m,n$ are odd numbers, then $2^m-1\not\mid 3^n-1$.
The proof is by: if p is their factors, then we have that 2,3 are the quadratic residue of  p, so we get that $p\equiv 1,-1\pmod{12}$(which is all prime factors). However, $2^m-1\equiv 7\pmod{12}$ as $m>1$.
Back to this question:
	We want to show that n matters in factor 2, we construct that $v_2(a)=1$, and $3\mid b$. So easily, we take that $a=12k+2,b=3l^2$. 
	talk n odd and even 

-- already add to blog.
## 综合练习二
---
### Problem 1
Some of the subsets in $\{1,2,\cdots,2026\}$ satisfied that any of its two subsets, if their intersection is not empty, then their intersection forms an arithmetic sequence (1 element is also allowed). Find the max of its subsets.
### Problem 2
Given positive integer $n$, we call $f(x_1,\cdots,x_n)\in\mathbb{R}^n[x]$ is ***good***, if it can be written in the form of $f=x_1^2f_1+\cdots +x_n^2f_n$,where $f_1,\cdots,f_n$ are all polynomials.Prove that; if $\deg f<\frac{d}{2}$, and $(x_1+\cdots+x_n)f$ is good, then $f$ itself is also good
In this problem, I will provide 2 solutions here and trying to find the connections between each.

#### **METHOD** 1
Definitely, we will start with the condition of $f$ is bad.
We can find that, if terms in $(x_1+\cdots+x_n)f$ have at least power 2 at one term, we can just ignore it, so we only care about terms like $x_1x_2\cdots x_k$ And we can see that as the product occurs, "bad" terms will be vanished. We can hypothesis that $f$ is an homogeneous polynomial. So we define like this:
$k:=\deg f$, and $S_r:=${choose $r$ terms in $x_1,\cdots,x_k$ and $(k-r+1)$ terms in $x_{k+1},\cdots,x_n$} then product them all.So $S_r$ are terms in good polynomials.
We know that coefficients of $S_r$ is $0$.
Similar definition to ...

My BAD: I can't find out the final part in this prove, if you have any ideas, feel free to contact me! (at any platform)

#### **METHOD 2**
Part 1:
This is where I learned from AI(LOL)
For Convenience, we still only consider when only one term $\deg g=k$, which $g=\prod_{i\in I}x_i$
We can make our conversation environment into the quotient ring: $\mathbb{R}[x_1,\cdots,x_n]/(x_1^2,\cdots,x_n^2)$ (this is called the ***square-free algebra**.*) which mean that every "Good" polynomial is 0 here.Then we define 2 types of operator, we can detect the reason of doing this later. 
**Lefschetz operator**: $L(g)=(x_1+\cdots+x_n)$ (While it seems there is a little distinct with what stated on Google, I will stated here later)
**Partial Derivative**: $D=\frac{\partial}{\partial x_1}+\cdots+\frac{\partial}{\partial x_n}$ 
Part 2:
We compute $(DL-LD)g$ (**why**?)$$DLg-LDg=D(\sum_{j\not \in I}x_jg)-L(\sum_{k\in I}\frac{g}{x_k})=(n-k)g+kg=(n-2k)g$$
Actually, $(DL-LD)=[D,L]$ is the exterior product of D,L, so this equals (the way of adding(L))-(The way of deleting(D))=n-2k.

Part 3: Introduce a new inner product.
$$\langle x_I,x_J\rangle= \begin{cases} 1,&I=J,\\ 0,&I\neq J. \end{cases}$$
We want to look for $L*$ i.e. $\langle Lx_I,x_J\rangle=\langle x_I,Dx_J\rangle$, which is easy to check.

Part 4: prove the final part
$$Lf=0\Rightarrow -LDf=(n-2k)f\Rightarrow\langle -LDf,f\rangle=(n-2k)\langle f,f\rangle$$ so $$-||Df||_2 = (n-2d)||f||_2 $$ but left is negative and right is positive, contradiction!

### Problem 8
Find all function $f:\mathbb{R}\to\mathbb{R}$, so that $\forall x,y$, we all have $$f([f(x)+f(y)]^2)=(x+y)(f(x)+f(y))$$

# 0731 Fu Yun Hao
## 综合练习三

### Problem 3
We have a map $f:\mathbb C\to\mathbb C$ such that:
1. There exists $c>0$ with $|f(z)-z|<|z|^{0.99}+c,\qquad \forall z\in\mathbb C$.
2. Whenever four points form a convex quadrilateral, their images also form a convex quadrilateral.
Prove: $\boxed{\exists a\in\mathbb C,\quad f(z)=z+a}$

Mainly idea: 
We first claim 3 points f(A), f(B), f(C) form a triangle then f(A), f(B) form 3 lines and cut the plane into 6 parts outwardly. And 3 parts can't put f(D) (OR it will be a concave quadrilateral) 

So what we want to prove is $$AB \parallel f(A)f(B) $$If not, around $\triangle f(A)f(B)f(C)$ one end of line AB will get into one of the "forbidden part" We claim D as really close to line AB. Because as $f(D)$ is inside a circle centered at D, radius $|D|^{0.99}<|D|$ But actually, the distance from D to the "forbidden part" border is linear increase, so as D far enough, it will must be totally controlled into the "forbidden part" 

So $AB \parallel f(A)f(B)$. Then every 2 points will be projected into a parallel line. This must be a linear projection. (WHY???)

### Problem 5
If ABCD is a regular tetrahedron, M N is 2 points in the space, prove that $$AM\cdot AN+BM\cdot BN+CM\cdot CN\ge DM\cdot DN$$
This can be proved by Ptolemy's Theorem, but can also be completed by 3D Inversion(Which I am pretty interested in)

### Problem 6
A test paper consists of $n$ true-or-false questions, where the answers are only True or False. The hardworking Xiaoming does not know how to solve any of the questions, so he decides to submit $m$ fully completed answer sheets that he prepared beforehand to the teacher at the same time. After grading every answer sheet, the teacher informs Xiaoming of the total score of each valid answer sheet (1 point for each correct question, 0 points for an incorrect question), but does not tell him which specific questions were answered correctly. Incomplete answer sheets (i.e., answer sheets with answers to fewer than $n$ questions) are considered invalid answer sheets and are not graded. Xiaoming can design the answers for each answer sheet in advance so that, regardless of the circumstances, he can deduce the correct answer to every question based on the score of each answer sheet.

Xiaoming can minimize $m$ through carefully designed answer sheets. Let this minimum $m$ be denoted as $f(n)$. **Prove:** There exist positive real numbers $c_1, c_2$ such that for any integer $n > 1$,
$$c_1 \frac{n}{\ln n} \le f(n) \le c_2 \frac{n}{\ln n}.$$

### Problem 8 
Let $n$ be a positive integer. A circle $\Gamma$ has $n$ inscribed triangles whose vertices are all distinct. **Prove:** It is possible to select $2n$ vertices from these $3n$ vertices, and then have $n$ boys and $n$ girls stand at these chosen vertices, such that:

(1) At the three vertices of each triangle, there stands exactly one boy and one girl;

(2) Considering the relative positions of the children along the circumference of the circle, both neighbors of every child are children of the opposite sex.


## 综合练习四
### Problem 5
Let integer $n \ge 2$. Let $S_1, S_2, \dots, S_{2^n}$ be $2^n$ subsets of the set $A = \{1, 2, 3, \dots, 2^{n+1}\}$ satisfying the following condition: there do not exist indices $a < b$ and three elements $x, y, z \in A$ such that $x < y < z$, where $x, z \in S_a$ and $y, z \in S_b$. 

**Prove:** At least one of $S_1, S_2, \dots, S_{2^n}$ contains no more than $4n$ elements.
### Problem 7
Let $n, d > 1$ be given positive integers. On a regular $n$-gon paperboard, there is an identical button at each vertex. Player A and Player B play the following game: Before the game begins, Player B may press any button any number of times, and then the game starts. In each round, Player A can look at the paperboard and choose to press certain buttons, pressing each chosen button any number of times. Then, Player A hands the paperboard to Player B. Player B may rotate the paperboard without being seen by Player A (but cannot flip it over). This process is called one round of operations. If after a certain round of operations, the total number of times each button has been pressed is a multiple of $d$, then Player A wins. 

**Prove:** Player A can guarantee a win in a finite number of steps, independent of Player B's operations, if and only if $n$ and $d$ are powers of the same prime number.

### Problem 8
Let $S$ be a set consisting of 2025 distinct non-zero real numbers. For each odd-element subset of $S$, sum its elements and take the absolute value of the sum, then sum all these resulting absolute values together, denoted as $O$; for each even-element subset of $S$, sum its elements and take the absolute value of the sum, then sum all these resulting absolute values together, denoted as $E$. That is:

$$O = \sum_{T \subseteq S, |T|=2k+1} |\sigma(T)|, \quad E = \sum_{T \subseteq S, |T|=2k} |\sigma(T)|.$$

**Prove:**

$$\frac{1012}{1013} \le \frac{E}{O} \le \frac{1013}{1012}.$$
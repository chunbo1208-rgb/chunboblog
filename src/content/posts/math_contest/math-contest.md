---
author: Chunbo Liu
title: Math Contest Retake
description: This is the first time I retake up my math contest career, I really want to say my experiences here.
pubDatetime: 2026-07-12T12:39:11.152Z
modDatetime: 2026-08-22T23:55:10+08:00
tags:
  - math contest
  - experiences
---
# 0730 FYH
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

# 0731 FYH
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

**Ideas**:
**Lower Bound**
The answer has $2^n$ types
Actually, we can so some basic setups here. That the feedback has 0,1,..., n, totally n+1 kinds. so we know that $(n+1)^m\ge2^n$ it means that Xiaoming need to make enough answer sheets to definitely cover all kinds of answer properties. To be more exact: left hand side means that hand in m papers, there are at most $(n+1)^m$ kinds of feedback, so if m papers are enough to guess the whole answer, so much situations must cover all kinds of answers. So We can derive that $$m\ln (n+1)\ge n\ln 2\Rightarrow m> \frac{\ln2}{2}\frac{n}{\ln n}$$ **Upper Bound**
We need to find an upper bound, which means we need to design a strategy for Xiaoming to help him finally guess the problems.

We'll do some basic transformation of this problem to an algebra one.
The Check system can be turned into an inner product. So define $S=\{1,-1\}^n$ the answer $\vec \alpha\in S$, and every paper $\vec\lambda_i\in S$ So the feedback can be written as $$f(\lambda_i)=\frac{n+\lambda_i\cdot\alpha}{2}$$then, the question has transformed to this:
> Find the least m where $\#L=m,L\subset S$ We can construct such $L$ so that $\forall \vec\alpha\in S$, $\exists \vec\lambda \in L$ such that $f(\lambda)=n$. 

To write it in a more convenient way, we will describe in linear algebra like this: We construct a matrix $A_{m\times n}$, that contains each kind of Xiaomings trial paper work. And the feedback set will be $A\vec x$ so if $\forall \vec x\not=\vec y$ and $Ax\not = Ay$ then Xiaoming can really find out the answer here. 

The logic is here: the equation is $Ax=b$, teacher gives xiaoming b, What xiaoming doing is to decode $x$. But Xiaoming can design a fixed A, and if we can make sure that $\ker A\cap \{1,0,-1\}^n-0=\emptyset$, then for any $\#\{x|Ax=b\}\le 1$, because $A(x-y)\not =0$ if $x\not = y$. Moreover, $x-y = \{1,0,-1\}^n$

This part quite stuck me for a long while, but after understanding the logic words, I can finally understand it.

So the problem turned to:
> $M(n)=\min\left\{m:\exists A\in\{-1,1\}^{m\times n} \text{ such that } \ker A\cap\bigl(\{-1,0,1\}^n\setminus\{0\}\bigr)=\varnothing \right\}$ 
 We want an upper bound for $M(n)\le c\frac{n}{\ln n}$

Fix a nonzero vector $d\in\{-1,0,1\}^n$, and let $k$ be the number of its nonzero coordinates.
What we want to do is to Compute the following probability, and if it <1, then we can say that there exists a solution of A. Then we use this as the condition to derive the upper bound of $M(n)$.

Because there are $\binom nk2^k$ such $x$ with a fixed $k$, the total probability is

$$
\Pr\bigl(\exists\,0\ne x\in\{-1,0,1\}^n:Ad=0\bigr) \le \sum_{k=1}^n \binom nk2^k\,\Pr(Ad=0).
$$

For one random row $r$ of  $A$. 
$r\cdot d$ is the sum of $k$ independent random signs. Therefore (Which is we choose k numbers in {1,-1}, and a random row in A did so) To add: $k\le n$ because there may have 0 element in $x$.  
$$
\Pr(r\cdot d=0)=

\begin{cases}  
0,&k\text{ odd},\\ 
\dfrac{\binom{k}{k/2}}{2^k},&k\text{ even}.  
\end{cases}  
$$

To explain more: The whole sample space have $2^m$ in total, and we choose $k$ 1s, so there are $\binom{k}{k/2}$ possibilities to make the inner product 0.

Using the standard central-binomial estimate,

$$
\frac{\binom{k}{k/2}}{2^k}\approx\frac1{\sqrt{k}}
$$

(By Using Stirling’s formula, $r!\sim \sqrt{2\pi r}\left(\frac re\right)^r$)

So

$$
\frac{\binom{k}{k/2}}{2^k}\le\frac 1{\sqrt{k}}.
$$

The $m$ rows are independent, so

$$
\Pr(Ad=0)\le \left(\frac 1{\sqrt{k}}\right)^m=k^{-m/2}
$$



Split $k$ into

- small supports $k\le n/(\ln n)^2$; (This is somewhere after we get everything and decide afterwards)
- large supports $k>n/(\ln n)^2$
And the logic is like when if we set $m\le c\frac{n}{\ln n}$ we can always construct such A
#### For small $k$, we use the simpler bound
$\Pr(r\cdot d=0)\le\frac12\Rightarrow\Pr(Ad=0)\le 2^{-m}$
The number of such vectors is at most  

$$
\sum_{k\le n/(\ln n)^2}\binom nk2^k  \le  \exp\left((1+o(1))\frac n{\ln n}\right)
$$

How to Prove? I am so dumb!!!!! just $\binom nk\le n^k$

So then

$$
\sum_{k=1}^{n/(\ln n)^2} \binom nk2^k\,\Pr(Ax=0)\le c e^{n/\ln n}\cdot 2^{-m}\Rightarrow m\le c\frac{n}{\ln n}
$$
#### For large $k$, $k>\frac n{(\ln n)^2}$,

$$
\sum_{k=1}^{\lfloor n/(\ln n)^2\rfloor}\binom nk2^k  \le  \exp\left((1+o(1))\frac n{\ln n}\right).
$$

How to Prove? just $\binom nk\le n^k$

$$
\sum_{k=1}^{\lfloor n/(\ln n)^2\rfloor}\binom nk2^k \le \sum_{k=1}^{\lfloor n/(\ln n)^2\rfloor}(2n)^k <(2n)^{n/(\ln n)^2}\xrightarrow{n\text{ big}}\exp\left( \ln 2n\cdot \frac{n}{(\ln n)^2} \right)=\exp\left((1+o(1))\frac n{\ln n}\right)
$$


Thus, for sufficiently large $n$,

$$
\sum_{k=1}^{\lfloor n/(\ln n)^2\rfloor} \binom nk2^k\,\Pr(Ax=0)\le c e^{n/\ln n}\cdot 2^{-m}=\exp\left((1+o(1))\frac n{\ln n}-m\cdot \ln2 \right)
$$

Later we choose $m=C\frac{n}{\ln n}$, then

$$
\exp\left((1+o(1))\frac n{\ln n}-m\cdot \ln2 \right)=\exp\left((1+o(1)-C)\frac n{\ln n}\right)
$$

So as we let $C=2$, we can get $\Pr_{\text{k small}}\to 0$ as $n$ grow.
#### For large $k$, $k>\frac n{(\ln n)^2}$,

$$
\Pr(Ad=0)  \le  \left(\frac{\ln n}{\sqrt n}\right)^m.
$$

So

$$
\Pr_{\text{k big}}\bigl(\exists\,0\ne x\in\{-1,0,1\}^n:Ad=0\bigr) \le \sum_{k=\lfloor n/(\ln n)^2\rfloor+1}^n \binom nk2^k\,\Pr(Ad=0)\le \left(\frac{\ln n}{\sqrt n}\right)^m\cdot 3^n
$$

We choose $m=C\frac{n}{\ln n}$ 

Then

$$
\left(\frac{\ln n}{\sqrt n}\right)^m\cdot 3^n=\exp\left(C\frac{n}{\ln n}\cdot (\ln\ln n-\frac12 \ln n)+n\ln 3\right)=\exp\left( (C\frac{\ln\ln n}{\ln n}-\frac C2+\ln 3 )n\right)
$$

As n grow larger, we know that $\frac{\ln\ln n}{\ln n}\to 0$, so we just need to let $C=10000000000000$ lol, then $-\frac{C}2+\ln 3<0$ So $\Pr_{\text{k large}}\to 0$

So $\Pr<1$ Finished

### Problem 8 
Let $n$ be a positive integer. A circle $\Gamma$ has $n$ inscribed triangles whose vertices are all distinct. **Prove:** It is possible to select $2n$ vertices from these $3n$ vertices, and then have $n$ boys and $n$ girls stand at these chosen vertices, such that:

(1) At the three vertices of each triangle, there stands exactly one boy and one girl;

(2) Considering the relative positions of the children along the circumference of the circle, both neighbors of every child are children of the opposite sex.


## 综合练习四


### Problem 1
Given a positive integer $n$, find the maximum integer $m$ satisfying the following condition:  
There exists an irrational number $\alpha$, pairwise distinct rational numbers $a_1, a_2, \dots, a_m$, and a degree-$n$ polynomial $f(x)$ with rational coefficients such that $f(\alpha + a_i)$ is rational for all $i = 1, 2, \dots, m$.

---
### Problem 3
Starting from a triplet of non-negative integers $(a, b, c)$, the following operation is allowed: select two numbers from the triplet, let them be $x$ and $y$, and change one of them to $x + y$ or $|x - y|$. For example: $(3, 5, 7) \rightarrow (3, 5, 4)$ is considered a single operation. 

**Prove:** There exists a constant $r > 0$ such that for any positive integers $a, b, c, n$, if $a, b, c$ are all less than $2^n$, then one can perform no more than $rn$ operations on $(a, b, c)$ to make one of the numbers in the triplet equal to $0$.
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


# 0801 HLB

### Idea 1: Plane sections of a tetrahedron

I found an interesting problem: can we compute the area or perimeter of the cross-section cut from a regular tetrahedron by an arbitrary plane?

Conversely, can the direction and position of the plane be determined from the area and perimeter of its cross-section?

### Idea 2: Inversions in orthogonal circles

Two inversions whose defining circles are orthogonal commute. This can also be understood through a basic application of Miquel's theorem.

While studying this idea, I encountered the following geometry problem:

> In $\triangle ABC$, let $D\in AB$ and $E\in AC$. The circle $(ADE)$ is tangent to $BE$ at $F$ and to $CD$ at $G$. Let $H$ be the second intersection of circles $(BDG)$ and $(CDF)$. Is there a relation between $FG$ and $d(H,BC)$?

![Geometry diagram](https://chunboblog.com/_astro/Screenshot%202026-08-01%20at%2010.05.55%20PM.BlQzOFrC_Z2qyWwh.webp)

### Idea 3: Great-circle arrangement (Problem 6)

A number of great circles are drawn on the surface of a sphere, dividing the spherical surface into a number of triangular regions and quadrilateral regions. It is known that no three great circles pass through the same point, and there is at least one quadrilateral region. Prove that there are exactly 8 triangular regions and 6 quadrilateral regions.

Let there be $m$ great circles, $T$ triangular regions, and $Q$ quadrilateral regions. Since each pair of circles meets at two antipodal points,

$$
V=2\binom{m}{2}=m(m-1).
$$

Every circle is divided into $2(m-1)$ arcs, so

$$
E=2m(m-1).
$$

Euler's formula $V-E+F=2$ gives

$$
T+Q=F=m(m-1)+2.
$$

Counting incidences between edges and regions gives

$$
3T+4Q=2E=4m(m-1).
$$

Solving these equations yields

$$
T=8,
\qquad
Q=m(m-1)-6.
$$

Thus the number of triangular regions is always $8$. If $m=4$, then $Q=6$. As written, the problem needs an additional assumption forcing $m=4$ in order to conclude that there are exactly six quadrilateral regions.

### Idea 4: A cubic congruence (Problem 12)

Let $p$ be a prime satisfying

$$
p\equiv 1\pmod 9.
$$

Prove that there exists a positive integer $n$ such that

$$
p\mid n^3-3n+1.
$$

Because $9\mid p-1$, the cyclic group $\mathbb F_p^\times$ contains an element $\zeta$ of order $9$. Define

$$
n=\zeta+\zeta^{-1}\in\mathbb F_p.
$$

Using $(x+x^{-1})^3=x^3+x^{-3}+3(x+x^{-1})$, we obtain

$$
n^3-3n=\zeta^3+\zeta^{-3}.
$$

Since $\zeta$ has order $9$, the element $\zeta^3$ is a primitive cube root of unity. Therefore

$$
1+\zeta^3+\zeta^6=0.
$$

Also, $\zeta^{-3}=\zeta^6$, so

$$
\zeta^3+\zeta^{-3}=-1.
$$

Consequently,

$$
n^3-3n+1=0
\qquad\text{in }\mathbb F_p.
$$

Finally, $n\ne0$: otherwise $\zeta^2=-1$, which is impossible for an element of order $9$. Choosing the representative $n\in\{1,2,\dots,p-1\}$ gives the required positive integer. Hence

$$
\boxed{p\mid n^3-3n+1}.
$$

# 0802
### Problem 1
Let $n\ge 2$, and let $a_1,a_2,\dots,a_n$ be nonzero real numbers satisfying

$$
a_1+\frac1{a_2},
\quad
a_2+\frac1{a_3},
\quad
\dots,
\quad
a_{n-1}+\frac1{a_n},
\quad
a_n+\frac1{a_1}
\in\mathbb Z.
$$

Prove that

$$
a_1a_2\cdots a_n+\frac1{a_1a_2\cdots a_n}\in\mathbb Z.
$$

---

#### 1. Introduce the given integers

Use cyclic notation

$$
a_{n+1}=a_1.
$$

For every $i=1,2,\dots,n$, define

$$
b_i=a_i+\frac1{a_{i+1}}.
$$

By assumption,

$$
b_i\in\mathbb Z.
$$

The defining equation can be rearranged as

$$
b_i-a_i=\frac1{a_{i+1}},
$$

or equivalently,

$$
a_{i+1}=\frac1{b_i-a_i}.
$$

This is a fractional-linear, or Möbius, transformation.

---

#### 2. Encode each step by a matrix

For every $i$, define

$$
M_i=
\begin{pmatrix}
0&1\\
-1&b_i
\end{pmatrix}.
$$

Because $b_i\in\mathbb Z$, every $M_i$ has integer entries. Moreover,

$$
\det M_i
=
0\cdot b_i-1\cdot(-1)
=
1.
$$

Therefore,

$$
M_i\in\operatorname{SL}_2(\mathbb Z).
$$

Now define the column vector

$$
v_i=
\begin{pmatrix}
a_i\\
1
\end{pmatrix}.
$$

Then

$$
M_iv_i
=
\begin{pmatrix}
0&1\\
-1&b_i
\end{pmatrix}
\begin{pmatrix}
a_i\\
1
\end{pmatrix}
=
\begin{pmatrix}
1\\
b_i-a_i
\end{pmatrix}.
$$

Since

$$
b_i-a_i=\frac1{a_{i+1}},
$$

we obtain

$$
M_iv_i
=
\begin{pmatrix}
1\\
\dfrac1{a_{i+1}}
\end{pmatrix}.
$$

Factor out $1/a_{i+1}$:

$$
M_iv_i
=
\frac1{a_{i+1}}
\begin{pmatrix}
a_{i+1}\\
1
\end{pmatrix}.
$$

Thus

$$
\boxed{
M_iv_i=\frac1{a_{i+1}}v_{i+1}
}.
$$

---

#### 3. Go once around the cycle

Apply the preceding identity repeatedly:

$$
M_1v_1=\frac1{a_2}v_2,
$$

$$
M_2M_1v_1
=
\frac1{a_2a_3}v_3,
$$

and, continuing inductively,

$$
M_nM_{n-1}\cdots M_1v_1
=
\frac1{a_2a_3\cdots a_na_{n+1}}v_{n+1}.
$$

Because the indices are cyclic,

$$
a_{n+1}=a_1
$$

and

$$
v_{n+1}=v_1.
$$

Let

$$
P=a_1a_2\cdots a_n.
$$

It follows that

$$
M_nM_{n-1}\cdots M_1v_1
=
\frac1P v_1.
$$

Define the total matrix

$$
M=M_nM_{n-1}\cdots M_1.
$$

Then

$$
Mv_1=\frac1P v_1.
$$

Since $v_1\ne 0$, this means that

$$
\boxed{\frac1P\text{ is an eigenvalue of }M}.
$$

---

#### 4. Use the determinant

Since every $M_i$ has determinant $1$,

$$
\det M
=
\prod_{i=1}^n\det M_i
=
1.
$$

For a $2\times2$ matrix, the product of its two eigenvalues equals its determinant.

One eigenvalue of $M$ is $1/P$. If the other eigenvalue is denoted by $\lambda$, then

$$
\lambda\cdot\frac1P=1.
$$

Therefore,

$$
\lambda=P.
$$

Hence the two eigenvalues of $M$ are

$$
P
\qquad\text{and}\qquad
\frac1P.
$$

Their sum equals the trace of $M$, so

$$
\operatorname{tr}M
=
P+\frac1P.
$$

But $M$ is a product of integer matrices, so $M$ itself has integer entries. Consequently,

$$
\operatorname{tr}M\in\mathbb Z.
$$

Therefore,

$$
\boxed{
a_1a_2\cdots a_n
+
\frac1{a_1a_2\cdots a_n}
\in\mathbb Z
}.
$$

---

#### What Is Hidden Inside the Problem?

## 1. Möbius transformations

The equation

$$
a_{i+1}=\frac1{b_i-a_i}
$$

defines a Möbius transformation

$$
T_i(x)=\frac1{b_i-x}.
$$

It is represented by the matrix

$$
M_i=
\begin{pmatrix}
0&1\\
-1&b_i
\end{pmatrix}.
$$

Indeed, the general matrix

$$
\begin{pmatrix}
\alpha&\beta\\
\gamma&\delta
\end{pmatrix}
$$

acts projectively by

$$
x\longmapsto
\frac{\alpha x+\beta}{\gamma x+\delta}.
$$

For $M_i$, this gives

$$
x\longmapsto
\frac{1}{b_i-x}.
$$

Thus the original cyclic system is **an iteration of integer Möbius transformations.**

---

## 2. Monodromy

After going once around the cycle, we obtain the composition

$$
T=T_n\circ T_{n-1}\circ\cdots\circ T_1.
$$

Because

$$
a_1\mapsto a_2\mapsto\cdots\mapsto a_n\mapsto a_1,
$$

the number $a_1$ is a fixed point of $T$:

$$
T(a_1)=a_1.
$$

The matrix

$$
M=M_nM_{n-1}\cdots M_1
$$

records the effect of going once around the cycle. It is called a **monodromy matrix** or a **transfer matrix**.

The product

$$
P=a_1a_2\cdots a_n
$$

appears as an eigenvalue of this monodromy matrix.

---

## 3. Why the expression $P+P^{-1}$ appears

Any matrix

$$
M\in\operatorname{SL}_2(\mathbb Z)
$$

has determinant $1$. Therefore, if one eigenvalue is $\lambda$, the other must be $\lambda^{-1}$.

Hence its characteristic polynomial has the form

$$
x^2-(\operatorname{tr}M)x+1.
$$

The sum

$$
\lambda+\lambda^{-1}
$$

is exactly the trace:

$$
\lambda+\lambda^{-1}=\operatorname{tr}M.
$$

In this problem,

$$
\lambda=P.
$$

Therefore,

$$
P+\frac1P=\operatorname{tr}M\in\mathbb Z.
$$

So the target expression is not an accidental choice: it is the natural trace invariant of a determinant-one matrix.

---

## 4. A stronger conclusion

Let

$$
k=\operatorname{tr}M\in\mathbb Z.
$$

Since the eigenvalues of $M$ are $P$ and $P^{-1}$, the characteristic polynomial of $M$ is

$$
x^2-kx+1.
$$

Therefore $P$ satisfies

$$
P^2-kP+1=0.
$$

Thus we obtain the stronger statement

$$
\boxed{
P\text{ is a root of }x^2-kx+1
\text{ for some }k\in\mathbb Z
}.
$$

In particular, $P$ is a quadratic algebraic integer, unless it is already rational.

Its algebraic conjugate is

$$
\frac1P,
$$

and its algebraic norm is

$$
P\cdot\frac1P=1.
$$

Therefore $P$ is an **algebraic unit**.

---

## 5. Classification when the $a_i$ are real

Because $P\in\mathbb R\setminus\{0\}$, the quantity

$$
k=P+\frac1P
$$

satisfies

$$
|k|\ge 2.
$$

Indeed, if $P>0$, then

$$
P+\frac1P\ge 2,
$$

while if $P<0$, then

$$
P+\frac1P\le -2.
$$

Since $k\in\mathbb Z$, necessarily

$$
k\in\mathbb Z,
\qquad
|k|\ge 2.
$$

Moreover,

$$
P=\frac{k\pm\sqrt{k^2-4}}2.
$$

Thus the product $P=a_1a_2\cdots a_n$ is highly restricted: it must be a real quadratic unit of norm $1$, or one of the special values $P=\pm1$.

---

## Main structural principle

The proof can be summarized as

$$
\text{cyclic reciprocal relations}
\Longrightarrow
\text{integer }2\times2\text{ matrices}
\Longrightarrow
\text{monodromy in }\operatorname{SL}_2(\mathbb Z)
$$

and then

$$
\det M=1
\Longrightarrow
\text{eigenvalues }P,\frac1P
\Longrightarrow
P+\frac1P=\operatorname{tr}M\in\mathbb Z.
$$

The central hidden idea is therefore:

> Whenever a cyclic recurrence can be represented by determinant-one integer matrices, products accumulated around the cycle often become eigenvalues, and expressions of the form
>
> $$
> \lambda+\lambda^{-1}
> $$
>
> become integer traces.




# 0803
### 1: 东南赛P3
 In $△𝐴𝐵𝐶$, $𝐴𝐵 < 𝐴𝐶$. Let 𝑀 be the midpoint of side 𝐵𝐶, and let 𝐷 be the intersection of the angle bisector of $∠𝐵𝐴𝐶$ with 𝐵𝐶. Let 𝑃 be the reflection of 𝐷 over 𝐴, and let 𝑄 be a point on the circumcircle of $△𝑃 𝐵𝐶$ such that $𝑀 𝑄 ∥ 𝐴𝐷$, with 𝑃 and 𝑄 on opposite sides of 𝐵𝐶. Let 𝑅 be the intersection of 𝑃𝑄 and 𝐴𝑀 . Prove that $∠𝑅𝐵𝑄 = ∠𝑅𝐶𝑄$.

This problem really make me stuck at the very first step: how to use that AD:bisector of $∠𝐵𝐴𝐶$.
While the problem construct a $F$, so that $ABFC$ are concyclic, and $FB=FC$


# 0806
Problems today
## I did a piece of paper
While, in the exam system, how to give answers quickly and correctly. We have 1h20min, 8 short problems just ask for answer, and 3 problems that require process. So the tricks should be really steady and trained.

To summarize here, the score board is here

| **Problem** | **Score** | **Mistake**                                                                                                               |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1           | 8/8       |                                                                                                                           |
| 2           | 8/8       | Still Overcomplicated, I can start by trial some numbers, finding the core is the most impostant                          |
| 3           | 8/8       | When nothing mentioned, roots can be complex, so don't be worried and hesitated when facing $\sum x_i^2=-6$               |
| 4           | 0/8       | Computing Overengineered then wrong                                                                                       |
| 5           | 0/8       | orders matter in computing multitask probabilities                                                                        |
| 6           | 8/8       |                                                                                                                           |
| 7           | 0/8       | misunderstand the problem!                                                                                                |
| 8           | 0/8       | Learn the method (I skipped this problem)                                                                                 |
| 9           | 0/16      | When I am solving, the computing work get really uncontrolible                                                            |
| 10          | 10/20     | The final part, I mistake at $k^2-k$ at the wrong direction. Mind small mistakes, DETAIL REALLY MATTERS!!!                |
| 11          | 5/20      | First part about $a_i=b_i$ is right, but then I need to be fully skilled to go deeper. I still have time at this problem. |


### Problem 2
The number of integer solutions to the inequality $\log_6(1 + \sqrt{x}) > \log_{25} x$ is $\underline{\qquad}$.

$x=25^t$, then $1+5^t>6^t$, there is only $t<1$, so $x=1,\cdots 24$, totally 24 solutions.

### Problem 4
In tetrahedron $ABCD$, one edge has length 3, and the remaining five edges all have length 2. The radius of its circumscribed sphere is $\underline{\qquad}$.

In such questions, don't set coordinates directly, discover the geometry property first. We set triangle of (2,2,3) as base, then $A-BCD$, The center $O$ of plain triangle $\triangle BCD$ and $A$ are in the same vertical line. 

Just compute this carefully. The answer is $\sqrt21/3$ .

### Problem 5
A fair six-sided die, with faces labeled 1, 2, 3, 4, 5, 6, is thrown three times. The probability that the three numbers appearing on the top face can form the side lengths of a triangle whose perimeter is divisible by 3 is $\underline\qquad$.

Where I wrong here is I count less and lost the times that as (a,b,c), there are 6 kinds of order to get access to this set.

Then $(i,i,i): 6\times 1$, $(i,i,j):3\times 3$, $(i,j,k): 3\times 6$, and the result is $\frac{6+9+18}{6\times 6\times 6}=11/72$

### Problem 7
Let point $P$ move on the right branch of the hyperbola $\frac{x^2}{16} - \frac{y^2}{9} = 1$ excluding the vertices, and let $E, F$ be its left and right foci, respectively. Point $A$ is the ex-center of $\triangle PEF$ within $\angle PEF$. The equation of the locus of point $A$ is $\underline\qquad$.

At first, I think it is P-excenter, so my wrong answer is $x=-4$ Carefully check the problem!!!!

It seems that even if I read it rightly, I still have no idea on it. I can find that $I_E(PF+4,r)$ buw what to do then?

Use the property of Appolonius Circle.
We suppose A is the ex-center, $B=PA\cap x$ axis. Then $$\frac{BA}{AP}=\frac{BF}{FP}=\frac{BE}{EP}=\frac{BE-BF}{EP-FP}=\frac{EF}{2a}=\frac{10}{8}=\frac{5}{4}$$But we need the coordinates of $B(x_B,0)$, $$\frac54=\frac{BF}{PF}=\frac{x_B-5}{ex_0-a}\Rightarrow\frac{x_0}{x_B}=\frac{16}{25}$$ Use the steady ratio at A, solves it

### Problem 8
**8.** Given $A = \{1, 2, \dots, 14\}$, find the number of all non-empty subsets of $A$ such that the sum of the elements in the subset is a multiple of 5: $\underline\qquad$.


**roots-of-unity filter**
Let $\zeta=e^{2\pi i/5}$. The roots-of-unity filter counts subsets whose sums are $0\pmod 5$:
$$N=\frac15\sum_{j=0}^{4}\prod_{a=1}^{14}(1+\zeta^{ja}). $$

>Here $N$ includes the empty subset.
	Reason:   $$1+\zeta^m+\zeta^{2m}+\zeta^{3m}+\zeta^{4m} = \begin{cases} 5,&m\equiv0\pmod5,\\ 0,&m\not\equiv0\pmod5. \end{cases}$$
	Therefore,
$$\boxed{\mathbf 1_{m\equiv0\pmod5} =\frac15\sum_{j=0}^{4}\zeta^{jm}}$$
This is the roots-of-unity filter. 


And we need to compute the final part of this: $j=0,N_{j=0}=\frac15 2^{14}$, for $j=1,2,3,4$, $$N_{j}=\frac15(2^2) [\Phi_5(-1)]^3=\frac 45$$
Then sum it up and delete the empty set, answer is $3279$
### Problem 9

**9. (16 points)** Let $A$ be a moving point on the hyperbola $y = \frac{2026}{x}$. Two tangent lines $AP, AQ$ are drawn from $A$ to the ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$, where $P, Q$ are the points of tangency. If $F$ is the left focus of the ellipse, find the minimum value of $\frac{\vert{}AF\vert{}^2}{\vert{}PF\vert{} \cdot \vert{}QF\vert{}}$.

When Computing, I need to remind that "2026" is not a useful, number and don't be hurry to finish this.
### Problem 11
Given two sequences, the sequence $\{a_n\}$ satisfies $a_0 = 1, a_1 = 13, a_{n+1} = \frac{a_n^2 + 64}{a_{n-1}}$ ($n \in \mathbb{N}_+$); the sequence $\{b_n\}$ satisfies $b_0 = 1, b_{n+1} = 9b_n + \sqrt{80b_n^2 - 64}$ ($n \in \mathbb{N}$). Prove that for any $n \in \mathbb{N}$, $a_n + b_n$ can be expressed as the sum of the squares of two positive integers.

(1) $a_n=b_n$, I'm right in this part.
(2) Later is the induction


## 2026 SCMO: Southeast Math Olympiad
Continue to the [2026 中国东南数学奥林匹克 notes](../../columns/math-contest/scmo/2026scmo.md).


# 0808
## Test today

 July 2026 Mystery Competition First Test Problems


| Problem | Score | Experiences                                                                                                                                   |
| ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 1       | 8     |                                                                                                                                               |
| 2       | 0     | Use the square to avoid the discussion of Absolute value                                                                                      |
| 3       | 0     | $\Omega=31\times 30$ not $31\times 31$!!!                                                                                                     |
| 4       | 0     |                                                                                                                                               |
| 5       | 8     |                                                                                                                                               |
| 6       | 8     |                                                                                                                                               |
| 7       | 0     | Learn the method to compute this                                                                                                              |
| 8       | 8     |                                                                                                                                               |
| 9       | 8     | The final part is not to solve equations like $\frac 1\omega =\sin(\omega\pi)$ it is the other part matters the $\frac \pi 3$. Small mistakes |
| 10      | 20    |                                                                                                                                               |
| 11      | 0     |                                                                                                                                               |
|         |       |                                                                                                                                               |
|         |       |                                                                                                                                               |


### I. Fill-in-the-Blank Problems (8 problems in total, 8 points for each problem, total 64 points)

1. Given positive real numbers $a, b$ satisfying $\log_{2}\log_{4}a+1=\log_{2}b$, then the value of $a\cdot2^{-b}$ is ____.

2. Let $f(x)$ be an even function defined on $\mathbb{R}$ such that $f(x)$ is strictly monotonically increasing on $[0,+\infty)$. If a real number $a\neq0$ satisfies: for any $x\ge-1$, $f(|x-a|)\ge f(x)$ always holds, then the range of values for $a$ is ____.

3. Let set $X=\{1,2,3,4,5\}$. From all non-empty subsets of $X$, two distinct subsets $A$ and $B$ are chosen sequentially with equal probability to form an ordered pair $(A,B)$. Then the probability that the event "$A$ and $B$ are disjoint" and the event "the number of odd integers in $A$ equals the number of even integers in $B$" occur simultaneously is ____.

4. Let $\lambda$ be a real number such that there exists an arithmetic progression $\{a_{n}\}$ where the solution set of the inequality $a_{n+1}^{2}\ge\lambda a_{n}a_{n+2}$ with respect to positive integers $n$ is precisely $\{1,2,\dots,10\}$. Then the range of values for $\lambda$ is ____.

5. Given that the circumcenter of $\triangle ABC$ is $O$, $|\vec{AB}|=4$, and $|\vec{AC}|=2$. Let $M$ be the midpoint of $AO$. If $\vec{MB}\cdot\vec{AC}=4$, then $|\vec{BC}|=$ ____.

6. In the plane, hyperbola $\Gamma_{1}$ and ellipse $\Gamma_{2}$ share the same two foci $F_{1}, F_{2}$. Let the four intersection points of $\Gamma_{1}$ and $\Gamma_{2}$ be $A, B, C, D$, arranged sequentially on $\Gamma_{2}$. If the area of quadrilateral $AF_{2}CF_{1}$ equals the area of quadrilateral $ABCD$, then the product of the eccentricities of $\Gamma_{1}$ and $\Gamma_{2}$ is ____.

7. Let triangular pyramid $A-BCD$ satisfy $AB, BC, BD$ being mutually perpendicular, with $AB=BC=BD=3$. Let $M, N$ be the midpoints of $BC, BD$ respectively. If the distance from point $B$ to the plane passing through $M$ and $N$ is $1$, then all possible values for the area of the cross-section obtained by intersecting $A-BCD$ with this plane are ____.

8. Arranging 4 twos, 2 zeros, and 2 sixes (8 numbers in total) in a line such that the string "20" and the string "26" do not both appear (i.e., at least one of them does not appear), then the number of such arrangements is ____.

---

### II. Answer Problems (3 problems in total, total 56 points. Answers should include textual explanations, proof steps, or calculation processes.)

9. **(16 points)** Let $\omega$ be a real number. Define
$$f(x)=\left|\omega\sin\left(\omega x+\frac{\pi}{3}\right)\right|$$
If there exists $x_{0} \in \left[0,\frac{\pi}{2}\right]$ such that $f(x_{0})\ge1$, find the range of values for $\omega$. *(Proposed by Yiyan Lin)*

10. **(20 points)** Let $a, b, c$ be real numbers, and let $z_{1}, z_{2}, z_{3}, z_{4}$ be the 4 complex roots of the equation $x^{4}+20x^{3}+ax^{2}+bx+c=0$. If 
$$\{|z_{i}-z_{j}| : 1\le i < j\le 4\} = \{\sqrt{2}, 2\}$$
find all possible values of $a$. *(Proposed by Yiyan Lin)*

11. **(20 points)** In the Cartesian coordinate plane $xOy$, curve $\Gamma: |x|+y^{2}=1$. Let $A_{1}, A_{2}, A_{3}, A_{4}, A_{5}, A_{6}$ be six distinct vertices arranged sequentially on $\Gamma$, satisfying that for $i=1,2,3$, the line segment $A_{i}A_{i+1}$ is parallel and equal in length to line segment $A_{i+3}A_{i+4}$ (with the convention $A_{7}=A_{1}$).
- **(1)** Prove that for $i=1,2,3$, points $A_{i}$ and $A_{i+3}$ are symmetric with respect to the origin;
- **(2)** Find the maximum possible area of the hexagon $A_{1}A_{2}A_{3}A_{4}A_{5}A_{6}$. *(Proposed by Yiyan Lin)*


## Daily Training problem
Today's theme is Inequalities

### Technique 1: Characteristic Function
1. Suppose that $a_1,\cdots,a_n>0$, and $x_1,\cdots,x_n\in \mathbb{R}$, such that $\sum_{i=1}^na_ix_i=0$. Prove that $$\sum_{1\le i<j\le n} x_ix_j|a_i-a_j|\le 0$$This is a typical quadratic form, so we need to make $|a_i-a_j|$ into the form of $f(i)f(j)$. WE think this $$|a_i-a_j|=a_i+a_j-2\min(a_i,a_j)$$Let's make the form more specific and clear: $$\sum_{1\le i<j\le n} x_ix_j(a_i+a_j-2\min(a_i,a_j))=-2\sum_{i=1}^n\sum_{j=1}^n \min(a_i,a_j)$$Then how we deal with $\min$? Actually this is quite interesting, we use the idea of Characteristic  Function: $$\min(a_i,a_j)=\int_0^\infty\mathbb{1}_{[0,a_i]}(t)\cdot\mathbb{1}_{[0,a_j]}(t)dt$$Then finished



# 0814

## Pre-test

## I. Fill-in-the-Blank Questions (8 questions in total, 8 points for each, 64 points in total)

1. Let $a$ be a real number satisfying $\log_{27} a + \log_a 3 = \frac{7}{6}$, then $a =$ ______.

2. Given that $\triangle ABC$ and $\triangle ADC$ are both equilateral triangles with side length $1$, and point $P$ is a point inside (or on the boundary of) parallelogram $ABCD$, then the maximum possible value of $(\vec{PA} + \vec{PB}) \cdot (\vec{PC} + \vec{PD})$ is ______.

It shouldn't be that complex, just consider midpoint.

3. There are two distinct points $A(4, 2)$ and $B(b^2, b)$ on the parabola $y^2 = x$. If there does not exist any point $C$ on the parabola (other than $A$ and $B$) such that $\angle ACB = 90^\circ$, then the range of $b$ is ______.

When stating the equation, don't split it out and dombly multiplication, use factor combination to make it more possible to solve.

4. In $\triangle ABC$, $\angle ACB = 3\angle ABC$, $AC = 4$, and $AB = 5$. Then $\cos \angle ACB =$ ______.
    
5. Given that a real arithmetic progression $\{a_n\}$ satisfies $a_1 + a_2 + a_3 = a_1^2 + a_2^2 + a_3^2$. Then the maximum possible value of $a_6$ is ______.

Don't express the function and use derivation, that's to complex!!!!! Use Cauchy instead

6. Let $\Gamma$ be a regular tetrahedron. Among the 10 points consisting of the 4 vertices and the midpoints of the 6 edges of $\Gamma$, 4 points are chosen at random. The probability that the chosen points lie on the same plane is ______.

Remember to consider this situation: 2 vertexes and the midpoint in the opposite side

7. Let tetrahedron $ABCD$ satisfy $AC = BD = 5$ and $AB = 7$. If the three pairs of opposite edges of the tetrahedron are mutually perpendicular, then the maximum value of the sum of its edge lengths is ______.

Use Arithmetic Power Line to track that perpendicular: don't be domb!!!!

8. Five numbers (allowing repetitions, order does not matter) are selected from the 9 positive integers $1, 2, 3, \dots, 8, 9$ such that the product of these five numbers is a perfect square. The number of all possible selections is ______.
    

The combination form: choosing items from a infinite multi-set: it is equivalent to the solution of a linear nonnegative integer solution: count the number of choosing each.

## II. Answer Questions (3 questions in total; Problem 9 is worth 16 points, Problems 10 and 11 are worth 20 points each, 56 points in total)

9. Let real numbers $a, b$ satisfy $a < b$. Given that the solution set of the system of inequalities
    
    $$\begin{cases} x^2 + ax + b > 0 \\ ax^2 + bx > 0 \end{cases}$$
    
    is $[a, b]$. Find $a$ and $b$.
    
10. Let $a \neq 0$ be a real number, and let $z \in \mathbb{C}$ be a root of the equation $x^{2026} + ax^{2025} + \frac{1}{2025} = 0$ satisfying $\vert{}z\vert{} > 1$. Prove that $z$ is a real number.

Actually, I make this so much complex by tracking the $\arg z$ and $\arg z+a$ but actually, it is impossible to compare how small of each, cuz it is hard to compare when they are both small, so use a triangle form instead, and don't estimate it so early!

11. In the Cartesian coordinate system $xOy$, $A$ is a point on the hyperbola $C: x^2 - \frac{y^2}{2} = 1$. The points $T_1, T_2$ are $\left(\frac{\sqrt{3}}{3}, 0\right)$ and $\left(-\frac{\sqrt{3}}{3}, 0\right)$ respectively. Lines $AT_1$ and $AT_2$ intersect the hyperbola at points $M$ and $N$ respectively (distinct from $A$), where $A$ lies in the first quadrant, and $M, N$ lie in the third quadrant. Through $A$, draw $AB \perp OA$ intersecting the hyperbola at point $B$ (distinct from $A$). Prove that the four points $A, B, M, N$ are concyclic (lie on the same circle).
    

# May 2026 Yuanfudao High School Mathematics Olympiad Mock Exam (YMO) - Second Round (Add-On)

### Problem 1 (40 points)

Let $a_1, a_2, \dots, a_{2026}$ be real numbers satisfying

$$\vert{}2a_1\vert{} + \vert{}3a_2 - a_1\vert{} + \vert{}4a_3 - 2a_2\vert{} + \dots + \vert{}2027a_{2026} - 2025a_{2025}\vert{} = 1.$$

Find the maximum value of $\sum_{k=1}^{2026} \vert{}a_k\vert{}$.

### Problem 2 (40 points)

As shown in the figure, in $\triangle ABC$, the circumcircle is $\odot O$, $H$ is the orthocenter, $X$ is the midpoint of $AH$, and $AD \perp BC$ at point $D$. Point $E$ lies on segment $AH$ such that $HE = HD$. Line $EY \parallel BC$ intersects $AC$ at point $Y$, and point $Z$ lies on $\odot O$ such that $OX$ is the exterior angle bisector of $\angle COZ$.

Prove that if $OH \perp BY$, then $OX \perp YZ$.

### Problem 3 (50 points)

For an integer $n \ge 10$, define $S(n)$ as the sum of digits of $n$ in base $10$, and define $S^l(n)$ as the $l$-th iteration of $S(n)$. Take the smallest $l(n)$ such that $S^{l(n)}(n) \le 9$, and define $f(n) = \sum_{i=1}^{l(n)} S^i(n)$. The sequence $\{a_n\}$ satisfies $a_1 \ge 10$ and $a_{n+1} = a_n + f(a_n)$. Prove that there exists a positive integer $k$ such that $9 \mid a_k$.

### Problem 4 (50 points)

Given a positive integer $t$. For a set of positive integers $A$, define a mapping $f_A: \mathbb{N}^+ \to \mathbb{N}$ such that for all $a \in \mathbb{N}^+$, $f_A(a)$ represents the number of positive integers in $A$ that are no greater than $a$. A set $A$ is called a _good set_ if $A$ satisfies: for any $m \in \mathbb{N}^+$, $m \in A$ if and only if there does not exist $a \in A$ such that $m = a + t f_A(a)$.

Does there exist a constant $c$ such that for any good set $A$ and for all $a \in A$, $a < c f_A(a)$ holds? If so, find the minimum constant $c$; if not, please prove it.


# 0816 超级驴数学联赛一试复盘

## 超级驴数学联赛一试复盘

这套卷子并不是知识点完全不会，而是暴露出了一个更具体的问题：有些题已经找到正确入口，却没有把模型、定义域或最后一步检查做完整。稳定完成的是第 1、2、6、7、9 题；第 10 题已经推到关键等式，但在开平方时丢掉了一个正根并保留了一个负数。第 3、4、5、8、11 题分别对应概率模型、圆锥曲线定义、复数模长、组合计数和中心化后的不等式放缩，值得集中复习。

### 作答总览

| 题号 | 我的作答 | 正确答案 | 结果与主要问题 |
| --- | --- | --- | --- |
| 1 | $\frac{33}{23}$ | $\frac{33}{23}$ | 正确，等差数列基本量处理稳定 |
| 2 | $\frac{19}{4}$ | $\frac{19}{4}$ | 正确，能由解集端点使用韦达定理 |
| 3 | 未完成 | $\frac23$ | 没有先分清“每轮”和“整场获胜”的概率 |
| 4 | $\sqrt{13}$ | $\sqrt5$ | 没有把垂直条件和双曲线定义量统一到坐标中 |
| 5 | 从辐角入手，未得到正确值 | $\sqrt{10}$ | 过早追踪辐角，使问题复杂化 |
| 6 | $6$ | $6$ | 正确，长方体距离平方恒等式使用准确 |
| 7 | $-\frac{133}{12}$ | $-\frac{133}{12}$ | 正确，先固定两个向量再优化第三个向量 |
| 8 | 未完成 | $\frac14$ | 没有把小正方形转化为 $4\times4$ 点阵上的“不攻击国王”计数 |
| 9 | $(4,+\infty)$ | $(4,+\infty)$ | 正确，和差化积与单变量代换清楚 |
| 10 | 推得 $R^2=7\pm2\sqrt6$，但写成 $R=1\pm\sqrt6$ | $R=\sqrt6-1$ 或 $R=\sqrt6+1$ | 主体正确，最后开平方和正值检查失误 |
| 11 | 做了中心化尝试，未完成 | $576$ | 已经接近核心，应继续大胆使用柯西不等式 |

### 第 1 题：等差数列

设等差数列首项为 $a_1$，公差为 $d$。由

$$
\frac{S_{13}}{S_9}=2
$$

得到

$$
13(2a_1+12d)=18(2a_1+8d),
$$

所以 $a_1=\frac65d$。因此

$$
\frac{a_{13}}{a_9}
=\frac{a_1+12d}{a_1+8d}
=\frac{33}{23}.
$$

这题没有问题。以后仍然应优先保留 $a_1,d$，不要无意义地展开全部项。

### 第 2 题：由不等式解集反推系数

二次不等式 $x^2-ax+1<0$ 的解集为 $(b^2,8b)$，所以两个端点就是方程的两根。由韦达定理，

$$
b^2\cdot8b=1,
$$

从而 $b=\frac12$。再由

$$
a=b^2+8b=\frac{17}{4},
$$

可得

$$
a+b=\frac{19}{4}.
$$

关键是看到“解集端点就是两根”，这一步完成得很好。

### 第 3 题：不均匀硬币与轮流获胜

设每次抛出正面的概率为 $p$。第一人先抛，因此第二人获胜可以发生在第一个回合、第二个完整回合之后等情形，其概率为

$$
(1-p)p+(1-p)^3p+(1-p)^5p+\cdots
=\frac{(1-p)p}{1-(1-p)^2}
=\frac{1-p}{2-p}.
$$

由题意

$$
\frac{1-p}{2-p}=\frac14,
$$

解得

$$
p=\frac23.
$$

==问题不在等比数列求和，而在求和之前没有明确每一项代表什么事件。== 概率题必须先用一句话定义事件，再写概率表达式，不能直接凭感觉写 $\sum p(k)$。

### 第 4 题：双曲线离心率

设双曲线为

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,
$$

焦点为 $F_1=(-c,0),F_2=(c,0)$。因为 $PF_2\perp F_1F_2$，可以设 $P=(c,y)$。代入双曲线得到

$$
y^2=\frac{b^4}{a^2}.
$$

又因为

$$
\overrightarrow{F_1P}=4\overrightarrow{F_1Q},
$$

所以

$$
Q=\left(-\frac c2,\frac y4\right).
$$

把 $Q$ 代回双曲线：

$$
\frac{c^2}{4a^2}-\frac{y^2}{16b^2}=1.
$$

令 $t=\frac{b^2}{a^2}$，并使用 $\frac{c^2}{a^2}=1+t$，可得

$$
\frac{1+t}{4}-\frac{t}{16}=1,
$$

所以 $t=4$，最终

$$
e^2=\frac{c^2}{a^2}=1+t=5,
\qquad e=\sqrt5.
$$

这类题不要直接猜离心率。先把焦点放在坐标轴上，垂直和向量倍数条件都会立刻变成坐标关系。

### 第 5 题：单位复数上的模长最大值

因为 $|z|=1$，所以 $\bar z=\frac1z$，从而

$$
|z^2+\sqrt2z+i|=|z+\sqrt2+i\bar z|.
$$

设 $z=x+iy$，其中 $x^2+y^2=1$。那么

$$
z+i\bar z=(x+y)+i(x+y).
$$

令 $s=x+y$，则 $s\in[-\sqrt2,\sqrt2]$，并且

$$
|z+\sqrt2+i\bar z|^2
=(\sqrt2+s)^2+s^2
=2s^2+2\sqrt2s+2.
$$

这是闭区间上的凸二次函数，最大值在端点取得。代入 $s=\sqrt2$，得到最大值平方为 $10$，所以答案是

$$
\sqrt{10}.
$$

==看到 $|z|=1$ 时，应先尝试除以 $z$，把高次项和常数项变成 $z,\bar z$ 的线性组合。== 这比直接追踪多个复数的辐角稳定得多。

### 第 6 题：长方体中的距离平方

以 $A$ 为原点，把 $AB,AD,AA_1$ 作为三条坐标轴。直接展开距离平方可以得到

$$
PC_1^2=PB^2+PD^2+PA_1^2-2PA^2.
$$

因此

$$
PC_1^2=2^2+3^2+5^2-2\cdot1^2=36,
$$

所以

$$
PC_1=6.
$$

这题做得正确。值得记住的不是结论本身，而是“正交坐标下展开距离平方，交叉项会抵消”的结构。

### 第 7 题：三个向量的最小值

写成

$$
\vec u=3\vec a,\qquad \vec v=2\vec b,\qquad \vec w=\vec c,
$$

其中 $\vec a,\vec b,\vec c$ 都是单位向量。原式成为

$$
6\vec a\cdot\vec b+4\vec b\cdot\vec c+9\vec c\cdot\vec a.
$$

固定 $\vec a,\vec c$ 后，关于 $\vec b$ 的最小值为

$$
-|6\vec a+4\vec c|.
$$

令 $t=\vec a\cdot\vec c\in[-1,1]$，问题化为求

$$
f(t)=9t-\sqrt{52+48t}
$$

的最小值。由 $f'(t)=0$ 得

$$
t=-\frac{101}{108},
$$

代回可得

$$
f_{\min}=-\frac{133}{12}.
$$

这题的降维方法很好：先固定两个向量，把第三个向量与一个已知向量反向，再只保留一个内积参数。

### 第 8 题：三个互不重叠的 $2\times2$ 子方格

$5\times5$ 方格表中共有 $16$ 个 $2\times2$ 子方格，可以把每个子方格的左上角对应到一个 $4\times4$ 点阵。两个子方格无重叠，当且仅当对应的两个点不在相邻的行与相邻的列中。这等价于在 $4\times4$ 棋盘上放置三个互不攻击的国王。

逐行按照可选位置计数，可以得到合法选法数为 $140$。所有选择三个子方格的方法共有

$$
\binom{16}{3}=560
$$

种，因此所求概率为

$$
\frac{140}{560}=\frac14.
$$

组合题卡住时，不要一直盯着原图。==先为每个对象寻找一个唯一代表点，再把“重叠”翻译成代表点之间的禁配关系。==

### 第 9 题：三角函数取值范围

由 $B-C=\frac{2\pi}{3}$ 和 $B+C=\pi-A$，有

$$
\sin B\sin C
=\frac{\cos(B-C)-\cos(B+C)}2
=\frac{2\cos A-1}{4}.
$$

所以原式为

$$
\frac{4\cos^2A}{2\cos A-1}.
$$

又由三角形角度条件可知 $0<A<\frac\pi3$，因此

$$
\frac12<\cos A<1.
$$

在这个区间上讨论函数，可以得到取值范围

$$
(4,+\infty).
$$

这题完成得很好，尤其是先用角的和差把两个变量压成 $A$ 一个变量。

### 第 10 题：椭圆与圆的公切线

你的坐标化和切线计算已经推到了

$$
R^2=7\pm2\sqrt6.
$$

真正的失误只在最后一步：

$$
7+2\sqrt6=(\sqrt6+1)^2,
\qquad
7-2\sqrt6=(\sqrt6-1)^2.
$$

由于半径 $R>0$，所以

$$
R=\sqrt6+1
\quad\text{或}\quad
R=\sqrt6-1.
$$

不能写成 $1\pm\sqrt6$，因为 $1-\sqrt6<0$，而且这样还会漏掉正数 $\sqrt6-1$。==凡是从 $x^2=A$ 回到 $x$，必须立刻检查正负、定义域和是否丢解。== 这不是方法问题，而是必须通过固定检查流程消灭的失分。

### 第 11 题：中心化与柯西不等式

令

$$
x_i=a_i-1,\qquad y_i=b_i-2.
$$

则

$$
\sum_{i=1}^{10}x_i=\sum_{i=1}^{10}y_i=0,
$$

并且由 $\sum a_ib_i=16$ 得到

$$
\sum_{i=1}^{10}x_iy_i=-4.
$$

设

$$
X=\sum_{i=1}^{10}x_i^2,
\qquad
Y=\sum_{i=1}^{10}y_i^2.
$$

由柯西不等式，

$$
XY\ge\left(\sum_{i=1}^{10}x_iy_i\right)^2=16.
$$

同时

$$
\sum a_i^2=X+10,
\qquad
\sum b_i^2=Y+40.
$$

因此只需最小化

$$
(X+10)(Y+40).
$$

在 $XY\ge16$ 下，最小值一定在 $XY=16$ 处取得。令 $Y=\frac{16}{X}$，则

$$
(X+10)\left(40+\frac{16}{X}\right)
=416+40X+\frac{160}{X}
\ge576.
$$

当 $X=2,Y=8$ 时等号可以达到，所以答案为

$$
576.
$$

你在卷面上已经想到把 $a_i,b_i$ 中心化为和为零的新变量，这正是最关键的一步。==中心化以后看到固定内积，就应该立即尝试柯西：固定内积会给两个平方和的乘积一个下界。== 不要因为式子看起来自由度很大就停止放缩。

## 总结：下一次必须执行的检查流程

1. **概率题先定义事件。** 每一项必须能用一句话解释，再写等比数列。
2. **单位复数先尝试 $\bar z=1/z$。** 不要一上来同时追踪多个辐角。
3. **几何题优先坐标化强条件。** 垂直、共线、向量倍数都适合先落到坐标。
4. **组合题先换模型。** 子方格可以用左上角代表，重叠关系可以转成棋盘禁配。
5. **中心化后立即找内积。** 出现固定的 $\sum x_iy_i$ 时，优先考虑柯西不等式。
6. **最后一分钟只做定义域检查。** 尤其检查平方根正负、概率是否在 $[0,1]$、长度是否为正，以及答案是否漏解。

这次最需要改进的并不是增加更多偏题技巧，而是让已经找到的正确方法完整落地。第 10 题说明主体能力已经足够；接下来要做的是通过固定的末步检查，把“几乎做对”变成真正得分。

# 0819 全国高中数学联合竞赛模拟试题（1）复盘

> [!NOTE] AI 分析
> 全国高中数学联合竞赛模拟试题（1）复盘。以下内容由 AI 根据原题、参考答案和手写作答逐题核验。

## 总体诊断

材料没有阅卷分数，因此不推测总分。按答案和过程核对，第 1、2、3、4、5、9、11 题结论正确，第 6、7、8、10 题错误，共 7 题结论正确。主要失分不是知识空白，而是四种落地问题：望远镜求和漏首项、把弱不等式读成严格不等式、概率路径漏计排列重数、复杂代数推导后漏加已经找到的基础分支。其中第 8 题和第 10 题都有明确历史记录，已不是偶然。

## 作答总览

| 题号 | 得分 | 结果 | 核心错因或亮点 | 下次动作 |
| --- | ---: | --- | --- | --- |
| 1 | 未提供 | 正确，$\{1\}$ | 正确使用反函数关系 | 写清 $f(x)=1\iff x=g(1)$ |
| 2 | 未提供 | 正确，$2^{36}$ | 对数换元后用柯西不等式 | 下界后补等号条件 |
| 3 | 未提供 | 正确，$[-\sqrt5/5,\sqrt5/5]$ | 把问题转成单位圆与直线的距离 | 检查“对一切 $\theta$”和端点 |
| 4 | 未提供 | 正确，$-11/5$ | 向量内积化成 $|PO|^2-3$ | 在线段上检查垂足可取 |
| 5 | 未提供 | 正确，$1/6$ | 识别交集为中间正八面体 | 先证明交集边界，再算体积 |
| 6 | 未提供 | 错误 | 望远镜求和漏掉首端 $-2$ | 强制写成“末项减首项” |
| 7 | 未提供 | 错误，写 2049 | 把“$\ge$”按严格分隔计数 | 单列等号情形 |
| 8 | 未提供 | 错误，写 $49/256$ | 每类只数一条胜负顺序，漏排列重数 | 写“末局固定 + 前序排列” |
| 9 | 未提供 | 正确，最小值 7 | 韦达换元与齐次不等式路线成立 | 把关键不等式单独写清 |
| 10 | 未提供 | 错误，写 2 或 0 | 算出非对称分支后漏加对称分支 | 参数分类后回到图形计数 |
| 11 | 未提供 | 正确 | Minkowski 向量构造简洁有效 | 明确向量维数与各坐标 |

## 逐题分析

### 第 1 题：反函数求值

- **结论**：正确，解集为 $\{1\}$。
- **作答定位**：使用 $f(x)=1\iff x=g(1)$，再由给出的反函数计算出 $g(1)=1$。
- **关键思路**：不需要还原 $f$ 的完整解析式，直接使用函数与反函数的对应关系。
- **根本错因**：本题无错误。卷面中的自变量字母有些混用，但主线正确。
- **下次避免**：**看到反函数题只问一个函数值时，立即写 $f(x)=y\iff x=g(y)$，不要先求整个原函数。**

### 第 2 题：对数换元与柯西不等式

- **结论**：正确，最小值为 $2^{36}$。
- **作答定位**：将条件改写为 $\frac{\ln2}{\ln x}+\frac{2\ln2}{\ln y}+\frac{3\ln2}{\ln z}=1$，并对它与 $\ln(xy^2z^3)$ 使用柯西不等式。
- **关键思路**：乘积最小值转成对数和的最小值，柯西给出 $\ln(xy^2z^3)\ge36\ln2$。
- **根本错因**：无实质错误。若作为正式解答，需要补一句等号条件可以同时满足，从而下界确实可取。
- **下次避免**：**看到对数底数也是变量时，立即换成自然对数；得到下界后，立即核对等号条件。**

### 第 3 题：复数模长的几何解释

- **结论**：正确，$a\in[-\sqrt5/5,\sqrt5/5]$。
- **作答定位**：把 $z$ 看成固定点 $(a,2a)$ 与单位圆上动点的差，转成点到单位圆上所有点的距离不超过 2。
- **关键思路**：最大距离为 $\sqrt{a^2+4a^2}+1=\sqrt5|a|+1$，令其不超过 2。
- **根本错因**：无错误，几何入口很稳。
- **下次避免**：**看到 $(a+\cos\theta)+(b-\sin\theta)i$ 的模时，立即画成固定点到单位圆动点的距离。**

### 第 4 题：椭圆焦点与向量内积

- **结论**：正确，最小值为 $-11/5$。
- **作答定位**：正确写出
  $$
  \overrightarrow{PF_1}\cdot\overrightarrow{PF_2}
  =|PO|^2+\overrightarrow{OF_1}\cdot\overrightarrow{OF_2}
  =|PO|^2-3,
  $$
  再求原点到线段 $AB$ 的最短距离。
- **关键思路**：直线 $AB$ 为 $y=\frac12x+1$，垂足位于线段内，最小 $|PO|^2=4/5$。
- **根本错因**：无错误；既用了焦点对称性，又检查到了实际垂足。
- **下次避免**：**看到对称两点的两个向量内积时，立即以对称中心拆向量；求直线最短距离后，立即检查垂足是否在线段上。**

### 第 5 题：两个正四面体的公共部分

- **结论**：正确，公共部分体积为 $1/6$。
- **作答定位**：识别交集为正方体中间的正八面体，并用两个全等四棱锥计算体积。
- **关键思路**：正八面体的赤道正方形面积为 $1/2$，上下高均为 $1/2$，故体积为 $2\cdot\frac13\cdot\frac12\cdot\frac12=1/6$。
- **根本错因**：答案和计算正确，但“公共部分恰好是这个正八面体”的论证略跳步；填空题尚可，证明题中不能只凭图感。
- **下次避免**：**看到立体交集时，立即列出交集顶点和边界面，确认形状后再套体积公式。**

### 第 6 题：递推数列与望远镜求和

- **结论**：错误。正确答案是
  $$
  \frac{2^{n+1}}{n+1}-2.
  $$
- **作答定位**：正确推出 $a_1=2$、$a_{n+1}=2a_n$，从而 $a_n=2^n$；也正确化出
  $$
  \frac{n-1}{n(n+1)}a_n
  =\frac{2^{n+1}}{n+1}-\frac{2^n}{n}.
  $$
  错误发生在最后求和：只保留了末项，漏掉首端 $-2^1/1=-2$。
- **关键思路**：令 $c_n=2^n/n$，则第 $n$ 项为 $c_{n+1}-c_n$，前 $n$ 项和是 $c_{n+1}-c_1$。
- **根本错因**：已经找到标准差分结构，却没有把首尾项完整写出。卷面上还写了首项为 0；若把最终答案代入 $n=1$，错误答案为 2，与首项 0 立即矛盾。
- **下次避免**：**看到望远镜求和时，立即写前三项和最后一项；看到 $c_{k+1}-c_k$ 时，立即写“和 = $c_{n+1}-c_1$”。**

### 第 7 题：集合对计数

- **结论**：错误，正确答案为 9217，不是 2049。
- **作答定位**：按 $\max B$ 分类的方向可行，但在 $\max B=t$ 时，只允许 $A$ 从严格大于 $t$ 的元素中取，漏掉了 $t\in A$ 的合法情形。
- **关键思路**：更稳地令 $t=\min A$。集合 $A$ 有 $2^{10-t}$ 种，非空集合 $B\subseteq\{1,\ldots,t\}$ 有 $2^t-1$ 种，所以
  $$
  \sum_{t=1}^{10}2^{10-t}(2^t-1)=9217.
  $$
- **根本错因**：把“最小元素不小于最大元素”默认为严格分居两侧，没有单独审查等号边界。
- **下次避免**：**看到集合计数中的 $\ge$ 或 $\le$ 时，立即问“边界元素能否同时属于两边”，并单列等号样例。**

### 第 8 题：擂台赛停止时刻的期望

- **结论**：错误，正确答案为 $187/256$，不是 $49/256$。
- **作答定位**：已按甲队未上场人数分类，但每一类只写了一条固定胜负顺序的概率，没有乘此前比赛结果的排列数；随后又用不完整的总概率做归一化。
- **关键思路**：当 $X=k$ 时，最后一局必须淘汰乙队第 5 人，前 $8-k$ 局中甲队恰输 $4-k$ 局。因此
  $$
  P(X=k)=\binom{8-k}{4-k}2^{-(9-k)},\qquad k=1,2,3,4,
  $$
  再求 $\sum kP(X=k)=187/256$。
- **根本错因**：把“满足某种胜负场数的全部有序路径”当成“一条代表路径”，事件和概率项没有一一对应。
- **下次避免**：**看到“第几局结束、首次达到、剩余几人”时，立即写“最后一局固定 + 前面结果组成 + 排列数”。**

### 第 9 题：三次方程正根与齐次不等式

- **结论**：正确，最小值为 7。
- **作答定位**：设三个正根为 $x_1,x_2,x_3$，正确使用韦达定理并令 $p=-a,q=b,r=-c$，把目标化为正变量齐次不等式；最后得到等号在 $x_1=x_2=x_3$ 时成立。
- **关键思路**：可直接使用答案中的恒等式
  $$
  7ab-2a^3-9c=\sum_{cyc}(x_i+x_j)(x_i-x_j)^2\ge0.
  $$
  由于 $ab<0$，除法时注意不等号方向，即得原式不小于 7。
- **根本错因**：无实质错误。原作答的不等式展开较长，关键的对称不等式虽然成立，但中间记号密集，增加了自我核查成本。
- **下次避免**：**看到三正根与 $a,b,c$ 的齐次式时，立即先写韦达符号；使用 Muirhead 或配方后，立即单列等号条件。**

### 第 10 题：椭圆内接等腰直角三角形计数

- **结论**：错误。正确答案是
  $$
  \begin{cases}
  3,&a^2>3b^2,\\
  1,&a^2\le3b^2.
  \end{cases}
  $$
- **作答定位**：开头已观察到关于 $y$ 轴对称的等腰直角三角形始终存在；后面又用直线参数求出了何时存在另外两个非对称三角形。但最终只写“2 或 0”，忘记把开头的那个基础图形加回去。
- **关键思路**：先固定保留对称分支 1 个。非对称分支对应参数方程有两个不同实根，当且仅当 $a^2>3b^2$；等号时与对称分支重合，不能重复计数。
- **根本错因**：推导过长后失去“当前算的是全部对象还是新增分支”的记账；参数根的个数没有回译成不同几何图形的总数。
- **下次避免**：**看到分类计数时，立即建立“基础分支 + 新增分支”计数表；解出参数后，立即回到图形检查存在、重合、对称和退化。**

### 第 11 题：Minkowski 不等式

- **结论**：正确，这个过程可以被接受。
- **作答定位**：令 $a_i=k_i^2$，把左边每个根式写成 $\mathbb R^n$ 中一个向量的模，再使用 Minkowski 不等式；向量和为 $(k_1,2k_2,\ldots,nk_n)$，正好得到右边。
- **关键思路**：第 $j$ 个向量可写为前 $j-1$ 个坐标为 0、后面依次为 $k_j,\ldots,k_n$。所有向量相加后，第 $i$ 个坐标出现 $i$ 次。
- **根本错因**：无错误。若要让阅卷者一眼确认，只需把“这些是 $\mathbb R^n$ 中的向量”及一般项写得更明确。
- **下次避免**：**看到多个“尾和”的平方根相加时，立即尝试把每项写成同维向量的模，再用 Minkowski。**

## 重复错因追踪

| 错因 | 本次题号 | 历史定位 | 次数与连续性 | 强制改进动作 |
| --- | --- | --- | --- | --- |
| 有序概率路径漏掉排列重数 | 8 | 2026-08-06 第 5 题：三次掷骰把有序结果按无序三元组计数，漏乘排列数 | 第 2 次，已不是偶然 | 连做 5 道“末次发生/有序样本”题，每项旁写事件与排列数 |
| 概率式没有对应完整事件 | 8 | 2026-08-16 第 3 题：未分清每轮与整场获胜事件 | 连续两份正式复盘出现，属于连续性问题 | 固定使用“事件、末局、前序组成、重数、概率”五栏模板 |
| 非等价变形或分类后漏分支 | 10 | 2026-08-16 第 10 题：开平方后漏掉合法正根并保留负值 | 第 2 次，且连续两份正式复盘出现，已不是偶然 | 每次除法、开方、分类后列分支清单，最终逐项打勾回收 |

第 6 题的边界项遗漏、第 7 题的弱不等式边界遗漏都属于本卷首次有明确证据的具体错误，暂不强行与历史记录合并；但两题共同说明“边界检查”需要进入固定交卷流程。

## 教练总结

1. **首要问题是分支和边界没有回收。** 第 6 题漏首项，第 7 题漏等号，第 10 题漏基础分支。今后草稿上凡出现分类、望远镜、弱不等式，都必须画一个方框写清边界。
2. **概率建模必须专项处理。** 第 8 题与 2026-08-06、2026-08-16 的记录形成明确重复。未完成 5 道有序路径专项并逐项标事件前，不能用“下次注意”结案。
3. **下次交卷前只查四项：** 望远镜是否减首项；$\ge$ 是否含等号；概率是否乘排列数；分类得到的是新增数量还是总数量。

> 本次真正需要修正的不是解题入口，而是让已经找到的入口完整落地：首尾不漏、等号不漏、路径不漏、分支不漏。

# 0821 全国高中数学联合竞赛模拟试题（2）复盘

> [!NOTE] AI 分析
> 全国高中数学联合竞赛模拟试题（2）复盘。以下内容根据 `math-exam-review-2026-08-21.docx`、试题原文与官方答案独立核验。

## 总体诊断

DOCX 按填空题全对全错、解答题错题不给步骤分估算为 **52/120**：第 4、8、9、11 题正确，其中第 9、11 题共拿下 36 分，证明能力是本卷最稳定的部分；第 1、2、5、7、10 题结论错误，第 3、6 题未作答。实际阅卷分没有提供，第 10 题已有大量有效步骤，实际分数可能高于 52，不能把估分当成正式得分。

本卷最需要解决的仍不是计算能力，而是两件已经多次出现的事：第一，解出主体后没有把定义域、辅助变量范围和边界带回最终答案；第二，明明存在更短的结构化方法，却进入长计算，最后无法定位错误。第 3、5、6 题还暴露出三个可专项补齐的工具缺口：外心与弦的中点技巧、椭圆垂直半径恒等式、空间距离平方的同起点向量化。

### 材料校正

DOCX 的总体对错判断基本可靠，但以下三处说明需更正：

1. 第 2 题若令 $t=\sqrt{a+2}$，应有 $0\le t<\frac12$，不是 $0\le t<1$；正确值域仍为 $(-\frac54,-1]$。
2. 第 5 题正确答案是 $\sqrt{2-\sqrt2}\le e<1$，DOCX 漏写了最外层平方根。
3. 第 7 题条件为部分和绝对值不超过 2，因此坏路径是部分和到达 $3$ 或 $-3$，不是到达 $2$ 或 $-2$。

## 作答总览

| 题号 | 得分 | 结果 | 核心错因或亮点 | 下次动作 |
| --- | ---: | --- | --- | --- |
| 1 | 0/8（估） | 错误 | 未先锁定变底对数定义域，区间端点与开闭性失控 | 第一行写全定义域 |
| 2 | 0/8（估） | 错误 | 得到 $k(t)$ 后没有带回 $t$ 的范围 | 换元时把新变量范围写在式子旁 |
| 3 | 0/8（估） | 未作答 | 未识别外心到弦中点的垂直结构 | 外心点积先取弦中点 |
| 4 | 8/8（估） | 正确，0 | 结论正确，但 DOCX 未保留过程 | 保留关键等号成立说明 |
| 5 | 0/8（估） | 错误 | 误记椭圆垂直半径关系 | 用方向角现场推导倒数平方恒等式 |
| 6 | 0/8（估） | 未作答 | 平方距离没有统一成同起点向量 | 所有边先改写为从 $S$ 出发的向量差 |
| 7 | 0/8（估） | 错误，写 142 | 标数/反射计数出现边界漏算，未做补集复核 | 用“总数减坏路径”验算 |
| 8 | 8/8（估） | 正确，31 | 内容正确，首轮跳过后回做多耗时 | 跳题时留一词入口提示 |
| 9 | 16/16（估） | 正确 | 递推式、单调性与上界证明完整 | 保持当前书写结构 |
| 10 | 0/20（估） | 结论错误 | 斜率与正切路线过长，代数错误被埋没 | 目标为直角时优先证点积为 0 |
| 11 | 20/20（估） | 正确 | 及时放弃无效统一放缩，改用自然分类 | 两次无进展即寻找阈值分类 |

## 逐题分析

### 第 1 题：变底对数不等式

- **结论**：错误。正确解集为
  $$
  x\in\left(2k\pi,2k\pi+\frac\pi4\right),\qquad k\in\mathbb Z.
  $$
- **作答定位**：原答案写成从 $\frac\pi4+2k\pi$ 到 $\frac{9\pi}4+2k\pi$ 的闭区间，说明对数变形后没有继续用定义域筛选，也没有检查端点处底数或真数是否为 0、1。
- **关键思路**：两边对数同时有意义先要求 $0<\sin x,\cos x<1$，故只能在第一象限内部。此时两个自然对数都为负，变底后比较可化为 $\sin x<\cos x$，于是得到上述开区间。
- **根本错因**：把定义域当成计算前的一次性手续，而没有把它作为最终答案的硬约束；区间长度接近一个完整周期却未触发量级警报。
- **下次避免**：**看到底数含变量的对数不等式时，立即写“底数 $>0$、底数 $\ne1$、真数 $>0$”，答案出来后逐条回查。**

### 第 2 题：区间映射与参数范围

- **结论**：错误。正确为
  $$
  k\in\left(-\frac54,-1\right].
  $$
- **作答定位**：已经正确把 $k$ 化为辅助变量的二次式，但答案写成 $(-\frac54,+\infty)$，遗漏了辅助变量范围带来的上界。
- **关键思路**：因 $f(x)=k-\sqrt{x+2}$ 递减，值域仍为 $[a,b]$ 等价于 $f(a)=b,f(b)=a$。令 $u=\sqrt{a+2},v=\sqrt{b+2}$，由 $a<b$ 得 $0\le u<v$，两式相减得 $u+v=1$，故 $0\le u<\frac12$。于是
  $$
  k=u^2-u-1\in\left(-\frac54,-1\right].
  $$
- **根本错因**：完成换元后只优化了表达式，没有同时优化“表达式 + 新变量可行域”。
- **下次避免**：**看到“令 $t=\cdots$”时，立即在同一行写出 $t$ 的范围；求参数范围前先读一遍这个范围。**

### 第 3 题：外心点积与边长关系

- **结论**：未作答，正确范围为 $[\frac23,1)$。
- **作答定位**：已经意识到最终应使用余弦定理，但没有找到把 $\overrightarrow{AO}\cdot\overrightarrow{BC}$ 一类点积改写为边长的入口。
- **关键思路**：取 $BC$ 中点 $D$，写 $\overrightarrow{AO}=\overrightarrow{AD}+\overrightarrow{DO}$。因外心到弦中点的连线垂直于弦，$\overrightarrow{DO}\cdot\overrightarrow{BC}=0$，故原点积只剩 $\overrightarrow{AD}\cdot\overrightarrow{BC}$，可化成边长平方差。其余两项同理，再由余弦定理化为单变量比值即可得到范围。
- **根本错因**：缺少“外心 + 弦向量”这一组合的标准触发器，不是余弦定理不会用。
- **下次避免**：**看到外心与边向量的点积时，立即取该边中点，用“外心到弦中点垂直于弦”消掉一项。**

### 第 4 题：单位圆上的复多项式

- **结论**：正确，$m+n=0$。
- **作答定位**：DOCX 只保留了答案 0，没有保留完整推导，因此可以确认结论，不能进一步判断论证是否充分。
- **关键思路**：在 $z=1,-1,i,-i$ 处代入，并利用四个模长均为 1 的等号条件，可以迫使相应复数同向并解出 $m=n=0$。
- **根本错因**：无可确认错误；材料不足以评价过程质量。
- **下次避免**：**看到“对所有 $|z|=1$”成立时，立即先试 $1,-1,i,-i$ 四个对称点，再处理等号条件。**

### 第 5 题：椭圆垂直半径与离心率

- **结论**：错误。正确范围为
  $$
  \sqrt{2-\sqrt2}\le e<1.
  $$
- **作答定位**：原作答使用了 $r_1^2+r_2^2=a^2+b^2$，该式对本题不成立，因此后续上下界都失去依据。
- **关键思路**：若两条互相垂直的椭圆半径长度为 $r_1,r_2$，由方向角公式可现场推出
  $$
  \frac1{r_1^2}+\frac1{r_2^2}=\frac1{a^2}+\frac1{b^2}.
  $$
  焦点向量条件又给出 $r_1^2+r_2^2=2c^2$。结合 $(r_1^2+r_2^2)^2\ge4r_1^2r_2^2$，并代入 $e=c/a$、$b^2=a^2(1-e^2)$，得到 $e^2\ge2-\sqrt2$。
- **根本错因**：记住了“垂直半径存在恒等式”，但把倒数平方关系误记成平方和关系，且没有用圆的极限情形做检验。
- **下次避免**：**看到椭圆某方向半径时，立即写 $r^{-2}=\cos^2\theta/a^2+\sin^2\theta/b^2$；不确定公式就用垂直方向相加现场推导。**

### 第 6 题：四面体平方距离与外接球

- **结论**：未作答，正确半径为 $2\sqrt{21}$。
- **作答定位**：卡在“平方距离如何处理”，没有把六条棱统一到同一个向量起点。
- **关键思路**：令 $\mathbf x=\overrightarrow{SA},\mathbf y=\overrightarrow{SB},\mathbf z=\overrightarrow{SC}$，则 $AB,BC,CA$ 分别对应向量差。题设平方和关系化为三个两两内积之和；又因 $P$ 是两中点连线的中点，
  $$
  \overrightarrow{SP}=\frac{\mathbf x+\mathbf y+\mathbf z}{4}.
  $$
  设 $\mathbf r=\overrightarrow{SO}$，由 $OA=OS$ 得 $|\mathbf x|^2=2\mathbf r\cdot\mathbf x$，对 $\mathbf y,\mathbf z$ 同理。把已知 $SP,OP$ 代入即可解得 $|\mathbf r|=2\sqrt{21}$。
- **根本错因**：面对多个平方距离时仍把它们看成彼此独立的长度，没有先统一起点以制造可消去的内积。
- **下次避免**：**看到空间图形中“若干棱平方和相等”时，立即选一个顶点作共同起点，把其余棱写成向量差。**

### 第 7 题：有界部分和的 $\pm1$ 序列计数

- **结论**：错误，正确答案为 162，不是 142。
- **作答定位**：使用了标数法或反射思路，但 DOCX 没有保留完整计数过程，无法可靠指出具体哪一行少算 20；可以确认的是最终没有用补集法复核。
- **关键思路**：总和为 0 的序列共有 $\binom{10}{5}=252$ 个。违反 $|S_k|\le2$ 的路径必须到达 $3$ 或 $-3$，两类经反射各有 $\binom{10}{2}=45$ 个，且 10 步内不可能两类同时发生。因此
  $$
  \binom{10}{5}-2\binom{10}{2}=162.
  $$
- **根本错因**：快捷计数完成后没有用“总数减坏路径”做独立校验；边界是“超过 2”而非“到达 2”，这一语义也必须先固定。
- **下次避免**：**看到部分和受界的 $\pm1$ 序列时，立即画路径并写清坏边界是 $h+1$；快捷法算完后用总数减反射坏路径复核。**

### 第 8 题：具有对称性质的集合计数

- **结论**：正确，$f(9)-f(8)=31$。
- **作答定位**：内容上没有错误；首轮跳过，回做时额外花约 3 分钟重新理解题意。
- **关键思路**：按新增最大元素及可取的对称中心递推计数，最后比较相邻两个 $f(n)$。
- **根本错因**：无知识错误。可改进的是跳题后的恢复成本，而不是解法。
- **下次避免**：**决定跳题时，立即在题号旁写一个入口词，如“对称中心递推”，回做时从该入口继续。**

### 第 9 题：递推数列的单调性与上界

- **结论**：正确，证明完整。
- **作答定位**：正确导出
  $$
  a_{n+1}=\frac{a_n^2}{a_n^2-a_n+1},
  $$
  并依次证明非负、$a_{n+1}\le a_n$ 以及 $a_{k+1}\le\frac43$，与官方主线一致。
- **关键思路**：分母恒正保证定义与非负性；比较相邻项控制单调性，再把与 $\frac43$ 的差配成负平方。
- **根本错因**：无错误。这题说明一旦识别递推结构，代数论证和等号方向都很稳定。
- **下次避免**：**看到分式递推时，立即先查分母符号，再分别计算“相邻项之差”和“与目标上界之差”。**

### 第 10 题：椭圆、准线与直角判定

- **结论**：错误，正确为 $\angle PFQ=90^\circ$。
- **作答定位**：已正确求出离心率并建立交点与直线参数，但随后通过两条斜率计算 $\tan\angle PFQ$，变量层层传递，最终得到不能化简的表达式。DOCX 未保留足够细节，不能武断指定某一行是首错。
- **关键思路**：题目目标是直角，应直接写 $\overrightarrow{FP}\cdot\overrightarrow{FQ}$。利用交点横坐标的和与积，以及等比条件推出的 $a=2c$，点积会直接化为 0，比斜率正切路线短得多。
- **根本错因**：没有按目标角的特殊值选择最低错误率的方法；长计算出现异常后也没有分段核查 $x_1+x_2,x_1x_2$ 等中间量。
- **下次避免**：**看到“求角”且答案可能为 $90^\circ$ 时，立即先试点积为 0；长计算超过两层代换时，每个对称量单独装框验算。**

### 第 11 题：向量距离和不等式

- **结论**：正确，证明完整。
- **作答定位**：最初尝试用一个统一的柯西型下界处理所有 $\mathbf v$，发现无效后及时改成 $|\mathbf v|\ge1$ 与 $|\mathbf v|<1$ 两类，最终路线与官方一致。
- **关键思路**：第一类直接用三角不等式；第二类由 $(|\mathbf u_i|^2-1)(|\mathbf v|^2-1)\le0$ 推出 $|\mathbf u_i-\mathbf v|\ge1-\mathbf u_i\cdot\mathbf v$，求和后利用 $\sum\mathbf u_i=0$。
- **根本错因**：无错误。值得保留的是没有执着于最初的统一放缩，而是识别出 $|\mathbf v|=1$ 这个自然阈值。
- **下次避免**：**统一放缩连续两次无进展时，立即寻找题设中的自然阈值并分类，不继续堆代数。**

## 重复错因追踪

| 错因 | 本次题号 | 历史定位 | 次数与连续性 | 强制改进动作 |
| --- | --- | --- | --- | --- |
| 最终答案未回查定义域、边界或被排除分支 | 1、2 | 0816 第 10 题漏正根并保留负半径；0819 第 7 题漏等号、第 10 题漏基础分支 | 累计 5 个明确题次，连续三次正式复盘出现，是持续性问题 | 每道范围题答案后强制写“定义域、端点、回代”三格并逐格打勾 |
| 选择高错误率长计算，异常结果后无法定位 | 10 | 0806 第 4、9 题分别记录“过度计算后出错”“计算失控”；0819 第 10 题推导过长后漏计分支 | 累计第 4 次；0819、0821 连续出现，已不是偶然 | 做题前写目标结构；超过两层代换必须寻找点积、对称量或不变量替代路线 |
| 快捷计数缺少独立复核 | 7 | 0806 第 5 题漏排列重数；0819 第 7、8 题分别漏边界和路径重数 | 错误形态相近但具体根因不同，记为疑似重复，不强行累计次数 | 计数题保留一种主解，并用“小规模枚举/总数减坏类/概率和为 1”任选一种复核 |

第 3、5、6 题的“标志性技巧未识别”目前没有足够历史证据证明是同一根因的重复错误，暂不累计次数；它们应作为本次新增的工具专项处理。

## 教练总结

1. **首要观察指标仍是约束回查。** 这已经连续三次正式复盘出现，不能再用“最后细心一点”结案。下一张卷必须在所有范围题旁留下“定义域、端点、回代”三格检查痕迹。
2. **三项工具专项各做 3 题。** 外心与弦中点、椭圆方向半径倒数平方、空间同起点向量化；每题只记录“触发特征”和“第一步”，目标是形成看到题型就启动的入口。
3. **控制计算错误面。** 目标为垂直先点积，目标为有界路径先补集反射；若计算超过两层换元，暂停 30 秒寻找更短结构，再决定是否继续。

> 本次最强的信号是第 9、11 题：证明能力没有问题。下一阶段不是盲目加题量，而是补齐三个入口，并把已经连续出现的约束检查真正写在卷面上。

# 0822 全国高中数学联合竞赛模拟试题（4）复盘

> [!NOTE] AI 分析
> 本次材料为 `2026-08-22-review-exam4.md`，其中按题给出了题意摘要、用户答案、参考答案及部分过程评价。多数正确题没有保留完整原始作答，因此可以核对结论和得分，但不能对未展示的中间步骤作过度评价。

## 总体诊断

本卷得分 **104/120**，第 1、2、3、5、7、8、9、10、11 题全部正确，仅第 4、6 题未作答。没有出现计算失误、漏条件、末步丢解或计数漏重，说明前几次复盘中反复出现的执行问题在本卷得到明显控制。两处失分都发生在“第一步转换没有被触发”：第 4 题没有把递推式改造成倒数恒等式，第 6 题没有把边长成等差数列先通过正弦定理翻译成角的关系。本次最优先任务不是增加检查项目，而是把这两个转换入口练成看到题设就能启动的动作。

## 作答总览

| 题号 | 得分 | 结果 | 核心错因或亮点 | 下次动作 |
| --- | ---: | --- | --- | --- |
| 1 | 8/8 | 正确，$a=-2$ 或 $-\frac12$ | 绝对值函数最值结论正确；过程未完整提供 | 分点讨论后检查参数是否重合 |
| 2 | 8/8 | 正确，$\frac14$ | 概率答案正确，本卷未再出现路径漏重 | 概率式旁继续写清对应事件 |
| 3 | 8/8 | 正确，$2+\sqrt6$ | 圆上两点的最值处理正确；过程未完整提供 | 保留弦长约束的等号条件 |
| 4 | 0/8 | 未作答，正确答案 $-4$ | 未把二次递推式转成倒数的望远镜结构 | 见递推加求和，先除法找相邻倒数 |
| 5 | 8/8 | 正确，1 | 四面体体积比结论正确；过程未完整提供 | 体积比优先统一底面或高 |
| 6 | 0/8 | 未作答，正确答案 $\frac{\sqrt{39}}8$ | 未把边长等差条件经正弦定理转成角关系 | 边条件和角条件并存时先用正弦定理翻译 |
| 7 | 8/8 | 正确，1 | 复数乘积与相邻项模长处理正确；过程未完整提供 | 先化相邻项差，再取模 |
| 8 | 8/8 | 正确 | 参数 $a<1,a=1,a>1$ 的零点数分类完整 | 分类后继续检查临界参数 |
| 9 | 16/16 | 正确，$r_{\max}=\frac{2\sqrt3}{9}$ | 半角代换把几何最值降为 $t-t^3$，路线独立而简洁 | 写明 $t$ 的范围及等号点 |
| 10 | 20/20 | 正确 | 递减界迫使出现 0，再由周期尾项和最大公因数收束 | 证明中继续明确“为何必出现 0” |
| 11 | 20/20 | 正确 | 重心平移、面积解释与柯西不等式构成完整替代证明 | 明写平移不变性和循环下标 |

## 逐题分析

### 第 1 题：绝对值函数的最小值

- **结论**：正确，$a=-2$ 或 $a=-\frac12$。
- **作答定位**：材料只保留最终答案，且与参考答案一致；未提供完整分类过程，不能进一步判断每个折点是否都被显式检查。
- **关键思路**：绝对值和的最小值应围绕两个零点 $x=-1$ 与 $x=-1/a$ 分段，比较各段斜率并由最小值 $\frac32$ 反求参数。
- **根本错因**：本题无可确认错误，亮点是两个参数分支均未遗漏。
- **下次避免**：**看到两个一次式绝对值之和时，立即标出全部零点并按斜率变化定位最小值。**

### 第 2 题：盒中乒乓球的条件概率

- **结论**：正确，概率为 $\frac14$。
- **作答定位**：最终答案与参考答案一致，但材料未展示概率树或条件概率计算。
- **关键思路**：按球的转移结果分情况，并在每个分支中计算最终抽到红球的条件概率，再由全概率公式合并。
- **根本错因**：无可确认错误。尤其值得肯定的是，本卷没有复发此前“把有序路径当成一种无序情形”的计数问题。
- **下次避免**：**看到多阶段随机转移时，立即让每个概率乘积对应一条明确路径，最后检查分支概率和为 1。**

### 第 3 题：单位圆上的弦与距离和最值

- **结论**：正确，最大值为 $2+\sqrt6$。
- **作答定位**：答案正确；材料没有保留坐标化或几何放缩细节。
- **关键思路**：将 $|x_i+y_i-1|$ 解释为点到直线 $x+y-1=0$ 的距离的 $\sqrt2$ 倍，再结合单位圆及定长弦 $|AB|=1$ 控制弦的方向和中点位置。
- **根本错因**：无可确认错误；能同时处理圆约束和弦长约束是本题亮点。
- **下次避免**：**看到 $|ux+vy+w|$ 时，立即尝试距离解释；有定长弦时同时引入弦中点和方向。**

### 第 4 题：递推数列与交错望远镜求和

- **结论**：未作答。正确答案为 $\lfloor S_{2021}\rfloor=-4$。
- **作答定位**：卷面标注“不会做”，没有进行无依据猜测。卡点在没有从
  $$
  a_{n+1}^2-a_{n+1}=a_n
  $$
  中识别出可供 $b_n$ 使用的倒数恒等式。
- **关键思路**：由
  $$
  a_n=a_{n+1}(a_{n+1}-1)
  $$
  得
  $$
  \frac1{a_{n+1}-1}
  =\frac1{a_n}+\frac1{a_{n+1}}.
  $$
  注意 $b_1=-3$。对 $n\ge2$ 代入上式后，交错和的中间项全部抵消：
  $$
  S_{2021}
  =-3-\frac1{a_1}+\frac1{a_{2021}}
  =-\frac92+\frac1{a_{2021}}.
  $$
  由递推可证 $\frac23=a_1<a_n<2$ 且递增，因此
  $$
  \frac12<\frac1{a_{2021}}<\frac32,
  $$
  并且 $n\ge2$ 时 $a_n>1$，故实际上
  $$
  -4<S_{2021}< -\frac72,
  $$
  从而 $\lfloor S_{2021}\rfloor=-4$。
- **根本错因**：不是不会望远镜求和，而是递推式与目标式之间的“造倒数”转换没有启动。题目同时给出乘积型递推和 $1/(a_n-1)$，这两个结构本应互相提示。
- **下次避免**：**看到递推式含 $a_{n+1}(a_{n+1}-1)$，而求和项含 $1/(a_n-1)$ 时，立即对递推式取倒数并拆成相邻两项。**

### 第 5 题：棱锥中的四面体体积比

- **结论**：正确，答案为 1。
- **作答定位**：最终答案正确，材料未保留体积拆分过程。
- **关键思路**：体积比问题应优先寻找共底面、等高或行列式中可直接约去的公共因子，而不是分别计算每个体积。
- **根本错因**：无可确认错误；结论说明体积关系识别稳定。
- **下次避免**：**看到多个四面体体积之比时，立即先统一底面或高，再考虑坐标行列式。**

### 第 6 题：三角形边长等差与和差化积

- **结论**：未作答。正确答案为
  $$
  \sin(A+C)=\frac{\sqrt{39}}8.
  $$
- **作答定位**：卷面同样标注“不会做”。卡点不是三角恒等变换，而是没有把 $a,b,c$ 成等差数列转换成角的关系。
- **关键思路**：由 $a+c=2b$ 和正弦定理，得到
  $$
  \sin A+\sin C=2\sin B=2\sin(A+C).
  $$
  令
  $$
  u=\frac{A+C}{2},\qquad v=\frac{A-C}{2}.
  $$
  和差化积给出
  $$
  2\sin u\cos v=4\sin u\cos u,
  $$
  所以 $\cos v=2\cos u$。由于三角形为锐角三角形，$-\frac\pi2<A-C<\frac\pi2$；结合 $\sin(A-C)=\frac{\sqrt3}{2}$，只能有 $A-C=\frac\pi3$，即 $v=\frac\pi6$。于是
  $$
  \cos u=\frac{\sqrt3}{4},\qquad
  \sin u=\frac{\sqrt{13}}4,
  $$
  最终
  $$
  \sin(A+C)=\sin2u=2\sin u\cos u=\frac{\sqrt{39}}8.
  $$
- **根本错因**：题目同时给了边条件和角条件，却没有先使用正弦定理把两种语言统一；后续熟悉的和差化积因此没有入口。
- **下次避免**：**看到三角形中“边成等差/比例”与角的三角函数同时出现时，立即用正弦定理把所有边换成对应角的正弦。**

### 第 7 题：复数乘积与相邻项之差

- **结论**：正确，$|z_{2018}-z_{2019}|=1$。
- **作答定位**：答案与参考答案一致，具体乘积化简未展示。
- **关键思路**：先利用乘积定义写出相邻两项的公因子，再对剩余因子取模；避免直接展开高阶复数乘积。
- **根本错因**：无可确认错误，说明乘积结构与模长性质使用稳定。
- **下次避免**：**看到递推乘积的相邻项之差时，立即提取公共乘积，最后再用模的乘法性。**

### 第 8 题：指数函数与参数零点个数

- **结论**：正确：$a<1$ 时 1 个零点，$a=1$ 时 2 个零点，$a>1$ 时 3 个零点。
- **作答定位**：分类与参考答案完全一致，三个参数区间均已覆盖。
- **关键思路**：化简 $g(x)$ 后，通过导数、切线关系或图像交点数判断零点；$a=1$ 是必须单列的临界参数。
- **根本错因**：无错误。亮点是既找到了临界值，又没有把等号并入两侧区间。
- **下次避免**：**看到含参零点个数时，立即先找重根或切点对应的临界参数，再按临界值分区间。**

### 第 9 题：抛物线内接三角形的内切圆半径

- **结论**：正确，
  $$
  r_{\max}=\frac{2\sqrt3}{9},
  $$
  在 $P\left(\frac43,\frac{4\sqrt3}{3}\right)$ 处取得。
- **作答定位**：没有照搬官方坐标路线，而是使用半角代换 $t=\tan\frac\alpha2$，把内切圆半径化成对 $t-t^3$ 的单变量最值。
- **关键思路**：由 $r=\Delta/s$ 表示内切圆半径，再用半角参数统一边长和面积；在合法区间 $0<t<1$ 上求 $t-t^3$ 的最大值。
- **根本错因**：无错误。这是本卷最强的解题亮点之一：几何量被主动降维，且路线比直接求内心更短。
- **下次避免**：**看到三角形内切圆半径最值时，立即尝试 $r=\Delta/s$；若角关系集中，继续试半角代换。**

### 第 10 题：绝对差递推与最大公因数不变量

- **结论**：正确，证明了数列中有无穷多项等于 $k$。
- **作答定位**：反证后建立递减上界，迫使某项成为 0；随后识别尾部形如 $(0,l,l)$ 的周期，并由最大公因数不变量推出 $l=k$。
- **关键思路**：运算 $(x,y)\mapsto(y,|x-y|)$ 保持最大公因数。若长期不出现最小正值，就可让相邻项最大值按 $k$ 的整数倍持续下降，与非负性矛盾；出现 0 后，递推进入三周期。
- **根本错因**：无错误。论证同时抓住了单调下降机制和最大公因数不变量，结构完整。
- **下次避免**：**看到整数绝对差递推时，立即检查最大公因数不变量，并寻找能严格下降的非负整数势能。**

### 第 11 题：重心平移、面积与柯西不等式

- **结论**：正确，卷面方法可以接受，而且是完整的独立证明。
- **作答定位**：先把各点平移到重心坐标，再把循环行列式和解释为有向面积；对每个相邻向量行列式取绝对值，最后用柯西不等式控制相邻半径乘积。
- **关键思路**：循环和
  $$
  \sum_i(x_iy_{i+1}-x_{i+1}y_i)
  $$
  是多边形有向面积的两倍，故平移不变。中心化后记 $r_i^2=x_i'^2+y_i'^2$，则
  $$
  \left|x_i'y_{i+1}'-x_{i+1}'y_i'\right|\le r_ir_{i+1},
  $$
  且
  $$
  \sum_i r_ir_{i+1}
  \le\sqrt{\sum_i r_i^2\sum_i r_{i+1}^2}
  =\sum_i r_i^2,
  $$
  正好得到右端。
- **根本错因**：无错误。真正值得保留的是先确认平移不变性，再中心化，而不是仅凭图形直觉更换坐标原点。
- **下次避免**：**看到循环行列式和时，立即检查有向面积和平移不变性；中心化后用相邻向量模长配柯西。**

## 重复错因追踪

| 错因 | 本次题号 | 历史定位 | 次数与连续性 | 强制改进动作 |
| --- | --- | --- | --- | --- |
| 本次未发现有证据支持的重复错因 | 4、6 | 第 4 题的递推望远镜与既往已做对的递推题只属同类工具；第 6 题的边角转换没有明确历史失误记录 | 均按首次明确暴露处理，不虚构累计次数 | 两类各做 3 道入口训练，每题只先写“题设信号 → 第一转换式” |

需要同时记录一个积极变化：0819、0821 反复出现的“边界或分支未回收”和“长计算失控”在本卷没有复发；但一次未复发还不能说明问题已经永久解决，后续正式复盘仍需继续回查。

## 教练总结

1. **首要问题是转换入口未自动化。** 第 4 题看到“乘积型递推 + 倒数求和”必须先造相邻倒数；第 6 题看到“边条件 + 角条件”必须先用正弦定理统一语言。这两题都不是后续运算不会，而是第一步没启动。
2. **专项任务：每类 3 题，共 6 题。** 递推题只训练“因式分解、取倒数、拆相邻项”；三角题只训练“边长等差或比例、正弦定理、和差化积”。每题在完整解答前先单独写出触发器和第一式。
3. **下张卷的观察指标：** 保持本卷没有执行性失误的状态，同时在序列求和题旁主动写“能否望远镜”，在边角混合题旁主动写“先正弦定理”。若入口训练完成后仍在同类题空白，下次将按重复问题升级处理。

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

Fix a nonzero vector $d\in\{-1,0,1\}^n$, and let \(k\) be the number of its nonzero coordinates.
What we want to do is to Compute the following probability, and if it <1, then we can say that there exists a solution of A. Then we use this as the condition to derive the upper bound of $M(n)$.

Because there are $\binom nk2^k$ such $x$ with a fixed $k$, the total probability is

$$
\Pr\bigl(\exists\,0\ne x\in\{-1,0,1\}^n:Ad=0\bigr) \le \sum_{k=1}^n \binom nk2^k\,\Pr(Ad=0).
$$

For one random row $r$ of  $A$. 
$r\cdot d$ is the sum of $k$ independent random signs. Therefore (Which is we choose k numbers in {1,-1}, and a random row in A did so) To add: $k\le n$ because there may have 0 element in $x$.  
$$\Pr(r\cdot d=0)=

\begin{cases}  
0,&k\text{ odd},\\ 
\dfrac{\binom{k}{k/2}}{2^k},&k\text{ even}.  
\end{cases}  
$$To explain more: The whole sample space have $2^m$ in total, and we choose $k$ 1s, so there are $\binom{k}{k/2}$ possibilities to make the inner product 0.

Using the standard central-binomial estimate,
$$\frac{\binom{k}{k/2}}{2^k}\approx\frac1{\sqrt{k}}$$

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
#### For small \(k\), we use the simpler bound  
$\Pr(r\cdot d=0)\le\frac12\Rightarrow\Pr(Ad=0)\le 2^{-m}$
The number of such vectors is at most  
$$\sum_{k\le n/(\ln n)^2}\binom nk2^k  \le  \exp\left((1+o(1))\frac n{\ln n}\right)$$
How to Prove? I am so dumb!!!!! just $\binom nk\le n^k$
So then $$\sum_{k=1}^{n/(\ln n)^2} \binom nk2^k\,\Pr(Ax=0)\le c e^{n/\ln n}\cdot 2^{-m}\Rightarrow m\le c\frac{n}{\ln n} $$
#### For large \(k\),  $k>\frac n{(\ln n)^2}$,  

$$
\sum_{k=1}^{\lfloor n/(\ln n)^2\rfloor}\binom nk2^k  \le  \exp\left((1+o(1))\frac n{\ln n}\right).
$$

How to Prove? just $\binom nk\le n^k$

$$\sum_{k=1}^{\lfloor n/(\ln n)^2\rfloor}\binom nk2^k \le \sum_{k=1}^{\lfloor n/(\ln n)^2\rfloor}(2n)^k <(2n)^{n/(\ln n)^2}\ce{->[(n big)]}\exp\left( \ln 2n\cdot \frac{n}{(\ln n)^2} \right)=\exp\left((1+o(1))\frac n{\ln n}\right)$$


Thus, for sufficiently large \(n\),

$$
\sum_{k=1}^{\lfloor n/(\ln n)^2\rfloor} \binom nk2^k\,\Pr(Ax=0)\le c e^{n/\ln n}\cdot 2^{-m}=\exp\left((1+o(1))\frac n{\ln n}-m\cdot \ln2 \right)$$
Later we choose $m=C\frac{n}{\ln n}$, then $$\exp\left((1+o(1))\frac n{\ln n}-m\cdot \ln2 \right)=\exp\left((1+o(1)-C)\frac n{\ln n}\right)$$
So as we let $C=2$, we can get $\Pr_{\text{k small}}\to 0$ as $n$ grow.
#### For large \(k\),  $k>\frac n{(\ln n)^2}$,  

$\Pr(Ad=0)  \le  \left(\frac{\ln n}{\sqrt n}\right)^m$.  
So $$\Pr_{\text{k big}}\bigl(\exists\,0\ne x\in\{-1,0,1\}^n:Ad=0\bigr) \le \sum_{k=\lfloor n/(\ln n)^2\rfloor+1}^n \binom nk2^k\,\Pr(Ad=0)\le \left(\frac{\ln n}{\sqrt n}\right)^m\cdot 3^n $$
We choose $m=C\frac{n}{\ln n}$ 
Then $$\left(\frac{\ln n}{\sqrt n}\right)^m\cdot 3^n=\exp\left(C\frac{n}{\ln n}\cdot (\ln\ln n-\frac12 \ln n)+n\ln 3\right)=\exp\left( (C\frac{\ln\ln n}{\ln n}-\frac C2+\ln 3 )n\right)$$

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

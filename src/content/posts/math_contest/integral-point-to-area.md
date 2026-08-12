---
author: Chunbo Liu
title: Ideas that transforms from integral points into computing the area.
description: Some notes on the book
pubDatetime: 2026-08-12T13:46:56.313Z
modDatetime: 2026-08-12T13:46:56.313Z
tags:
  - math-contest
---

The first problem is this:
Suppose that $(a_1,b_1),\cdots,(a_n,b_n)$ are distinct pairs from positive integers. Prove that:

$$
(a_1+a_2+\cdots+a_n)(b_1+\cdots+b_n)>\frac29 n^3
$$

And actually, the coefficient $2/9$ is the best.

At the first time I see this problem, the weird coefficient really confuses me. Why is $2/9$ not others. I really need a convincing explanation.

So we can try to dive deeper here.

While natively, we want to find the minimum of the left hand side. So we'll start with this:

$$
(1,1),(1,2),(2,1),\cdots
$$

This is like the integral points under $x+y=k$ for some k, and actually this is a triangle.

Is it possible to go in this part? Let's try. While, We suppose that the first $n$ terms are points under $x+y\le k$, then $n$ is about $(\frac{k^2}{2})$.

So we can say that

$$
(a_1+\cdots a_n)=\int_T x dxdy=\int_0^{k}\int_0^{k-y}xdxdy=\frac12\int_0^k(k-y)^2dy=\frac16k^3
$$

Similarly,

$$
b_1+\cdots +b_n=\frac 16 k^3
$$

So the previous problem is like this:

$$
(a_1+a_2+\cdots+a_n)(b_1+\cdots+b_n)=\frac1{36}k^6=\frac29n^3
$$

But actually, it is approximated equal, and here comes the coefficient $\frac 29$

---

Here is another problem, which will be more surprising.

(2026 CGMO 1) We call $n$ is a good number if all of its prime factors is no more than $\sqrt n$. Prove that: there exists 2026 pairwise coprime good numbers, such that each of their differences are also good numbers

This problem itself is not a hard one. But we can think something more interesting, that what is the density of such good numbers?

We can do some basic trials: 4, 8, 9, 12, 16, ...
It won't be short.

We try to compute this normally. Actually, "bad numbers" are somehow easier to deal. $s=pm$, and $m\le p$ while p is a prime number.

We denote S as the total bad numbers in $1,\cdots,N$, then each number can be written as

$$
S\le\sum_{p\le N}\sum_{m\le p,m\le\frac Np} 1 = \sum_{p\le \sqrt N}p+\sum_{p>\sqrt N} \lfloor\frac Np\rfloor \le\sqrt N\cdot \pi(\sqrt N) + N \cdot (\pi (N)-\pi (\sqrt N))
$$

While here are some wide-known results:

$\sum_{p\le N} \frac 1p \approx \log\log N$.

$\pi (x) \approx x \log x$.

So here,

$$
\frac S{N}\le \log \sqrt N + \log\log N - \log \log \sqrt N
$$

which can be easily derived to be $1 - \log 2$.

Here is another idea, which can be generalized to count bad numbers.

$n = p_1^{\alpha _1}p_2^{\alpha _2}\cdots p_{k}^{\alpha _{k}} p_ {k+1}$ and $p_{k+1} > p_1^{\alpha _1}p_2^{\alpha _2}\cdots p_{k}^{\alpha _{k}}$. So we know that

$$
\log p_{k+1} > \alpha_1\log p_1+\alpha_2\log p_2+\cdots+\alpha_{k}\log p_{k}
$$

We can see this by set coordinates in $\mathbb{N}^{p-1}$ so that, we want find integral points $(\alpha_1,\alpha_2,\cdots,\alpha_{k})$, as we stated.

So similarly, we use the theory we stated before, expand to this.

$$
S((\alpha_1,\alpha_2,\cdots,\alpha_{k})) \le V_{k} = \frac{(\log p_{k+1})^k}{(k!)(\prod_{j=1}^k \log p_j)}
$$

We can generalize this form by this:

$\Psi (x,y):$ The biggest prime factor of $x$ is $\le y$. So in this problem, this is exactly : $\Psi(x,\sqrt x)$ (**Smooth Number**)

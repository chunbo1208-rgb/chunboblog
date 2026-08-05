---
author: Chunbo Liu
title: Gauss-Lucas' Theorem
description: Some ideas and topics on Gauss-
pubDatetime: 2026-08-05T11:01:19.484Z
modDatetime: 2026-08-05T11:01:19.484Z
tags: 
- math-contest
- complex-polynomial
---

## Explanation

The Gauss–Lucas' theorem says that for any complex polynomial $P$, the roots of the derivative $P'$ lie in the convex hull of the roots of $P$. In other words, the roots of $P'$ lie inside the smallest convex subset of the complex plane containing all the roots of P.

Here is a basic intuitive explanation: that we see each root of $P$ as a charged point, and each forms a electric field $\vec E$, what we are observing is the root of $P'$, which can be generally seen as the potential, for $\vec E=-\nabla V$, so the root of $P'$ is where $\vec E$ vanishes, then it can only happen inside the convex hull of the roots of $P$.

## Then How to prove seriously?
We suppose that $P(z)=\alpha (z-a_1)(z-a_2)\cdots(z-a_k)$, and suppose that $z_0$ is a root of $P'$.
- If $z_0$ is a root of $P$, then the hypothesis is trivial
- If not, we take that $$0=\frac{P'(z_0)}{P(z_0)}=\sum_{i=1}^k\frac{1}{z_0-a_i}=\sum_{i=1}^k\frac{\overline z_0-\overline a_i}{|z_0-a_i|^2}$$ So: $$z_0=\sum_{i=1}^k\frac{|z_0-a_i|^{-2}}{\sum_{j=1}^k |z_0-a_j|^{-2} }a_i$$ which we kow by each coefficient of $a_i$ sums up as 1 and each is positive, so $z_0\in$ the convex hull of all roots of $P$.

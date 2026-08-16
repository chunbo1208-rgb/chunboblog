---
author: Chunbo Liu
title: About Perfect Matching
description: The matching idea from 2024 CGMO 8
pubDatetime: 2026-08-15T15:39:33.992Z
modDatetime: 2026-08-16T16:35:17.496Z
draft: false
publishStatus: published
tags:
  - math-contest
language:
  - English
---

I'll state the the problem here:
## Main problem(2024 CGMO 8):
It is known that there are $2024$ pairs of friends among $100$ people. Show that is possible to split them into $50$ pairs so that:
(a) There are at most $20$ pairs that are friends with each other;
(b) There are at least $23$ pairs that are friends with each other;
(c) There are exactly $22$ pairs that are friends with each other.


Well we can do some basic derivations here: easily and naturally, we'll set the graph: $G(V,E)$ so that each people stands for a vertex and 2 are connected if and only if they are friends. There are totally 100 vertexes and 2025 edges.

So the problem has come to this:

Actually, there is such a definition fits this problem well, which is **perfect match**:n graph theory, a **perfect matching** is ==a set of edges where every vertex in the graph connects to exactly one edge==.

We can find a perfect matching, we can find at most 20 edges; more than 23 edges; exactly 22 edges.

Mathematically, for a perfect matching $M$, $r(M)=|M\cap E(G)|$, and we want $$r(M)\le20,\qquad r(M)\ge23,\qquad r(M)=22$$

### try to solve this at first
**About (1)**
We can use some basic derivations like this: Use probability.
$\Pr(e\in M)=1/99$ While, we say this in the situation of complete graph $K_{100}$, every edge is an independent one, thus we can know that $\mathbb{E}[r(M)]=2024/99<21$

The core here is that every edges in $K_{100}$ can be partitioned into 99 perfect matchings.

**About (2)**
This problem gives the feeling that in such a graph, the contradiction comes from "many" edges but "short" matches. We will try to figure this out.

Suppose there are at most 22 matches in whichever situation, then we can add some edges to make it into exactly 22 matches (which will simplify the prove, or just by convenience)

find the biggest matching, $G=A_{44}\cup B$ While A is the matching place, and B is the rest vertexes. Because the property of the biggest, then we know that there is no internal edges in set B, and $\#V_b = 56$, so there are at most $$\binom{44}{2}+44\times 56$$ Actually, this is so weak, we need some stronger forms here

Tried once: If the pair in A, they both have distinct neighbors in B, then We can turn into a larger matching. While in math, this is if $A_1-A_2$, and $A_1-B_1;A_2-B_2$, then we can turn the first case into the second one, the total number of matchings increases, contradiction. So it comes to $\binom{44}{2}+22\times 56$ However, this is still not enough.

Literally, I got stuck here, and I check the answer, there is something much inspiring:
If we denote the "good vertex", as if they have neighbors in B and $k$ is the total good vertexes numbers, then we can do something here.
Here are some properties of good vertex
- There can only be at most 1 vertex in a pair, so $k\le 22$
- If $A_1,A_2$ are good vertexes, then the pair points $A_1',A_2'$ can't be connected, or there will be a larger matching $A'_1-A_2',A_1-B_1,A_2-B_2$, Contradiction.
- For those who are not good vertex, their pair can only have 2 edges between A and B, which they all connect with one vertex
So we can get a more specific bound, there are at most $$\binom{44}{2}-\binom{k}{2}+2(22-k)+56k=22\times 23+\frac12k(109-k)\le 1947<2024$$
Contradiction Finally!

**About (3)**
We don't have much better ideas here, so we can only use adjustment to find an exact one.



### Erdős–Gallai’s matching extremal theorem: 
A classical theorem says that if an $N$-vertex graph contains no matching with $k+1$ edges, then$$|E(G)| \le \max\left\{ \binom{2k+1}{2}, \binom{k}{2}+k(N-k) \right\}$$

Equivalently,
$$\operatorname{ex}(N,(k+1)K_2) = \max\left\{ \binom{2k+1}{2}, \binom{k}{2}+k(N-k) \right\}$$

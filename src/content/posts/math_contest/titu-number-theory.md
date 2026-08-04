---
author: Chunbo Liu
title: Number Theory: Problem and Concepts
description: Some notes on the book 
pubDatetime: 2026-08-04T04:41:05.638Z
modDatetime: 2026-08-04T04:41:05.638Z
tags: 
- math-contest
- number-theory
---

## Table of Contents
## Problem Sets

### Chapter 2

#### [Example 2.34]

Is there a polynomial $f(x, y)$ in two variables, with integer coefficients and having the following properties:  
a) The equation $f(x, y) = 0$ has no integral solutions.  
b) For each positive integer n there are integers x, y such that $n | f(x, y)$?

**Solution:**

Actually "a" is easy to achieve, what we emphasize on is the "integral". The answer construct $f=(2x-1)(3y-1)$.  
And easy to prove that for any number, $(2x-1)$ decides the odd part, and $(3y-1)$ decides the even part.

**Something Deeper:**

To be finished

_This part shows that somewhere, multi variable have a strong and more freedom than expected properties in divisibility._

#### [Example 2.35]

( Turkey TST 2016) Find all functions $f : N \rightarrow N$ such that for all $m,n \geq 1$ we have $f(mn) = f(m)f(n)$ and $m+n | f(m) +f(n)$.

**My Experiences**

My mistake start from $m+1|f(m)-m$, and automatically think that $f(m)=(k+1)m+k$, but however, k is somewhere not stable, so this is a useless trial.

But how to make my idea more grown?

And I also fell into the second hole as I consider $f(p)$ which is confusing.

**Solution**

We know that if $f(1)=0$, then $\forall n\in\mathbf{N},f(n)=0$. So we suppose $f(1)=1$ below.

If $f(2)=(1+2r)2^m$, then we start by $1+2r|1+f(2)f(r)\Rightarrow 1+2r|1$, then we get that $f(2)=2^m$. Which indicates that f is the form of a power.

After 2, we need to expand to the whole $n$. We deduce that m,r are odd, then $2^r+n|2^{rm}+f(n)\Rightarrow 2^r+n|f(n)-n^m$, as we vary r, we get $f(n)=n^m$. _Note that here, we use the variable r is really important. We expect the result as which we want it have infinitely factors._

We need to establish that k is exactly odd by: $6|2^k+4^k$. If k is even, we have $2^k+4^k\equiv 2\pmod 6$ which indicates contradiction. _So don’t lose any occasions here._

**Generalizations:**

1. **Theorem (INMO 2017):** Find all functions $f : \mathbb{N} \to \mathbb{N}$ such that $f(mn) = f(m)f(n)$ and $m - n \mid f(m) - f(n)$ for all distinct $m, n \in \mathbb{N}$.
2. Weakening the multiplication to addition: change $f(mn) = f(m)f(n)$ to $f(m+n) = f(m) + f(n)$ (Cauchy's additive equation on $\mathbb{N}$)

$$  
p+q \mid f(p) + f(q) \quad \text{for all primes } p, q  
$$

[‎Google Gemini](https://gemini.google.com/app/c95c1117e7f8fd2a)

1. (IMO 1988) Let a, b be positive integers such that ab+ 1 divides  
    $a^2 + b^2$. Prove that $\frac{a^2+b^2}{ab+1}$ is a perfect square.
    
    [Vieta Jump] Very Typical nothing to say.
    
2. (IMO 2007) Let a,b be positive integers such that $4ab - 1 | (4a^2- 1)^2$. Prove that a = b.
    
    **Where I got stucked:** It is not easy to give ab automatically quadratic function, because normally, a will reserved as 3 or 4 times, and it’s hard. b is also unusable, because only 1 power.
    
    **Solution**
    
    While the solution use by some basic changing of the division line. As it is hard to directly use one, we need to use consequence: $\pmod {4ab-1}$. Then we get $4ab-1\mid (a-b)^2$. Then finished.
    

#### Remark 2.38

Here are a few very similar problems, all of which can be solved by the same argument:

- Positive integers a, b satisfy $ab | a^2 +b^2 + 1$. Prove that $a^2 + b^2 + 1 = 3ab$.
    
    _I am curious about one thing. In this form, we can easily get that $a^2-kab+b^2+1=0$. Then if we suppose that $a>b$(While definitely $a\not=b$), we will have $a_1a_2=b^2+1\Rightarrow a'=\frac{b^2+1}{a}<a$, And then contradiction, where the 3 comes? In other word, I am not fully understand this form._
    
    Find the contradiction part by computing a symmetric quantity $a+b$. Then we know that $\frac{b^2+1}{a}>a\Rightarrow b^2+1>a^2>b^2+2b+1$ **Contradiction**!
    
- Let a,b be positive integers such that $a^2 + b^2$ is divisible by $ab - 1$. Prove  
    that $\frac{a^2+b^2}{ab-1}$ = 5.
    
    The main logic is from that when $a=b$, there will be contradiction, and if $a>b$, and $b>1$, we can find $a'<b<a$, which $k:=\frac{a^2+b^2}{ab-1}$ is steady.
    
    and when $b=1$, possible to find that $a=2,3$, then k is all 5.
    
- (AMM 11374) Let a, b, c, d be positive integers such that $abcd=a^2+b^2+c^2+1$.  
    Prove that d = 4.
    
    Local value of the quadratic function. Generalize it by $abcdt=a^2+b^2+c^2+d^2$, we construct that $f(x)=x^2-bcdtx+b^2+c^2+d^2$, by the minimalize, we know that $x'\geq x=a\ge b\ge c\ge d$. Use the condition that $f(b)\ge0$, we have $t\le \dfrac{2b^2+c^2+d^2}{bcd}\le 4$
    
    Then we try that if $d=1,2,3$ and try to find the contradictions.
    
- (USA TST 2002) Find all ordered pairs of positive integers (m, n) such  
    that mn — 1 divides $m^2 + n^2$.
    
    $m^2 - 5mn + n^2 + 5 = 0$ Every single solution $(m, n)$ to this equation can be reached by starting at the base cases ($n=1$) and "jumping" upwards using the Vieta recurrence relation:$m_{\text{new}} = 5n - m$
    
    The sequence $u_i$ defined by $u_0 = 1, u_1 = 2,$ and **$u_{i+1} = 5u_i - u_{i-1}$**:$\{(2, 1), (9, 2), (43, 9), (206, 43), \dots\}$ The sequence $v_i$ defined by $v_0 = 1, v_1 = 3,$ and **$v_{i+1} = 5v_i - v_{i-1}$**:$\{(3, 1), (14, 3), (67, 14), (321, 67), \dots\}$
    
- (USA TST 2009) Find all pairs of positive integers (m, n) such that  
    mn — 1 divides $(n^2 - n + 1)^2$.
    
    I find that after executing, I get $mn-1|n^2-2n+m^2-2m-2$, which shows that m and n are symmetric.
    
    - If m=n I tried and found that $n^2-1|4n$, by the order and basic trial, I found that $(2,2)$ is formed.
        
    - Now suppose that n>m, we have that if $m\ge 3$, we have $n^2-2n+m^2-2m-2-kmn+k=0$. So
        
        $$  
        \begin{cases}  
        n_1+n_2=2+km\\  
        n_1n_2=m^2-2m-2+k  
        \end{cases}  
        $$
        
    
    Afterwards, we suppose n is min, so
    
    $$  
    2+km>2m\Rightarrow k\ge 2 \text{ or }k=1,m=1(wrong!)  
    $$
    
    Also $k>2m+2$
    
    Also, however,
    
    $$  
    f(m)=2m^2-4m-2-km^2+k>0\Rightarrow k<2-\frac{4m}{m^2-1}\Rightarrow k=1  
    $$
    
    Definitely comtradiction!
    
    If m=2, $2n-1|n^2-2n-2$ Contradiction
    
    If m=1, $n-1|n^2-2n-3$ Contradiction!
    
    - Ohhhh I am wrong!!!
        
        Your approach is quite good in spirit: you found the right hidden symmetry and you are trying to use Vieta jumping. But there is one important algebra slip, and it changes the answer.
        
        The symmetric divisor should be
        
        \[  
        mn-1\mid m^2+n^2-2m-2n+3,  
        \]
        
        not with \(-2\). That \(+3\) is crucial. For example, \((2,5)\) is a solution:
        
        \[  
        mn-1=9,\qquad (5^2-5+1)^2=21^2=441,  
        \]
        
        and \(9\mid 441\). So the answer is not only \((2,2)\).
        
        The full answer is
        
        \[  
        \boxed{(2,2)}  
        \]
        
        and
        
        \[  
        \boxed{(m,n)=\left(k^2+1,(k+1)^2+1\right)}  
        \]
        
        or the reverse pair, for every integer \(k\ge 0\). So the first few are
        
        \[  
        (1,2),(2,1),(2,2),(2,5),(5,2),(5,10),(10,5),\dots  
        \]
        
        The clean Vieta-jumping structure is this. From the original condition, one can prove
        
        \[  
        mn-1\mid m^2+n^2-2m-2n+3.  
        \]
        
        So write
        
        \[  
        m^2+n^2-2m-2n+3=k(mn-1).  
        \]
        
        As a quadratic in \(n\),
        
        \[  
        n^2-(km+2)n+(m^2-2m+3+k)=0.  
        \]
        
        If \(n\) is one root, let the other root be \(n'\). Then
        
        \[  
        n+n'=km+2,  
        \]\[  
        nn'=m^2-2m+3+k.  
        \]
        
        The key jump is that
        
        \[  
        (mn-1)(mn'-1)=(m^2-m+1)^2.  
        \]
        
        So if \((m,n)\) is a solution, then \((m,n')\) is also a solution. For \(n>m\ge 2\), this gives a smaller positive solution with
        
        \[  
        0<n'<m.  
        \]
        
        Thus repeated jumping eventually reaches the base cases. The base cases are:
        
        - if \(m=1\), then \(n=2\);
        - if \(m=n\), then \(m=n=2\).
        
        For non-diagonal solutions the jump eventually reaches \((1,2)\), and in those cases \(k=2\). Then the recurrence becomes
        
        \[  
        n'=2m+2-n.  
        \]
        
        Reversing the jump gives
        
        \[  
        a_{r+1}=2a_r+2-a_{r-1},  
        \]
        
        starting from
        
        \[  
        a_0=1,\qquad a_1=2.  
        \]
        
        This solves to
        
        \[  
        a_r=r^2+1.  
        \]
        
        So the non-diagonal solutions are exactly consecutive terms:
        
        \[  
        (a_r,a_{r+1})=\left(r^2+1,(r+1)^2+1\right),  
        \]
        
        plus their reverses.
        
        So: your idea is definitely on the right track, but the constant error in the symmetric expression made the later contradiction false. The problem actually has an infinite family.
        
    
    Then how to avoid wrong: test a little to make sure I am right, it should be $mn-1|n^2-2n+m^2-2m+3$
    
- (Hurwitz) The equation $x_1^2+x_2^2+\cdots+x_n^2=kx_1x_2\cdots x_n$ has no solutions in positive integers if k > n.
    
    Similar to the previous one.
    

[Let $a, b, c, d$ be positive integers such that $abcd=a^2+b^2+c^2+1$. Prove that $d = 4.$](https://math.stackexchange.com/questions/5121404/let-a-b-c-d-be-positive-integers-such-that-abcd-a2b2c21-prove-that)

#### Example 2.39

(Kvant) Let p and q be integers greater than 1. Assume that $p|q^3—1$ and $q|p—1$.Prove that $p=q^{3/2}+1$ or $p=q^2+q+1$.

The main logic is to decrease the power.

suppose $p=qn+1$, we have $qn+1|q^3-1$, so actually we have $qn+1|q-n^2$ and $qn+1|q^2+n$.

- $q=n^2$, $p=q^{3/2}+1$
- $q<n^2$, $n^2-q\ge qn+1\Rightarrow n\ge q+1$. Later on, we can find that $qn+1=q^2+n$, so we have $p=q^2+q+1$.

#### Example 2.40

(Bulgaria) Let a, b and c be positive integers such that $ab | c(c^2 - c + 1)$ and $c^2 + 1|a+b$. Prove that the sets {a, b} and {c, $c^2 — c + 1$} coincide.

$mab=c(c^2—c+1)<c(c^2+1)=\frac{c}{n}(a+b)\le \frac{2c}{n}a\Rightarrow b<\frac{2c}{mn}$

Because $mab\equiv -mb^2\equiv -c^2\equiv 1 \pmod{c^2+1}$

So $mb^2+1\ge c^2+1$, which indicates that $mb^2\ge c^2$

only need to try several situations then done.

#### Example 2.42

(Romania TST 2012) Let $a_1, ..., a_n$ be positive integers and let  
$a > 1$ be a multiple of $a_1 . . . a_n$. Prove that $a^{n+1}+ a — 1$ is not divisible by  
$(a+a_1 — 1)(a+a_2— 1)...(a+a_n—1)$.

Firstly, we can supposed that all of the $a_i\ge 2$, if there exist 1, then the final proof can start with ignoring them.

Suppose that $a=ma_1...a_n$ and $a^{n+1}+a-1 = k(a+a_1 — 1)(a+a_2— 1)...(a+a_n—1)$, so we have that $k\equiv m\pmod{a-1}$.

Since $a^{n+1}+a-1\ge k(a+1)^n$, so $k<a$, so $k=m$, and so we have $m|a^{n+1}-a+1$, thus $m=k=1$.

$$  
a^{n+1}>(a+a_1 — 1)(a+a_2— 1)...(a+a_n—1)\Rightarrow a>(\frac{a+a_1 — 1}{a})(\frac{a+a_2— 1}{a})...(\frac{a+a_n—1}{a})>a_1...a_n=a  
$$

Contradiction!

#### Example 2.43

(Schinzel) Prove that there exists a constant $c > 0$ with the following property: if a positive integer $a$ is even and not a multiple of 10, then the sum of the digits of $a^k$ is greater than $c\log k$ for all $k\ge 2$.

_**The Idea of Partition: Quite impressive, that dividing the whole $a^k$ structure into different part so that every part have at least one number and sufficient to prove the lower bound.**_

_**Actually, I felt this really impress me, the combinatoric techniques and the constructing orders. I want to make more like this.**_

We will construct a geometric sequence ${b_n}$ that $b_n=cb_{n-1}$, so that $b_n=c^n$(c which will be decided later). So $n=\log_cb_n$, what we do next is to prove that the sum of number is n level and $b_n$ is k level.

Suppose $b_n\le k<b_{n+1}$ and $a^k=n_0+n_1\times 10+\cdots$ . What we ant to show is that

Because $2^{b_{j}}|a^k ,2^{b_j}|n_{b_j}\times 10^{b_j}+\cdots$, so $2^{b_j}|n_0+n_1\times 10+\cdots n_{b_j-1}\times 10^{b_j-1}$

If from $b_{j-1}$ to $b_j-1$, all of $n$ is 0 and because $n_0\not = 0$, so we know that $2^{b_j}<10^{b_{j-1}}$. Because we don’t want that happen, we let $2^{b_j}\ge 10^{b_{j-1}}$ just let $c=1+\log 2$.

Then we know that sum of numbers is at least $n-1$.

#### Example 2.49

Define a sequence $\{a_n\}$ by setting $a_1 = 2$ and $a_{n+1} = 2^{a_n} +2$ for $n\ge 1$. Prove that $a_n$ divides $a_{n+1}$ for all n.

prove by induction that $a_n$ divides $a_{n+1}$ and that $a_n — 1$ divides $a_{n+1} — 1$ for all $n \ge 1$.

#### Example 2.50

(China 2004) Prove that every positive integer n, except a finite number of them, can be represented as a sum of 2004 positive integers: $n = a_1+a_2+\cdots+a_{2004}$, where $1 \le a_1 < a_2 <\cdots < a_{2004}$, and $a_i|a_{i+1}$ for all $1 \le i \le 2003$.

_First is to think the induction on “2004”. But I simply think that just add M to 2M+1 is enough, but it can’t describe an even number. So I need something more. But If I just use 2M+2, it contradicts with $a_1>a_2$._

Use $2^r(2m+1)$ to describe a number. Just a little deeper: If m>M, then 2m+1 is possible. If $2^r> 2M^2$, then we know whether $2^r=2\cdot2^{2q}$ or $2^r=2^{2q}$, we get $2^q>M$. So $2^{2q}-1=(2^q-1)(2^q+1)$, thus proved. Just let $M_{n+1}=2M^2(2M+1)$.

### 2.2.2 Arithmetic of binomial coefficients

#### Example 2.51 (Gaussian binomial coefficient)

Let q be an integer greater than 1. If n,k are nonnegative integers, define the Gaussian binomial coefficient $\binom{n}{k}_q$ by $\binom{n}{k}_q=0$ for k > n and, if $k \le n$

$$  
\binom{n}{k}_q=\frac{(q^n — 1)(q^{n-1} - 1)\cdots(q^{n-k+1} - 1)}{(q^{k} - 1)(q^{k-1} - 1)\cdots(q — 1)}  
$$

where by convention the right-hand side equals 1 when k = 0. (_We can see that the normal binomial is when q=1_)  
a) Prove that for all $n, k \ge 1$ we have

$$  
\binom{n}{k}_q=q^k\binom{n-1}{k}_q+\binom{n-1}{k-1}_q  
$$

b) Prove that $\binom{n}{k}_q$ is an integer for all n, k. _Strong induction on n+k_


---
author: Chunbo Liu
title: How to Describe Rotations?
description: A brief derivation on quantum mechanics and chemistry, which talk about why allene is not stable as an organic chemistry substance.
pubDatetime: 2026-06-23T11:45:55.959Z
modDatetime: 2026-06-23T13:46:57.387Z
tags: 
- classical mechanics
---

# The main part
## Angular Momentum
We start with defining the angular momentum:
>[!Note]Angular momentum
$$\vec{L} = \vec{r} \times \vec{p}$$

I mean actually where we start is quite logic, because Newton used to use just the momentum to describe linear motions, which is the famous law.
>[!Note]
$$\vec{F}=\frac{d\vec{P}}{dt}$$

Here are some problems to think, why we use cross dot, and why this form by producting the radius can describe the angular motion.

In a brief way, we already know that moment which variables $m,v$ definitely influences the angular momentum. 

We will try to form a rotation. Now imagine that there is a stick, if you hold on one side, as your friend holds another side, and you two push it on different sidein the same force. By Newton's Third Law (Actually, your initiative tuition) the stick should be stayed.

It did stay, actually no displacement, but also it rotates. Then what's the difference between it and you two push it at one point. The displacements, exactly the displacements from the central.

Yours is $\vec{r}$ and your friend's is $-\vec{r}$. So in fact, the distance influences the momentum. But the direction of forces and the direction of the displacements are perpendicular, so we use cross dot.

In a more general form: $$\vec{L}=\int \vec{r}\times \vec{v}dm $$
## Torque
So as Newton did, we need to describe why $L$ causes, so we apply **torque** as
>[!Note]Torque
$$\vec{\tau} = \frac{d\vec{L}}{dt}= m\dot{\vec{r}}\times \vec{v}+ m\vec{r}\times\dot{\vec{v}}= \vec{r}\times\vec{F} $$

## Moment of Inertia
To make the "angular system" more pure, we also apply the angular velocity for convenience. If we use polar coordinate system, it is easily to be seen as $\omega = \dot{\theta}$ and when we know that $\vec{v}=\vec{r}\times\vec{\omega} $

We want to write angular momentum in the form as $\vec{P} = m\vec{v} $, so we put our angular velocity into the definition of angular momentum, and we get that $$\vec{L}= m\vec{r}\times\vec{v} = mr^2 \vec\omega : =  I \vec\omega$$

We call $I$ as the Moment of Inertia, and you can just see it as a mass in angular system, and in a more general form

>[!Note]Moment of inertia
$$I = \int R^2 dm $$


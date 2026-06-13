---
author: Chunbo Liu
title: 为什么联烯不稳定？
description: A brief derivation on quantum mechanics and chemistry, which talk about why allene is not stable as an organic chemistry substance.
pubDatetime: 2026-06-13T11:18:39.776Z
modDatetime: 2026-06-13T11:18:39.776Z
tags: 
- quantum mechanics
- organic chemistry
---

英文版：[Why allene is not stable?](/posts/physics/why-allene-is-not-stable/)

这篇文章，我打算从“我感兴趣”的方式，解释为什么联烯(Allene) 不稳定。

联烯，就是在有机分子中一个碳原子连接两个双键。最简单的，可以写成这个形式。

$$CH_2=C=CH_2$$

但是凭我们的直觉可以推测出来，这种东西大概率是不稳定的，但是严谨的来讲，这是为什么呢？

其实本质上，分子式为$C_3H_4$的同分异构体，更优的选择应该是丙炔，即

$$ CH\equiv C-CH_3$$

所以我们可以猜测，大概率所谓的$CH_2=C=CH_2$ 会在自然条件下变成$ CH\equiv C-CH_3$。

其实本质上化学键就是电子的一种行为。而稳定的状态，就是能量最低的一种构造。相当于，能量是一个三维函数，我们找到局部最低点，就相当于找到了我们要的那个结论。所以，只要

$$E_{联烯}<E_{丙炔}$$

那我们的工作就结束了。所以只剩下我们应该如何计算能量这一个问题了。

# 从经典力学出发

$$E=T(动能)+V(势能)$$ 

所以我们可以猜测：我们大概也可以在量子的情况下定义能量，而且也大概是这种形式。

事实上，Einstain 和 De Brologe 分别定义了量子条件下的动能和动量，最终总结为波函数的形式，就是这样的：

$$\psi(x,t) = Ae^{\frac{1}{\hbar}(px-Et)} $$

对$x$求偏导，就得到了

$$\frac{\partial \psi}{\partial x} = \frac{i}{\hbar} p \cdot \left[ A e^{\frac{i}{\hbar}(px - Et)} \right] = \frac{i}{\hbar} p \psi $$

得到

$$-i\hbar \frac{\partial \psi}{\partial x} = p \psi$$ 

即 

$$\underbrace{\left( -i\hbar \frac{\partial}{\partial x} \right)}_{\text{A Differential Operation}} \psi = \underbrace{p}_{\text{A Scalar Number}} \psi$$ 

这个很像是一种算符，可以总结为 $$\hat{p} = -i\hbar \frac{\partial}{\partial x}$$

类似的对时间求偏导也可以得到 $$\hat{E} = i\hbar \frac{\partial}{\partial t}$$

带回 $$E=\frac{p^2}{2m} + V$$ 得到 Schrödinger Equation：

$$i\hbar \frac{\partial}{\partial t}\psi(x,t) = \left[ -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x) \right]\psi(x,t)$$

如果定义 $$\hat{H} = -\frac{\hbar^2}{2m} \nabla^2 + V(r)$$

就能写成 

$$\hat{H}\psi=E\psi$$ 

这样我们就只需要求这个方程的本征值，就是我们要求的能量了。

# 数学求解 和一些近似
## Born-Oppenheimer Approximation
质子比电子大很多，所以计算能量变化时，就不考虑质子，只考虑电子。

## Mean Field Approximation
每个电子都在其他电子场中的平均场中运动。

## 开始推导
对于一个拥有 $N$ 个电子的系统，其严密的量子力学哈密顿算符为：

$$\hat{H} = \sum_{i=1}^{N} \left( -\frac{\hbar^2}{2m_e} \nabla_i^2 \right) - \sum_{i=1}^{N} \sum_{A=1}^{M} \frac{Z_A e^2}{4\pi\varepsilon_0 r_{iA}} + \sum_{i<j}^{N} \frac{e^2}{4\pi\varepsilon_0 r_{ij}}$$

为了让数学物理结构更清晰，我们通常采用原子单位制（Atomic Units），令 $\hbar = m_e = e = 4\pi\varepsilon_0 = 1$。
此时算符简化为：

$$\hat{H} = \underbrace{\sum_{i=1}^{N} -\frac{1}{2} \nabla_i^2}_{T_e: \text{电子动能项}} - \underbrace{\sum_{i=1}^{N} \sum_{A=1}^{M} \frac{Z_A}{r_{iA}}}_{V_{en}: \text{电子和质子的库仑力势能}} + \underbrace{\sum_{i<j}^{N} \frac{1}{r_{ij}}}_{V_{ee}: \text{电子排斥势能}}$$

其中 $\nabla_i^2 = \frac{\partial^2}{\partial x_i^2} + \frac{\partial^2}{\partial y_i^2} + \frac{\partial^2}{\partial z_i^2}$ 是拉普拉斯算符（度量波函数的空间曲率，即动能）。

我们要求解的，就是这个偏微分方程的本征值问题：$$\hat{H} \Psi(\mathbf{r}_1, \mathbf{r}_2, \dots, \mathbf{r}_N) = E \Psi(\mathbf{r}_1, \mathbf{r}_2, \dots, \mathbf{r}_N)$$第二步：数学上的困境与单电子近似在微分方程中，第三项 $V_{ee} = \sum \frac{1}{r_{ij}}$ 是一个非齐次耦合项。它意味着电子 $i$ 的运动和电子 $j$ 的运动纠缠在一起（多体问题）。在数学上，只要 $N \ge 2$，这个方程就不存在解析解。

为了进行严密的推导，物理学家引入了**平均场近似**（Mean Field Approximation）：假设每个电子都在其余电子产生的“平均静电势场” $V_{eff}(\mathbf{r})$ 中独立运动。这样，多电子的哈密顿算符就可以拆分为 $N$ 个严格独立的单电子哈密顿算符之和：$$\hat{H} \approx \sum_{i=1}^{N} \hat{h}_i, \quad \text{其中} \quad \hat{h}_i = -\frac{1}{2}\nabla_i^2 + V_{eff}(\mathbf{r}_i)$$此时，多电子总波函数可以写成单电子波函数 $\psi_k(\mathbf{r})$（即分子轨道）的乘积（为了满足费米子反对称性，严密形式为斯莱特行列式，我们先关注单电子形式）。单电子偏微分方程为：$$\hat{h} \psi_k = \varepsilon_k \psi_k$$系统的总能量，就是所有被占用的单电子能级之和：$E = \sum \varepsilon_k$。

解决单函数的偏微分方程 $\hat{h} \psi_k = \varepsilon_k \psi_k$ 根据经典微积分中求解复杂边界微分方程的方法，我们通常采用里茨变分法（Ritz Variational Method）。我们将未知的分子轨道波函数 $\psi_k$ 展开为一组已知的、单原子孤立波函数 $\chi_\mu$（原子轨道，如碳原子的 $2s, 2p_x, 2p_y, 2p_z$）的线性组合：$$\psi_k = \sum_{\mu=1}^{n} c_{\mu k} \chi_\mu$$这里，$\chi_\mu$ 是已知的基函数（通常是已知的解析函数，如高斯函数），$c_{\mu k}$ 是待求的未知复系数。现在，我们将求取微分方程解的问题，严格转化为求未知系数 $c_{\mu k}$ 使得系统能量泛函取得极小值的数学问题。
根据变分原理，单电子能量的泛函（Rayleigh 商）为：

$$\varepsilon = \frac{\langle \psi | \hat{h} | \psi \rangle}{\langle \psi | \psi \rangle} = \frac{\int \psi^* \hat{h} \psi \,d\tau}{\int \psi^* \psi \,d\tau}$$

将展开式 $\psi = \sum_\mu c_\mu \chi_\mu$ 代入上式：

$$\varepsilon = \frac{\sum_{\mu} \sum_{\nu} c_\mu^* c_\nu \int \chi_\mu^* \hat{h} \chi_\nu \,d\tau}{\sum_{\mu} \sum_{\nu} c_\mu^* c_\nu \int \chi_\mu^* \chi_\nu \,d\tau}$$

为了书写严密，我们定义两个矩阵元：

1. 哈密顿矩阵元（矩阵核心）： $H_{\mu\nu} = \int \chi_\mu^* \hat{h} \chi_\nu \,d\tau$ （代表轨道间的能量耦合）

2. 重叠积分矩阵元（最后可以约化为单位矩阵）： $S_{\mu\nu} = \int \chi_\mu^* \chi_\nu \,d\tau$ （代表轨道在空间中的几何重叠体积）

于是能量可以写为：$$\varepsilon \sum_{\mu\nu} c_\mu^* c_\nu S_{\mu\nu} = \sum_{\mu\nu} c_\mu^* c_\nu H_{\mu\nu}$$

为了找到使能量 $\varepsilon$ 最小的系数，我们需要对每一个系数 $c_i^*$ 求偏导数，并令其等于 $0$（求极值点）：

$$\frac{\partial \varepsilon}{\partial c_i^*} = 0 \quad (i = 1, 2, \dots, n)$$

对上式两边关于 $c_i^*$ 求偏导（注意 $\varepsilon$ 也是 $c_i^*$ 的隐函数）：

$$\frac{\partial \varepsilon}{\partial c_i^*} \sum_{\mu\nu} c_\mu^* c_\nu S_{\mu\nu} + \varepsilon \sum_{\nu} c_\nu S_{i\nu} = \sum_{\nu} c_\nu H_{i\nu}$$

因为在极值点 $\frac{\partial \varepsilon}{\partial c_i^*} = 0$，所以左边第一项消失，消去后得到：

$$\sum_{\nu} (H_{i\nu} - \varepsilon S_{i\nu}) c_\nu = 0 \quad (i = 1, 2, \dots, n)$$

这是一个关于系数 $c_\nu$ 的齐次线性方程组。在代数学中，该方程组有非零解的充要条件是其系数行列式为零。这就推导出了量子化学中著名的久期方程（Secular Equation）$$\det(\mathbf{H} - \varepsilon \mathbf{S}) = 0$$ 也就是：$$\begin{vmatrix} 
H_{11} - \varepsilon S_{11} & H_{12} - \varepsilon S_{12} & \cdots & H_{1n} - \varepsilon S_{1n} \\
H_{21} - \varepsilon S_{21} & H_{22} - \varepsilon S_{22} & \cdots & H_{2n} - \varepsilon S_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
H_{n1} - \varepsilon S_{n1} & H_{n2} - \varepsilon S_{n2} & \cdots & H_{nn} - \varepsilon S_{nn}
\end{vmatrix} = 0$$

通过求解这个行列式方程，我们就能得到一系列的能量本征值 $\varepsilon_1, \varepsilon_2, \dots$。 这样一来整个问题就变成了一个比较基本的线性代数问题。

# 计算丙炔和联烯的能量
根据前面对矩阵元的物理定义，我们设定以下统一的数学边界条件（参数）：
- 重叠积分简化：假设不同原子的基函数在空间重叠极小，令 $S_{\mu\nu} = \delta_{\mu\nu}$（即当 $\mu = \nu$ 时 $S=1$，$\mu \neq \nu$ 时 $S=0$）。于是久期方程简化为标准的特征值问题：$\det(\mathbf{H} - \varepsilon \mathbf{I}) = 0$。
- 库仑积分（势能项）：令碳原子的纯 $p$ 轨道能量 $H_{\mu\mu} = \alpha$（通常为负值，代表电子在核势场中的束缚能）。
- 共振积分（动力学耦合项）：若两个碳原子的 $p$ 轨道在空间邻近且平行，电子可以隧穿，则其耦合能 $H_{\mu\nu} = \beta$（$\beta < 0$，其绝对值代表键的强度）。若轨道相互正交或相隔很远，则 $H_{\mu\nu} = 0$
---
## 联烯
将联烯的三个碳原子 $C_1 - C_2 - C_3$ 沿 $z$ 轴排列。中心碳原子 $C_2$ 的 $\sigma$ 骨架呈线性（键角 180°）。为了同时向两侧成键，它必须拿出两个互相正交的 $p$ 轨道：$|p_x\rangle_2$ 和 $|p_y\rangle_2$。左侧 $C_1$ 端的氢原子处于 $xz$ 平面，为了形成 $\pi$ 键，$C_1$ 只能在垂直的 $x$ 方向提供 $|p_x\rangle_1$。右侧 $C_3$ 端的氢原子处于 $yz$ 平面，同理，$C_3$ 只能在 $y$ 方向提供 $|p_y\rangle_3$。我们在由 $\{|p_x\rangle_1, |p_x\rangle_2, |p_y\rangle_2, |p_y\rangle_3\}$ 组成的 4 维希尔伯特空间中写出哈密顿矩阵 $\mathbf{H}_{\text{allene}}$。

利用我们在前面证明的空间正交性微积分结论：
- $C_1$ 的 $p_x$ 与 $C_2$ 的 $p_x$ 邻近且平行 $\implies H_{12} = \beta$ 
- $C_3$ 的 $p_y$ 与 $C_2$ 的 $p_y$ 邻近且平行 $\implies H_{34} = \beta$

所有的 $x$ 轨道与 $y$ 轨道之间严格正交 $\implies \int \psi_x^* \hat{h} \psi_y \,d\tau = 0$得到联烯的 4×4 哈密顿矩阵：$$\mathbf{H}_{\text{allene}} = 
\begin{pmatrix} 
\alpha & \beta & 0 & 0 \\ 
\beta & \alpha & 0 & 0 \\ 
0 & 0 & \alpha & \beta \\ 
0 & 0 & \beta & \alpha 
\end{pmatrix}$$

要求解 $\det(\mathbf{H} - \varepsilon \mathbf{I}) = 0$，即：$$\begin{vmatrix} 
\alpha - \varepsilon & \beta & 0 & 0 \\ 
\beta & \alpha - \varepsilon & 0 & 0 \\ 
0 & 0 & \alpha - \varepsilon & \beta \\ 
0 & 0 & \beta & \alpha - \varepsilon 
\end{vmatrix} = 0$$

这是一个分块对角矩阵。根据线性代数性质，分块对角矩阵的行列式等于各对角子块行列式的乘积：$$\begin{vmatrix} \alpha - \varepsilon & \beta \\ \beta & \alpha - \varepsilon \end{vmatrix} \times \begin{vmatrix} \alpha - \varepsilon & \beta \\ \beta & \alpha - \varepsilon \end{vmatrix} = 0$$

解单个 2×2 子块方程：$(\alpha - \varepsilon)^2 - \beta^2 = 0 \implies \varepsilon = \alpha \pm \beta$。

所以我们得到了两对成对的解（简并态）：$\varepsilon_1 = \alpha + \beta$ （成键轨道，简并度 2）$\varepsilon_2 = \alpha - \beta$ （反键轨道，简并度 2）

### 计算联烯总能量
联烯一共有 4 个 $\pi$ 电子。根据泡利不相容原理，4 个电子会填入能量最低的两个成键轨道中：$$E_{\pi}(\text{Allene}) = 2 \times (\alpha + \beta) + 2 \times (\alpha + \beta) = 4\alpha + 4\beta$$

## 丙炔（Propyne）
现在我们来看联烯的同分异构体丙炔（$CH_3 - C \equiv CH$）。丙炔包含一个 $C_1 \equiv C_2$ 三键和一个 $sp^3$ 杂化的 $C_3$ 甲基。

超共轭（Hyperconjugation）三键 $C_1 \equiv C_2$ 在空间上拥有两个互相垂直的 $\pi$ 键：一个在 $x$ 方向（$\pi_x$），一个在 $y$ 方向（$\pi_y$）。$\pi_x$ 键：由于侧面的 $C_3$ 甲基上 $C-H$ 键的电子云可以通过空间重叠，与该方向的 $p$ 轨道发生微积分意义上的非零重叠，从而形成离域的超共轭体系。$\pi_y$ 键：保持完全定域。因此，丙炔的能量由两部分组成：孤立定域的 $\pi_y$ 键能量：等同于一个标准的双键能量 $= 2\alpha + 2\beta$。参与超共轭的 $\pi_x$ 三中心体系。我们对这个三中心体系进行矩阵构建。根据量子化学标准参数化（将甲基作为一个伪原子处理）：$C_1$ 轨道能量为 $\alpha$。$C_2$ 轨道能量为 $\alpha$。甲基的准 $p$ 轨道由于氢原子的电负性较低，其势能偏高，令 $\alpha_{\text{Me}} = \alpha - 0.5\beta$（记住 $\beta < 0$，所以这代表能量更高）。$C_1$ 与 $C_2$ 的耦合为 $\beta$；$C_2$ 与甲基的超共轭空间耦合较弱，令 $\beta' = 0.7\beta$。2. 建立超共轭部分的哈密顿矩阵并求解该 3 维子空间的哈密顿矩阵为：$$\mathbf{H}_{\text{hyper}} = 
\begin{pmatrix} 
\alpha & \beta & 0 \\ 
\beta & \alpha & 0.7\beta \\ 
0 & 0.7\beta & \alpha - 0.5\beta 
\end{pmatrix}$$

为了便于求解行列式，我们令 $x = \frac{\alpha - \varepsilon}{\beta}$。

则久期方程 $\det(\mathbf{H}_{\text{hyper}} - \varepsilon \mathbf{I}) = 0$ 两边同除以 $\beta$ 变为：$$\begin{vmatrix} 
x & 1 & 0 \\ 
1 & x & 0.7 \\ 
0 & 0.7 & x - 0.5 
\end{vmatrix} = 0$$展开这个 3×3 行列式（按第一行展开）：$$x \begin{vmatrix} x & 0.7 \\ 0.7 & x - 0.5 \end{vmatrix} - 1 \begin{vmatrix} 1 & 0.7 \\ 0 & x - 0.5 \end{vmatrix} = 0$$
$$x [x(x - 0.5) - 0.49] - (x - 0.5) = 0$$
$$x^3 - 0.5x^2 - 1.49x + 0.5 = 0$$这是一个三次代数方程。我们求其基态（对应能量最低，即 $x$ 取得最大正值，因为 $\varepsilon = \alpha - x\beta$，且 $\beta < 0$）。

精确解出该方程的三个实根：$x_1 \approx 1.34$ （成键轨道 1）$x_2 \approx 0.36$ （成键轨道 2）$x_3 \approx -1.20$ （反键轨道）

将 $x_1$ 和 $x_2$ 代回能量表达式 $\varepsilon = \alpha - x\beta$：$\varepsilon_1 = \alpha + 1.34\beta$， $\varepsilon_2 = \alpha + 0.36\beta$该超共轭体系原本包含来自三键的 2 个电子和来自甲基 $C-H$ 键的 2 个超共轭电子，共 4 个电子。

它们填入这两个新轨道中，该部分的总能量为：$$E_{\text{hyper}} = 2(\alpha + 1.34\beta) + 2(\alpha + 0.36\beta) = 4\alpha + 3.40\beta$$

计算丙炔总能量现在我们将定域的 $\pi_y$ 能量与超共轭部分的能量相加，同时扣除甲基原本孤立时的核心能量（$\alpha_{\text{Me}} = \alpha - 0.5\beta$ 处的 2 个电子能量 $= 2\alpha - \beta$），从而得到纯粹的 $\pi$ 体系贡献：$$E_{\pi}(\text{Propyne}) = (2\alpha + 2\beta) + (4\alpha + 3.40\beta) - (2\alpha - \beta) = 4\alpha + 6.40\beta$$

联烯的总 $\pi$ 能量：$E_{\pi}(\text{Allene}) = 4\alpha + 4.00\beta$丙炔的总 $\pi$ 能量：$E_{\pi}(\text{Propyne}) = 4\alpha + 6.40\beta$由于共振积分 $\beta$ 在量子力学中严格为负值（$\beta < 0$），这意味着：$$6.40\beta < 4.00\beta$$

从而在数学上严格证明了：$$E_{\pi}(\text{Propyne}) < E_{\pi}(\text{Allene})$$


(probability)=
# Probability

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapter 13
```

## Probabilities and Frequencies

A **probability** of a thing refers to the long-run tendency for that thing to occur. 

First, we have an *event*: "It rains tomorrow," which describes possible outcomes from some random process. 

Imagine we repeat the process many times. The proportion of times in which we observe that event to occur is its **probability**. This corresponds to (1) the textbook and (2) a "frequentist" philosophy. There are other philosophies, but it's not in scope to discuss alternatives. 

A probability is a fraction and the value will be between zero and one. We use notation $\mathbb{P}(\text{thing})$ to describe the probability of the thing occurring. If $H$ means a coin toss comes up heads, then

$$\mathbb{P}(H) = \frac{\# \text{Heads}}{\# \text{Coin Tosses}}.$$


For a fair coin, this will tend to $\frac{1}{2}$. For a weighted coin, it can be any value $p$, $0\leq p \leq 1$. This can also be represented by a  **box model**, like those in {cite}`freedman2007statistics`. A box contains labeled tickets that correspond to specific outcomes. With each ticket being drawn with equal chance, a fair coin can be represented with the box below.

```{figure} images/tikz/headstailsbox.svg
---
height: 40px
name: headstailsbox
---
Fair coin box model representation.
```

For a coin weighted to land heads more often, we simply add more $H$ tickets to the box. 

```{figure} images/tikz/headstailsweightedbox.svg
---
height: 40px
name: headstailsweightedbox
---
A weighted coin box model representation.
```
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


For a fair coin, this will tend to $\frac{1}{2}$. For a weighted coin, it can be any value $p$, $0\leq p \leq 1$. This can also be represented by a  **box model**, like those in {cite}`freedman2007statistics`. It's also useful to represent a collection of outcomes as sets and their probability as an area. {cite}`freedman2007statistics` doesn't use sets, but you mind find it natural for some examples. 

### Sets

In the diagram below, the outer box represents all possible things that can occur. Imagine we're drawing a random number between 0 and 100. A point represents a single outcome, like the number 91 is drawn. A larger set of points represents several possible outcomes. Below, $A$ might represent a set of outcomes like a number above 50 is drawn. 

```{figure} images/eventsetA.svg
---
width: 40%
name: eventsetA
---
$\mathbb{P}(A) = \frac{\text{area } A}{\text{area outer box}}$ 
```


Using set diagrams is especially advantageous once we start talking about multiple collections of outcomes. Let $B$ represent that a number above 90 is drawn. This is less likely than $A$, drawing a number above 50, and $B$ is a subset of $A$. This can be represented below. 


```{figure} images/eventsetAB.svg
---
width: 40%
name: eventsetAB
---
$A$ is more likely because it has greater area. And because $B$ is inside $A$, if $B$ occurs then $A$ occurs. If $A$ occurs, $B$ is not guaranteed. 
```


### Box Models 
A box contains labeled tickets that correspond to specific outcomes. With each ticket being drawn with equal chance, a fair coin can be represented with the box below.

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

### Random Draws

With a single random draw from a box, the probability of an outcome is the number of tickets labeled with that outcome divided by the total number of tickets. In {numref}`headstailsweightedbox`, $\mathbb{P}(H) = \frac{2}{3}$. If we draw two tickets, it matters what we do with the first ticket we drew. Draws can be done **with replacement** or **without replacement**. Drawing with replacement means you put the ticket back in the box, and you might draw the same ticket again. Drawing without replacement means the ticket is removed from the box and not available to be drawn again. 

If we take two draws with replacement from {numref}`headstailsbox`, that is akin to two flips of a fair coin (because a coin doesn't lose its heads side if you already flipped a heads). The possible outcomes are $HH,HT,TH,TT$. If we instead take two draws without replacement, the second draw comes from a box with just one ticket remaining. The possible outcomes are $HT$ or $TH$. 





**Example:** A carnival game is done according to the rules:

- Three tickets are drawn from a box with three tickets ({numref}`box123`).
- A player guesses the outcome prior to any draws being made. They win if they guess what numbers are drawn in the correct order.
- The player can choose if the draws are done with or without replacement.

```{figure} images/tikz/box123.svg
---
height: 35px
name: box123
---
The carnival box.
```

1. Anna guesses 111 and requests that each draw is done without replacement. What is the chance Anna wins?

2. Boris guesses 111 and requests that each draw is done with replacement. What is the chance Boris wins?

3. Neither Anna nor Boris have the best strategy. What is the best strategy?

4. A player can pay one cent to change the rules so they can guess the next number after each draw instead of guessing all numbers at the beginning. Is this worth it?


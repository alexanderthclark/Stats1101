(probability)=
# Probability

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapter 13
```

## Probabilities 

A **probability** of a thing refers to the long-run tendency for that thing to occur. 

First, we have an *event*: "It rains tomorrow," which describes possible outcomes from some random process. 

Imagine we repeat the process many times. The proportion of times in which we observe that event to occur is its **probability**. This corresponds to (1) the textbook and (2) a "frequentist" philosophy. There are other philosophies, but it's not in scope to discuss alternatives. 

A probability is a fraction and the value will be between zero and one. We use notation $\mathbb{P}(\text{thing})$ to describe the probability of the thing occurring. Sometimes we convert this to a percentage and call it a **chance**. If $H$ means a coin toss comes up heads, then

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


## Conditional Probability

A probability like $\mathbb{P}(\text{bad weather})$ is an unconditional probability. A **conditional probability** gives a probability if we already observed something else. For example, a devoted reader of the Farmers' Almanac might know the signs of good or bad weather, like the color of the sky. A conditional probability is written $\mathbb{P}(\text{bad weather} \mid \text{red sky})$. The conditional probability is found $\mathbb{P}(\text{bad weather} \mid \text{red sky}) = \frac{ \mathbb{P}(\text{bad weather} \textit{ and } \text{red sky}) }{ \mathbb{P}(\text{red sky })}$.  More generally, $\mathbb{P}(A \mid B)$ is the probability of $A$ conditional on $B$ and 

$$\mathbb{P}(A \mid B) = \frac{ \mathbb{P}(A \textit{ and } B) }{ \mathbb{P}(B)}.$$

In {numref}`eventsetAB`, $\mathbb{P}(A \mid B) = 1$ because $A$ and $B$ is just $B$. In {numref}`setsAnd`, $\mathbb{P}(A \mid B)$ can't be eyeballed, but it would be the shaded area divided by the area of $B$. Without any conditioning, all of the enclosing box is possible. When we condition on $B$, it's as if we throw away everything that is not $B$. 

```{figure} images/setsAnd.svg
---
width: 53%
name: setsAnd
---
$A$ and $B$ happens where the sets overlap.
```

In a box model, conditional probabilities involve looking at a modified box. 

**Example**. Suppose you're taking a multiple choice exam. A question asks you to solve for a correlation coefficient but you don't have time to do the math given some time pressure. If you guess among equally likely choices, you'll get the right answer with a 20% chance. 


```{figure} images/tikz/boxMultChoice.svg
---
height: 35px
name: boxMultChoice
---

```

But you find a clue: choice A is $\sqrt{5}$. Correlation coefficients can't be above 1, so A is certainly wrong. You've simplified the guessing game to the box model below. If you guess C, you are right with probability $\mathbb{P}(\text{C} \mid \text{B or C or D or E}) = \frac{1}{4}$.

```{figure} images/tikz/boxMultChoiceNoA.svg
---
height: 35px
name: boxMultChoiceNoA
---

```

## General Mulitplication Rule

The **general multiplication rule** is 

$$\mathbb{P}(A \textit{ and } B) = \mathbb{P}(A \mid B)\times \mathbb{P}(B).$$

One thing to note, as suggested by {numref}`setsAnd` and {numref}`eventsetAB`, the probability of $A$ and $B$ can't exceed the probability of either $A$ or $B$. The formula tells a story: first $B$ happens with probability $\mathbb{P}(B)$ and then, once you're in the world of $B$, $A$ will happen with probability $\mathbb{P}(A\mid B)$. Multiply and you have the unconditional probability of $A$ and $B$. 

## Independence

Informally, two things $A$ and $B$ are **independent** if knowing that $B$ occurred doesn't change your belief that $A$ might occur. The outcomes of two coin flips are independent, even if the coin is weighted. It would be hard to invent a reason for why heads should be more or less likely after a heads than after a tails. When $A$ and $B$ are independent, then conditioning on one does nothing. 

$$\mathbb{P}(A \ mid B) = \mathbb{P}(A) \;\;\; A,B \text{ independent}$$

$A$ and $B$ are dependent when $\mathbb{P}(A \ mid B) \neq \mathbb{P}(A)$. Dependence can arise even if there's no causal relationship or explicit coordination. For example, let $A$ be the event where Mayor Adams carries an umbrella and let $B$ be the event where I carry an umbrella. There's some indirect coordination involved in our behavior: 

1. We both live in NYC.
2. We both experience and observe the same weather.
3. We carry umbrellas when it rains. 

The chance that I carry an umbrella is just the chance it rains. But if we know that Mayor Adams is toting an umbrella, we know it's raining. The conditional probability that I carry an umbrella given that Mayor Adams is carrying an umbrella is one. Therefore, these are dependent things.  

If Mayor Adams wins the Powerball after guessing the numbers correctly, that is probability independent of whether or not I win the Powerball on the same day. For these to be dependent, it would have to be that our numbers are somehow connected. Maybe if we read the same horoscope and find our lucky numbers there, our wins could be dependent. 

Draws made with replacement are independent. The box never changes, so there is no way the outcome of the first draw can impact sequential draws. Draws made without replacement are dependent because the box changes and it changes depending on the previous outcomes. 




## Exercises 

```{exercise-start}
:label: carnival
```

A carnival game is done according to the rules:

- Three tickets are drawn from the box in {numref}`box123`.
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
```{exercise-end}
```

```{exercise-start}
:label: linda 
```
(From {cite}`tversky1983extensional`) Linda is 31 years old, single, outspoken, and very bright. She majored in philosophy. As a student, she was deeply concerned with issues of discrimination and social justice, and also participated in anti-nuclear demonstrations. Which is more probable?

* Linda is a bank teller.
* Linda is a bank teller and is active in the feminist movement.

```{exercise-end}
```

(probability)=
# Probability

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapters 13, 14, 15
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

## Mulitplication Rule ($A$ and $B$)

The **general multiplication rule** is 

$$\mathbb{P}(A \textit{ and } B) = \mathbb{P}(A \mid B)\times \mathbb{P}(B).$$

One thing to note, as suggested by {numref}`setsAnd` and {numref}`eventsetAB`, the probability of $A$ and $B$ can't exceed the probability of either $A$ or $B$. The formula tells a story: first $B$ happens with probability $\mathbb{P}(B)$ and then, once you're in the world of $B$, $A$ will happen with probability $\mathbb{P}(A\mid B)$. Multiply and you have the unconditional probability of $A$ and $B$. 

## Independence

Informally, two things $A$ and $B$ are **independent** if knowing that $B$ occurred doesn't change your belief that $A$ might occur. The outcomes of two coin flips are independent, even if the coin is weighted. It would be hard to invent a reason for why heads should be more or less likely after a heads than after a tails. When $A$ and $B$ are independent, then conditioning on one does nothing. 

$$\mathbb{P}(A \mid B) = \mathbb{P}(A) \;\;\; A,B \text{ independent}$$

$A$ and $B$ are dependent when $\mathbb{P}(A \mid B) \neq \mathbb{P}(A)$. Dependence can arise even if there's no causal relationship or explicit coordination. For example, let $A$ be the event where Mayor Adams carries an umbrella and let $B$ be the event where I carry an umbrella. There's some indirect coordination involved in our behavior: 

1. We both live in NYC.
2. We both experience and observe the same weather.
3. We carry umbrellas when it rains. 

The chance that I carry an umbrella is just the chance it rains. But if we know that Mayor Adams is toting an umbrella, we know it's raining. The conditional probability that I carry an umbrella given that Mayor Adams is carrying an umbrella is one. Therefore, these are dependent things.  

If Mayor Adams wins the Powerball after guessing the numbers correctly, that is probability independent of whether or not I win the Powerball on the same day. For these to be dependent, it would have to be that our numbers are somehow connected. Maybe if we read the same horoscope and find our lucky numbers there, our wins could be dependent. 

Draws made with replacement are independent. The box never changes, so there is no way the outcome of the first draw can impact sequential draws. Draws made without replacement are dependent because the box changes and it changes depending on the previous outcomes. 

## Addition Rule ($A$ or $B$)

**Mututally exclusive** things when they cannot occur together. In a set diagram, the sets will have no overlap. You cannot both eath your cake today and have it for tomorrow. This is actually a special case of dependence. 

When $A$ and $B$ are mutually exclusive, the chance that $A$ or $B$ will occur is the sum of their individual probabilities. This is the **addition rule for mutually exclusive things**. 

$$\mathbb{P}(A \text{ or } B) = \mathbb{P}(A) +  \mathbb{P}(B).$$

If $\mathbb{P}(A) = 0.5$ and $\mathbb{P}(B) = 0.6$, can they be mutually exclusive? 

```{dropdown} Can they be mutually exclusive?
No, because that would mean $\mathbb{P}(A \text{ or } B) = 1.1$, but probabilities cannot exceed 1. 
```

When two things are not mutually exclusive, summing the probabilities double counts their overlap. 

**Example**: Let's take a look at these lyrics from the song [*Long Line of Losers*](https://www.youtube.com/watch?v=a9cpkvu0cPY) by Montgomery Gentry. 

> I come from a long line of losers  
> Half outlaw, half boozer  
> I was born with a shot glass in my hand  
> Well, I'm part hippie, a little redneck  
> I'm always a suspect  
> My bloodline made me who I am  

Eddie Montgomery sings that he descends from outlaw and boozers. Translating into probability, $\mathbb{P}(\text{outlaw})= \mathbb{P}(\text{boozer}) = \frac{1}{2}$ for Eddie's ancestors. So what is $\mathbb{P}(\text{outlaw or boozer})$? I read the lyrics as half of the ancestors are outlaws and the *other* half are boozers. In that case, these labels are mutually exclusive and $\mathbb{P}(\text{outlaw or boozer})=1$ and $\mathbb{P}(\text{outlaw and boozer})=0$. 

But, strictly speaking, the lyrics are not clear. With enough boozers, it seems likely enough that at least one is an outlaw. If that is the case, these labels are not mutually exclusive and the addition rule does not apply. $\mathbb{P}(\text{outlaw or boozer})$ could be between $\frac{1}{2}$ and 1. 

### Expanding $A$

Another application of the addition rule is in expanding one probability into two. Instead of $\mathbb{P}(A)$, you might prefer to work with the equivalent probability of $\mathbb{P}(A \text{ and }B) + \mathbb{P}(A \text{ and not }B) $. This kind of addition works because $A \text{ and }B$ is mutually exclusive of $A \text{ and not }B$. Try solving {numref}`linda` by expanding the probability that Linda is a bank teller. 



## Listing the Ways

Many problems can be solved by a brute force routine: list the ways. 


**Example 1**: You flip a fair coin three times. What is the probability of the sequence $HHH$? 

This can be solved by multiplication. The probability is $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$. But the brute force method of listing the ways helps show where the denominator comes from: there are eight possible sequences when you flip a coin three times. 

Next, listing the ways is more natural than trying to apply the general multiplication rule in this example of dependence. 

**Example 2**: You flip a trick coin three times. A heads is always followed by a tails. A tails is always followed by a heads. The first flip is equally likely to be heads or tails. What is the probability of the sequence $HTH$? 

```{dropdown} Example 2
The possible outcomes are $HTH$, $THT$. The chances are both 50%. 
```

Take caution. Just because a sequence is one of four possibilities, that sequence won't necessarily have chance 25%. You must be confident that each sequence is equally first. For example, what is the chance of the sequence $HH$ if a coin is weighted to come up heads with chance 90%. The chance is 81%. 

**Example 3**: You flip a trick coin three times. A heads is always followed by a tails. A tails is always followed by heads or tails with equal chance. Suppose you just flipped a tails. Show the possible sequences are not equally likely. 


```{dropdown} Example 3
The possible outcomes are $HTH$, $HTT$, $THT$, $TTH$, and $TTT$.

Half of the time, the first flip is $H$. Only two sequences start with $H$. One of the remaining three sequences must also occur with chance 50%. Therefore, the five sequences above cannot be equally likely. 
```


Finally, here's an example involving a conditional probability where listing the ways is one of the best ways to solve the problem. 

**Example 3**: You're hunting for treasure at sea. You don't know North from South, but you have a treasure map indicating:

* Two of five islands on a circle contain treasure. 
* The two treasure-bearing islands are adjacent. 

```{figure} images/tikz/islandsLabeled.svg
---
width: 52%
name: islandsLabeled
---
A treasure map showing two treasure-bearing islands. 
```

You search an island and find no treasure. Suppose there are two sea currents you can follow:


1. A counter-clockwise current that takes you to the next island. 
2. A random current that takes you to any of the five islands with equal chance (possibly repeating the initial island).

Which strategy is best for maximizing the chance of finding treasure on the next island?   
```{dropdown} Treasure Hunt 

Listing the ways:

The first island must either be 3, 4, or 5. Following the counter-clockwise current, the next must be either 4, 5, or 1. These contain no treasure, no treasure, and treasure, respectively. That results in a 33% chance of finding treasure on the next island. 

If we follow the random current. Each island is equally likely. Two of the five contain treasure, so there is a 40% chance of finding treasure. It's better to steer into the random current. 

```

## Binomial Formula

Better than listing the ways and then counting is applying (and ideally understanding) a formula.

Take the example of coin flipping. How often will three coin flips come up with just one heads? For a fair coin, this will happen with probability $\frac{3}{8}$. Why? There are eight outcomes of equal chance and three of those outcomes include just one heads. Before, we arrived at knowing there were three ways to get a sequence of one heads and two tails by simply listing the ways. We can instead use the **binomial coefficient**, sometimes written $\binom{n}{k}$. 

The binomial coefficient says how many ways you can choose $k$ elements from $n$ choices if the order doesn't matter. 

* How many ways can you get one heads from three coin flips? $n=3, k=1$, $\binom{3}{1}=3$.

* If three people are in the Glee Club and we are choosing one as the president, there are $\binom{3}{1}=3$ three ways to do that. 

* If all three members of the Glee Club want to be co-president (to increase their chance of admission to Columbia), then there is only one way to do that. There is only one way to choose three elements from a group of three, $\binom{3}{3}=1$.


These **binomial coefficient** is calculated

$$\binom{n}{k} = \frac{n!}{k!(n-k)!}.$$

You can also find it using Pascal's Triangle. The triangle is arranged in horizontal levels corresponding to $n$. Then count over to the $k^\text{th}$ item in the row. Just remember the row starts at $k=0$, because it's possible to flip $k=0$ heads out of $n$ flips.

```{figure} images/tikz/pascaltri.svg
---
width: 52%
name: pascaltri
---
Pascal's Triangle
```

### Binomial Coefficient Calculator

For large enough values of $n$ and $k$, don't try to be a hero. Just use a calculator. 

<div style="text-align: center;">
    <label for="nValue">n: </label>
    <input type="number" id="nValue" name="nValue" value="4" min="0">
    <label for="kValue">k: </label>
    <input type="number" id="kValue" name="kValue" value="2" min="0">
    <button onclick="calculateBinomial()">Calculate</button>
</div>
<div id="result" style="text-align: center;"></div>

<script>
function calculateBinomial() {
    var n = document.getElementById("nValue").value;
    var k = document.getElementById("kValue").value;
    var result = binomialCoefficient(n, k);
    document.getElementById("result").innerHTML = "Result = " + result; // Removed "C(n, k) =" notation
}

function factorial(num) {
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}

function binomialCoefficient(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}
</script>

<br>

**Example**: (Simplified from [Data Colada 114](https://datacolada.org/114)) It is alleged that the result of a paper is fraudulent. Investigators flag 8 of 101 observations as fishy. An independent firm finds that 8 observations were likely tampered with. If both parties flag the same 8 observations, what is the probability that this would happen by random chance?

```{dropdown} Fraud

$$1 / \binom{101}{8}.$$

The denominator is how many ways the investigators could flag eight observations. The numerator shows there is only one way the investigators could identify the same eight.

```


**Harder Example**: (Based on [Data Colada 114](https://datacolada.org/114)) It is alleged that the result of a paper is fraudulent. Investigators flag 8 of 101 observations as fishy. An independent firm finds that 11 observations were likely tampered with. If the original 8 are among the 11, what is the probability that this would happen by random chance?

```{dropdown} Fraud (harder)

This is about one in a billion, 

$$\binom{11}{8} / \binom{101}{8}.$$

The denominator is how many ways the investigators could flag 8 observations. The numerator is how many ways these 8 can be among the 11 found by the firm. 

```


### Binomial Formula

The binomial coefficient is just a preliminary step toward the binomial formula. The **binomial formula** gives the probability that you will flip exactly $k$ heads in $n$ independent flips of a coin with a probability $p$ of a single flip being heads ($p=0.5$ for a fair coin). The formula is 

$$ \frac{n!}{k!(n-k)!} p^k (1-p)^{n-k}.$$

Think of $p^k (1-p)^{n-k}$ as the probability of a sequence of $k$ heads followed by $n-k$ tails. The binomial coefficient in front then adjusts that probability to allow for all of the other ways to get $k$ heads–$n-k$ tails followed by $k$ heads for example. This only works for coin flips or similar processes where the individual trials are independent and the probability of a heads or some substitutable event of interest is the same from one trial to the next. These trial outcomes are said to be *independent and identically distributed*, or *iid*. 

**Example** 
A trick coin comes up heads with probability $p = \frac{2}{3}$. Out of four flips, what is the probability of two heads? 

```{dropdown} Two heads

$$ \binom{4}{2} p^2 (1-p)^2 = 6 \cdot \frac{4}{9} \cdot \frac{1}{9} = \frac{24}{81} = \frac{8}{27}$$

```

What is the probability of three or more heads? 

```{dropdown} Three or four heads

Three and four heads are mutually exclusive events, so we can sum probabilities, 

$$ 4 \times p^3 (1-p)^1 +  1 \times p^4$$

$$ 4\cdot \frac{8}{27}\cdot\frac{1}{3} + \frac{16}{81} = \frac{48}{81} = \frac{16}{27}.$$

```


## Exercises 

```{exercise-start}
:label: battleship
```
Alice is a [Battleship](https://en.wikipedia.org/wiki/Battleship_(game)) grandmaster. Her secret is that if she lands a hit on spot B2, she will follow that up with B3 instead of a random spot like E12. Explain why this is a good strategy using the language of independence and dependence.   
```{exercise-end}
```

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
:label: conditional
```
Let $A$ and $B$ be independent. Which of these sums is equal to one? What if they are not independent? 

* $\mathbb{P}(A \mid B) + \mathbb{P}(A \mid \text{not }B)$
* $\mathbb{P}(A \mid B) + \mathbb{P}(\text{not }A \mid B)$  
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

```{exercise-start}
:label: bday 
```
(Use a calculator) Ignore leap day and assume that all birthdays are equally likely and independent. What is the probability that, of 365 people, nobody is born on June 1st? 

What is the probability that, of 40 people, no two people share the same birthday?
```{exercise-end}
```

```{exercise-start}
:label: glee 
```
Which of these is not found with a binomial coefficient $\binom{3}{2}$? 

A. The number of ways you can have two co-presidents of a three-person Glee Club? 

B. The number of ways you can have a President/Vice President duo of a three-person Glee Club? 


```{exercise-end}
```


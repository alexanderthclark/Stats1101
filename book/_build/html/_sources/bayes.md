(bayes)=
# Probability II

```{admonition} Important Readings
:class: seealso
- {cite}`tijms2012understanding`, Chapter 6 (my advice is skip to 6.2 if you find the Monty Hall paradox too mind-bending of a place to start)
- {cite}`strogatz2010chances`
```

In this section, we leave the main textbook to learn Bayes' Theorem. This helps provide a foundation for further coursework in Bayesian statistics or just help you interact with nerdy people who talk about "Bayesian updating" in response to new information. Bayes' Theorem helps solve for a conditional probability $\mathbb{P}(A \mid B)$ given some other information. This involves "updating" because after observing $B$, the probability of $A$ changes from $\mathbb{P}(A)$ to $\mathbb{P}(A \mid B)$. The unconditional is a prior belief and the conditional probability is a posterior belief. Bayesian probabilities and statistics are important in any kind of environment where information is gathered. For example, medical doctors use Bayes' Theorem to assess the chance of a disease ($A$) given a particular test result ($B$). 

Nothing in this section will require events to be independent. 


## Chance Trees

A probability tree helps organize information regarding conditional probabilities or almost anything that involves the general multiplication rule. 


```{figure} images/tikz/generaltree.svg
---
width: 80%
name: generaltree
---
A generic chance tree.
```

Here is something more concrete. For English words of Latin or French origin, the letter Q is always followed by a U. This means if we know that such a word starts with Q, the conditional probability of the second letter being U is <span style="color: #006400;">1</span> (100%). However, if the first letter is not Q, a U isn't very likely. If second letters are drawn randomly for non-Q words, this probability would be <span style="color: #0000CD;">1/26</span>. We'll also assume, for simplicity, that there is a <span style="color: #FFA500;">1/26</span> probability that a word starts with Q.


```{figure} images/tikz/Qwordtree.svg
---
width: 80%
name: Qwordtree
---
Trees are especially helpful when the probability of a second event (like the letter U) depends on the first event (the previous letter being Q or not Q).
```


What is the probability that a word starts with Qu? Follow the appropriate path in the probability tree and multiply the probabilities as you go. Above, that is $\frac{1}{26}\times 1 = \frac{1}{26}$. What is the probability of a word starting with a letter othan than Q and the second letter being U? The answer is $\frac{25}{26} \times \frac{1}{26} = \frac{25}{676}$. 

## Bayes' Theorem

Bayes' Theorem (or Bayes' Rule) rearranges the general multiplication rule. 

We know $\mathbb{P}(A\text{ and } B) = \mathbb{P}(A \mid B) \mathbb{P}(B)$ and $\mathbb{P}(A\text{ and } B) = \mathbb{P}(B \mid A) \mathbb{P}(A)$. Therefore,

$$\mathbb{P}(A \mid B) \mathbb{P}(B) = \mathbb{P}(B \mid A) \mathbb{P}(A). $$

Isolating the conditional probability on the left, we have **Bayes' Theorem**, in at least one of its forms.

$$\mathbb{P}(A \mid B) = \frac{\mathbb{P}(B \mid A) \mathbb{P}(A)}{\mathbb{P}(B)}.$$

Note, we could rewrite this by combining the terms in the numerator or by by expanding the denominator. For the latter, the expansion uses the fact that $\mathbb{P}(B) = \mathbb{P}(B\text{ and }A) + \mathbb{P}(B\text{ and not }A)$.

 $$\mathbb{P}(A \mid B)  = \frac{\mathbb{P}(A\text{ and }B)}{\mathbb{P}(B)} $$
 
 $$\mathbb{P}(A \mid B)  = \frac{\mathbb{P}(B \mid A) \mathbb{P}(A)}{\mathbb{P}(B\mid A) \mathbb{P}(A) + \mathbb{P}(B\mid \text{not } A) \mathbb{P}(\text{not }A)} $$


Bayes' Theorem is used whenever we want to solve for what is on the left side and what is on the right side is already known (in any of the three expressions above). This is useful, because often you'll receive conditional probabilities that transpose the more interesting quantity, like in the following example. 

**Example 1**: A medical test gives a false positive 1% of the time and a false negative 0% of the time. The test is for a rare condition. Prior to testing, the probability that a randomly chosen individual has the condition is 0.5%. What is the probability of having the condition, given a positive test?  

First, we write down what we are given. From the false positive information,

$$ \mathbb{P}(\text{positive} | \text{no condition}) = 0.01, \quad \mathbb{P}(\text{negative} | \text{no condition}) = 0.99. $$

From the false negative information, 

$$ \mathbb{P}(\text{negative} | \text{condition}) = 0, \quad \mathbb{P}(\text{positive} | \text{condition}) = 1. $$

And we have a prior probability $\mathbb{P}(\text{condition})= 0.005$

However, none of this tells us the main quantity of interest, $\mathbb{P}(\text{condition} | \text{positive})$. We need Bayes's help.

$$ \mathbb{P}(\text{condition} | \text{positive}) = \frac{\mathbb{P}(\text{positive} | \text{condition}) \mathbb{P}(\text{condition)}}{\mathbb{P}(\text{positive})} $$

We substitute in the numerator and expand the denominator,

$$ \mathbb{P}(\text{condition} | \text{positive}) = \frac{ 1 \times .005} {\mathbb{P}(\text{positive} | \text{condition}) \mathbb{P}(\text{condition}) + \mathbb{P}(\text{positive} | \text{no condition}) \mathbb{P}(\text{no condition})}. $$

Now, we substitute for the denominator,

$$ \mathbb{P}(\text{condition} | \text{positive}) = \frac{.005}{.005 + .00995} \approx \frac{1}{3}. $$

The result shows that, for a seemingly very accurate test, the posterior probability of having a rare condition given a positive test is still pretty small. 

### Lifting the Fog

Rote application of Bayes Theorem is a recipe for trouble. It's better to use natural frequencies or a probability tree to help organize your thoughts. 

#### Natural Frequencies

{cite}`strogatz2010chances` stresses that the best way to apply Bayes Theorem is to do it implicitly with "natural frequencies." In a study by Gerd Gigerenzer, doctors were asked to solve a probability problem. Some received the cold text below. 

> The probability that one of these women has breast cancer is 0.8 percent.  If a woman has breast cancer, the probability is 90 percent that she will have a positive mammogram.  If a woman does not have breast cancer, the probability is 7 percent that she will still have a positive mammogram.  Imagine a woman who has a positive mammogram.  What is the probability that she actually has breast cancer?

Others received a friendlier formulation. 

> Eight out of every 1,000 women have breast cancer.  Of these 8 women with breast cancer, 7 will have a positive mammogram.  Of the remaining 992 women who don’t have breast cancer, some 70 will still have a positive mammogram.  Imagine a sample of women who have positive mammograms in screening.  How many of these women actually have breast cancer?

The majority got the question wrong in the first, more opaque phrasing. The majority got the question right in the second, when put in terms of natural frequencies. Think of this as a hack. When the world tosses you a messy problem, turn it into a question of natural frequencies. 

**Example 2**: A medical condition is found in 10% of all patients. A medical test gives a false positive with probability $\frac{1}{9}$ and a false negative 0% of the time. What is the probability of having the condition, given a positive test? 

This is similar to Example 1, but we can structure the problem better with natural frequencies. In a population of 100 people, 10 will have the condition and 90 will not. The 10 with the condition will all test positive because there are no false negatives. Of the 90 without the condition, 10 will receive a false positive. There are a total of 20 people with a positive result, but only 10 are true positives. Therefore, the chance of having the condition, given a positive test result, is 50%. 


```{figure} images/tikz/bayesTest.svg
---
width: 70%
name: bayesTest
---
(Example 2) $\mathbb{P}(\text{condition}\mid \text{positive}) = \frac{1}{2}$. Blue indicates not having the condition and orange indicates having the condition. Figures with a plus sign test positive, with the blue plusses being false positives.
```


#### Bayes Theorem with Trees

{numref}`Qwordtree` can help us find the probability that a word starts with $Q$, given that the second letter is $U$. Maybe that's helpful if you're on Wheel of Fortune. 

$$\mathbb{P}(Q \mid \cdot U) = \frac{\mathbb{P}(QU)}{\mathbb{P}(\cdot U)}$$

$\mathbb{P}(\cdot U)$ is found by summing the probability for each of the paths that terminate in $U$. This is $\frac{1}{26} + \frac{25}{676}$,

$$\mathbb{P}(Q \mid \cdot U) = \frac{\frac{1}{26}}{\frac{1}{26} + \frac{25}{676}} = \frac{26}{51}.$$


## Exercises

```{exercise-start}
:label: boxes
```

A box contains two tickets, labeled $H$ or $T$. There is a 25% chance the box contains two $H$s. There is a 25% chance the box contains two $T$s. There is a 50% chance the box contains one $H$ and one $T$. 

1. What is the chance of drawing an $H$? 

2. Suppose you draw an $H$. What is the chance that the box contained two $T$s?

3. Suppose you draw an $H$. What is the chance that the box contained two $H$s?

4. After replacing the $H$, what is the chance of selecting another $H$? 

```{exercise-end}
```

```{exercise-start}
:label: bayesraredisease
```
Consider a rare disease that affects 1 in 10,000 people in a population. A medical test for the disease has a 99% chance of correctly identifying a diseased person (true positive) and a 99% chance of correctly identifying a non-diseased person (true negative).

If a person from this population tests positive for the disease, what is the probability that they actually have the disease?

Given:

$$\mathbb{P}(\text{Disease}) = \frac{1}{10,000}$$

$$\mathbb{P}(\text{No disease}) = 1 - \mathbb{P}(D)$$

$$\mathbb{P}(\text{Positive} | \text{Disease}) = 0.99$$

$$\mathbb{P}(\text{Negative} | \text{No Disease}) = 0.99$$
```{exercise-end}
```


```{exercise-start}
:label: hatcoins
```

You're playing basketball at the park when your team picks up an unknown player. The unknown player is equally likely to be a scrub or a baller. A baller makes 90% of their shots and each shot is independent. A scrub makes 10% of their shots and each shot is independent. 

1. What is the chance an unknown makes their first shot? 
2. What is the chance that the player makes their second shot if they made their first? 
3. Are the first and second shot outcomes independent from *your* perspective? 


```{exercise-end}
```


```{exercise-start}
:label: troll
```

A pilgrim, traveling home, is wandering through a strange land when a troll appears:

> *Woe, to pass, pilgrim choose of these doors two. <br> Which is which, I cannot reveal to you. <br> Home with chance 7 or 73. <br> It depends on your choice and fate's decree. <br> Independent but certainty you lack. <br> Take now two draws before I turn thee back.*

1. What is the probability the pilgrim opens a door that leads home on the first draw?

2. The troll, old in his years, has seen 200 million other pilgrims pass through. Each has chosen a door randomly to start and then the other door second if the first didn't take them home. Finish filling in the table below with the expected counts.

|                   | Door 7 second | Door 73 second | Home after first |
|-------------------|---------------|----------------|------------------|
| Door 7 first      | 0 million     |               |                  |
| Door 73 first     |               | 0 million     | 73 million       |

3. If the first draw does not lead home, what is the probability the pilgrim opened the door that leads home with chance 7%? What is the probability the pilgrim opened the door that leads home with chance 73%?

4. If the first draw does not lead home, should the pilgrim open a different door on the next draw or try the same door again? Or does it not matter?

5. What is the probability that the pilgrim remains in exile?

6. The pilgrim, alarmed by the risk of remaining in exile, bargains with the troll to replace the two doors with one 40% chance door. This averages the chances. Is this wise?

```{exercise-end}
```

```{exercise-start}
:label: bayesReview
```

Suppose that a product is sold on Amazon and it has either high quality ($H$) or low quality ($L$). We observe a single product review, which can either be good or bad. Reviewers can be of two types: fake or truth-teller. A fake reviewer always leaves a positive review, regardless of the product quality. A truth-teller reviewer leaves a positive review when the product is high quality and leaves a negative review if the product is low quality.

Assume $\mathbb{P}(H) = \frac{1}{2}$ and that each type of reviewer is equally likely.

- a.) What is $\mathbb{P}(\text{good review})$?
- b.) What is $\mathbb{P}(\text{good review} \mid H)$?
- c.) What is $\mathbb{P}(H \mid \text{good review})$?
- d.) Draw a probability tree that summarizes the probabilities based on product quality, review type, and reviewer type.
- e.) Are the events of "high quality product" and "good review" independent or dependent? Explain.
- f.) Suppose the truth-teller is replaced by a joker who leaves a negative review if the product is high quality and a positive review if the product is low quality. What is $\mathbb{P}(H \mid \text{bad review})$?

```{exercise-end}
```
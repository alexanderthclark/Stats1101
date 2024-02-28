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

And here is something more concrete. For English words of Latin or French origin, the letter Q is always followed by a U. This means if we know that such a word starts with Q, the conditional probability of the second letter being U is <span style="color: #006400;">1</span> (100%). However, if the first letter is not Q, a U isn't very likely. If second letters are drawn randomly for non-Q words, this probability would be <span style="color: #0000CD;">1/26</span>. We'll also assume, for simplicity, that there is a <span style="color: #FFA500;">1/26</span> probability that a word starts with Q.


```{figure} images/tikz/Qwordtree.svg
---
width: 80%
name: Qwordtree
---
Trees are especially helpful when the probability of a second event (like the letter U) depends on the first event (the previous letter being Q or not Q).
```


## Bayes' Theorem

Bayes' Theorem (or Bayes' Rule) rearranges the general multiplication rule. 

We know $\mathbb{P}(A\text{ and } B) = \mathbb{P}(A \mid B) \mathbb{P}(B)$ and $\mathbb{P}(A\text{ and } B) = \mathbb{P}(B \mid A) \mathbb{P}(A)$. Therefore,

$$\mathbb{P}(A \mid B) \mathbb{P}(B) = \mathbb{P}(B \mid A) \mathbb{P}(A). $$

Isolating the conditional probability on the left, we have \textbf{Bayes' Theorem}, in at least one of its forms.

$$\mathbb{P}(A \mid B) = \frac{\mathbb{P}(B \mid A) \mathbb{P}(A)}{\mathbb{P}(B)}.$$

Note, we could rewrite this by combining the terms in the numerator or by by expanding the denominator. For the latter, the expansion uses the fact that $\mathbb{P}(B) = \mathbb{P}(B\text{ and }A) + \mathbb{P}(B\text{ and not }A)$.

 $$\mathbb{P}(A \mid B)  = \frac{\mathbb{P}(A\text{ and }B)}{\mathbb{P}(B)} $$
 
 $$\mathbb{P}(A \mid B)  = \frac{\mathbb{P}(B \mid A) \mathbb{P}(A)}{\mathbb{P}(B\mid A) \mathbb{P}(A) + \mathbb{P}(B\mid \text{not } A) \mathbb{P}(\text{not }A)} $$


Bayes' Theorem is used whenever we want to solve for what is on the left side and what is on the right side is already known (in any of the three expressions above). This is useful, because often you'll receive conditional probabilities that transpose the more interesting quantity, like in the following example. 

**Example**: A medical test gives a false positive 1% of the time and a false negative 0% of the time. The test is for a rare condition. Prior to testing, the probability that a randomly chosen individual has the condition is 0.5%. What is the probability of having the condition, given a positive test?  


(bayes)=
# Probability II

```{admonition} Important Readings
:class: seealso
- {cite}`tijms2012understanding`, Chapter 6
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

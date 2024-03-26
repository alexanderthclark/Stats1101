(hyptest)=
# Hypothesis Testing

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapters 26, 27
```

Previously, we'd take a sample proportion or mean and construct some confidence interval around it. Often, there was some other value of interest beyond the sample statistic as well. When conducting a poll in a two-way race, you'll want to know if 50% is within the margin of error. Hypothesis testing allows us to formalize this idea of testing if our sample is sufficiently far from another value for the difference to be judged statistically significant. The calculations should look familiar, but there a few new concepts like P-values. 

## Hypothesis Formulation

We start by specifying a **null hypothesis** and consider an **alternative hypothesis**. The hypothesis test investigates how often we'd see data like what is observed under the assumption that the null hypothesis is true. We use $H_0$ to refer to the null hypothesis. $H_A$ is the alternative hypothesis. With a hypothesis test, we *assume* a true parameter under the null hypothesis and reason how often we'd see the observed sample statistic according to the sampling distribution. Because we have *assumed* a particular hypothesis, we can construct the exact sampling distribution. When our data is too extreme, according to our significance threshold, we say we have rejected the null hypothesis. If the data is not that extreme, we fail to reject the null. 

### Philosophy again?

> *A null hypothesis test is a ritualized exercise of devil’s advocacy.* {cite}`abelson2012statistics`

Hypothesis testing touches on philosophy in at least two points. First, this sort of inquiry where we propose a hypothesis and then check if it's refuted by the data fits with Karl Popper's influential view of science and the *principle of falsification*. According to this view, scientific claims are claims that are falsifiable. Suppose I claim the world doesn't exist and we are brains in vats experiencing a hallucination. This theory would result in all data being dismissed as part of the grand hallucination. Accordingly, this isn't a scientific claim because no amount of data could falsify the theory that all we sense is fake. Hypothesis testing takes data seriously and proceeds by refutation, cohering with the Popperian view of science. The clumsy phrase "fail to reject" also fits with this view, since we proceed by refuting instead of accepting.

> *Common sense tells us that an explanatory argument is better if concise, with over-explanation giving grounds for skepticism. If John excuses his absence from work by claiming that his grandmother died, and besides, he had a bad cold, we are inclined to doubt his sincerity.* {cite}`abelson2012statistics`

Second, the practice of hypothesis testing involves favoring the null hypothesis. When we fail to reject a null of $p = 0.5$, it might also be true that we would fail to reject $p=0.51$. The deference to the null might seem arbitrary, but it's not arbitrary when we can choose it according to the *principle of parsimony*. A parsimonious model is one with few complications. Parsimony need not be decisive, but it is generally preferred. You might counter that a flat-earth theory is simpler than a round-earth theory; however, flat-earth theory quickly becomes more complicated than round-earth theory once you have to start explaining satellite images. Similarly, hypothesizing a coin to be fair seems more appropriate than picking a particular bias for heads or tails.

Parsimony also guards against apophenia, or the "human propensity to seek patterns in random information." People claim to see the the Virgin Mary in a piece of toast, etc. You might find this outlandish just as others might find your beliefs outlandish. Your beliefs and faith need not alwyays impose the same constraints, but the more parsimonious view would favor the explanation that does not make supernatural claims.


## Proportions

We consider the experiment of {cite}`carlson1983double` which tests the claims of astrologers. An astrologer is "given the natal chart of a random subject and an objective and respected measure of his personality traits called the California Personality Inventory (CPI)." The astrologer must select the CPI that matches the natal chart. The structure is such that a random guesser will be correct with $p = \frac{1}{3}$. The astrologers predicted a correct choice half the time or more.

The result was barely better than chance. From $n=116$, $\hat{p} = 0.34$ and $\text{SE}(\hat{p}) = 0.044$. A 95% confidence interval would be $0.34 \pm 2\times 0.044$. The confidence interval for the sample proportion starts with the data. But, with a hypothesis test, we will *assume* a true $p$ and reason how often we'd see a sample proportion $\hat{p}$ as extreme as the one observed.

#### One-sided test

**First** we will specify our hypotheses, with a null of random guessing:

$$
H_0: p = \frac{1}{3} \\
H_A: p > \frac{1}{3}
$$

This is called a **one-sided** (or one-tailed) test because our alternative hypothesis allows for the true $p$ to be above $\frac{1}{3}$, but not below.

**Second**, we assume $p = \frac{1}{3}$ and compute SE.

$$
\text{SE} = \sqrt{\frac{p(1-p)}{n}} = \sqrt{\frac{0.222}{116}}.
$$

We're assuming the null is true in this procedure, and that means we have a definite sampling distribution with a standard error we don't have to estimate and it will be $\sqrt {\frac{p(1-p)}{n}}$. We do not use $\hat{p} = 0.34$ anywhere in that calculation.

**Third**, by the Central Limit Theorem, we can use a Normal model to find the probability of "our particular $\hat{p}$ *or* a value further from the mean $p$." The observed proportion is converted to standard units to find the **test statistic**:

$$ z = \frac{\hat{p}-p}{\text{SE}} = \frac{.34 - \frac{1}{3}} {\sqrt{\frac{0.222}{116}}} \approx 0.15 .$$


```{figure} images/onesidedHT.svg
---
width: 65%
name: onesidedHT
---
The $z$-statistic is based on the rounding done in the accompanying text. 
```

**Fourth**, we calculate a **P-value** using a $z$-table. For a two-sided test, find the probability or area that is more extreme that the observed statistic, $\mathbb{P}( \vert Z \vert > z).$ For a one-sided test, we find the probability remaining in the tail allowed by the alternative hypothesis, $\mathbb{P}(Z > z)$ or $\mathbb{P}(Z < z)$. In our application, we find $\mathbb{P}(Z > 0.15)$ and this comes to be about 44\%. 

$$\mathbb{P}(Z > z)  \approx 1 - 0.5596  = 0.4404.$$

**Fifth**, we either "reject" or "fail to reject" the null hypothesis. We reject the null hypothesis if the P-value falls below our **significance level**, sometimes called $\alpha$. A typical significance level is $\alpha = .05$, corresponding to a 95% (1-$\alpha$) confidence level. Since we calculated a P-value of 0.44, we fail to reject the null hypothesis at $\alpha = 0.05". That means our data isn't significantly different than what we'd expect from the null hypothesis, or random guessing.

A value of $\alpha$ also corresponds to a critical value. For a one-sided, right-tailed test like in the above, the critical value for $\alpha = 0.05$ is 1.645. When the $z$-statistic exceeds is more extreme than the critical value, we reject the null hypothesis. This condition is equivalent to the P-value being below $\alpha$, so you only need to check one of the two conditions to determine the result of the test. The area beyond the critical value is sometimes called the rejection region, like in {numref}`onesidedHT`.

### What about two-sided tests?

If there is a strong expectation that a difference will be in a given direction, it is best to use a one-sided (or one-tailed) test. This places the rejection region all in the predicted tail like in the previous examples. Two-sided tests might be preferred when there is no prior reason to expect a result in a particular direction, as they allow for the possibility of detecting significant deviations from the null hypothesis in either direction. 

Which of these lends itself better to a one-sided test? 

1. Proportion of people who like oatmeal.
2. Proportion of True/False questions answered correctly by a single student.

```{dropdown} One- or two-sided test?
The second lends itself better to a one-sided test because we have reason to think that a sample proportion below 0.5 is just bad luck and not evidence that someone does worse than guessing.
```

Following our textbook, {cite}`freedman2007statistics`, we won't go into the exact procedure for a two-tailed test. A rejection region is the range of test statistic values where the P-value would be low enough so that the null hypothesis is rejected. In the two-tailed case, the rejection region is in two pieces. Using a 95% confidence level, the area over the rejection region is 5% with 2.5% in each piece. 

If we instead used a one-tailed alternative that $p>\frac{1}{3}$, the rejection region would be contained only on the right. That would *not* increase the total rejection region area, but it increase the area on the right side. If the the statistic $z>0$, then we end up rejecting the null more often. For this reason, one-sided tests are often considered to be more liberal ({cite}`abelson2012statistics}`).

```{figure} images/twosidedHT.svg
---
width: 65%
name: twosidedHT
---
For a two-sided test, the null rejection region is split between both tails and the P-value sums the areas in both extremes.
```

## Averages


For proportions, we found a test statistic 

$$z = \frac{\hat{p}-p}{\text{SE}} = \frac{\hat{p}-p}{\sqrt{\frac{p(1-p)}{n}}}.$$

This is a special case of something we can use for any sort of average provided enough data,

$$ z =  \frac{\bar{x}-\mu}{\text{SE}} = \frac{\text{observed - expected}}{\text{SE}}.$$

The observed sample average is $\bar{x}$ and $\mu$ refers to the average specified by the null hypothesis. If the sample is drawn from a box with a known SD, then 

$$\text{SE} = \frac{\text{SD}}{\sqrt{n}}.$$

Once we have the $z$-statistic, we calculate the P-value and compare to our significance level just as we did for proportions. 


In this [Google Sheets example](https://docs.google.com/spreadsheets/d/1MHuqzyD1ixNfud8nOVetMv3ymnLgMZyJq0oaj6yO-U4/edit?usp=sharing), we have 9,087 observations from the American Time Use Survey on time spent sleeping in a day. We proceed:

1. Set a null hypothesis of eight hours of sleep. 
2. Set an alternative hypothesis of less than eight hours of sleep. 
3. Set a confidence level of 95\% (significance level of 5\%). 
4. Calculate the sample average. This is 8.94 hours.
5. Estimate the standard deviation. The SD is 2.21.
6. Estimate the standard error for the average. The SE is 0.02.
7. Calculate the test statistic. This is *z*=40.74.
8. Calculate the P-value. It's basically zero.
9. Render judgment---reject or fail to reject the null. Reject the null because *P*<0.05. 


## Big Picture

### Comments on P-values

A P-value is the probability that we'd observe our test statistic (above, a $z$-statistic), assuming the null hypothesis is true. And we are assuming independence, assuming the sample is properly randomized, and counting on our sample size to be reasonably large.

P-values can be difficult. According to {cite}`greenland2016statistical`, "A key problem is that there are no interpretations of these concepts that are at once simple, intuitive, correct, and foolproof." The article continues:

> We will adopt a more general view of the P value as a statistical summary of the compatibility between the observed data and what we would predict or expect to see if we knew the entire statistical model (all the assumptions used to compute the P value) were correct ... The P value is then the probability that the chosen test statistic would have been at least as large as its observed value if every model assumption were correct, including the test hypothesis. This definition embodies a crucial point lost in traditional definitions: In logical terms, the P value tests all the assumptions about how the data were generated (the entire model), not just the targeted hypothesis it is supposed to test (such as a null hypothesis).

#### Misconceptions

These are all misconceptions, based on {cite}`goodman2008dirty`.

1. If P = 0.05, the null hypothesis has only a 5% chance of being true. 
2. A non-significant difference means the null is true.
3. Studies with P on opposite sides of 0.05 are conflicting. 
4. Studies with the same P-value must have the same sample statistic $\hat{p}$. 
5. A scientific conclusion or policy should be based on whether or the P-value is significant. 

The first two get the mechanics of hypothesis testing wrong. 

The third can be countered by first imagining that you have a truly weighted coin and after just a few flips, you cannot reject the null that the coin is fair. Then suppose the coin-flipping experiment is repeated with many coin flips. You can expect a significant result with more data. We get opposite conclusions because of differing precision, not because the studies conflict at a deeper level. 

The fourth is not obvious in light of the focus on computed test statistics only. Recall the statistic grows as the SE shrinks or as the observed effect ($\hat{p}-p$) increases. A small difference between $\hat{p}$ and $p$ will give a low P-value if the sample size is large. A large difference between $\hat{p}$ and $p$ might give the same P-value if the sample size is smaller. 

Basing policy on just a P-value leaves out context and other things not captured in the data. However, we don't even have to appeal to context to see why the P-value has shortcomings. For example, the P-value doesn't communicate the magnitude of the effect. SCOTUS has also weighed in, ruling 9-0 in *Matrixx Initiatives, Inc. v. Siracusano* that companies can't conceal bad news from investors by claiming that the adverse effects are not "statistically" significant at the 0.05 or any other level. Justice Sotomayor wrote that beyond statistical significance, "source, content, and context" should be addressed. 


#### For the Gadfly

We've now learned two questions you can ask to sound smart. These are go-to questions for the non-statistician in almost any meeting who wants to do a little chirping.

1. Is this a spurious correlation or does it suggest causation?
2. Are these results statistically significant or just random noise?

You should be prepared to receive a reply to the second question involving P-values. At the least, understand that a lower P-value provides more evidence against the null hypothesis. A good one-sentence reply to the second question might go, "The P-value was 0.02, so it's very unlikely we'd see these results just by chance." Whoever says that is telling you that under a null of pure chance, the data would be as or more extreme than the actually observed data only 2% of the time.

You should also know there are several nuances and that the P-value can't be interpreted as the probability that the null is true, nor can 1-P be interpreted as the probability of the alternative.

$$
\begin{align*}
\text{P-value} & = \mathbb{P}(\text{observed data or data more extreme} \mid H_0) \\
\text{P-value} & \neq \mathbb{P}(H_0 \mid \text{observed data or data more extreme}) 
\end{align*}
$$

The first quantity, the P-value, might correspond to something like the probability someone has a temperature given that they are not sick.

The more interesting quantity above is the second, $\mathbb{P}(H_0 \mid \text{your data or data more extreme})$, which could correspond to the probability someone is healthy given their temperature. This is *not* the P-value. We could only arrive there with more information and by applying Bayes' Theorem. In particular, this will depend on $\mathbb{P}(H_0)$, the probability you attached to the null prior to observing any data.

95% significance (or any other level) is an arbitrary rule. That might bother you, even though it was proposed by Ronald Fisher himself. Hypothesis testing is abstract and it doesn't correspond to a cost benefit analysis you might construct for a particular decision. One notable critic is Deirdre McCloskey (often accompanied by Stephen Ziliak). Part of their critique is that we shouldn't confuse statistical significance for practical (or economic) significance. We're mainly setting these critiques aside for now.



(twosample)=
# Two-Sample Tests

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapter 27
```

## Two-Sample Tests

Until now, we've been studying one-sample tests. We proposed null hypotheses like $\mu = 8$ or $p = \frac{1}{3}$. This works if we have a good reason to care about if $\mu$ is eight or not, perhaps if we want to know if a population gets the recommended number of hours of sleep. In other instances, you are more interested in one population relative to another. For example, do bankers get more or less sleep than college students? And this corresponds to the questions typically motivating experiments. Do people who take fish oil supplements have better cardiovascular outcomes than a control group not taking fish oil supplements? 


### The Standard Error


#### The Idea

Let's start by comparing the sample number of heads for two different coins. We use a sample size of two flips for each coin for simplicity–sample sizes should be larger in practice. The SD for the list of chance errors is found in {numref}`headDiff` is equal to 1. 

```{list-table} Comparison of the number of heads for two coins
:header-rows: 1
:widths: auto
:name: headDiff

* - Sequences
  - Observed Heads (Coin 1)
  - Observed Heads (Coin 2)
  - Chance Error (Coin 1-Coin 2)
  - $$\mathbb{P}(\text{Sequences})$$
* - HH-HH
  - 2
  - 2
  - 0
  - 1/16
* - HH-HT
  - 2
  - 1
  - 1
  - 1/16
* - HH-TH
  - 2
  - 1
  - 1
  - 1/16
* - HH-TT
  - 2
  - 0
  - 2
  - 1/16
* - HT-HH
  - 1
  - 2
  - -1
  - 1/16
* - HT-HT
  - 1
  - 1
  - 0
  - 1/16
* - HT-TH
  - 1
  - 1
  - 0
  - 1/16
* - HT-TT
  - 1
  - 0
  - 1
  - 1/16
* - TH-HH
  - 1
  - 2
  - -1
  - 1/16
* - TH-HT
  - 1
  - 1
  - 0
  - 1/16
* - TH-TH
  - 1
  - 1
  - 0
  - 1/16
* - TH-TT
  - 1
  - 0
  - 1
  - 1/16
* - TT-HH
  - 0
  - 2
  - -2
  - 1/16
* - TT-HT
  - 0
  - 1
  - -1
  - 1/16
* - TT-TH
  - 0
  - 1
  - -1
  - 1/16
* - TT-TT
  - 0
  - 0
  - 0
  - 1/16
```

The table and calculations above are for two sums. For the proportion of heads, everything would be divided by two, because $n=2$. The resulting SD is $\frac{1}{2}$. This is the *SE for the difference of the proportions* if we were to assume that $p_1=p_2 = \frac{1}{2}$ and that the coin flip outcomes are independent. Compare this to the chance error from counting the number of heads from flipping a single fair coin twice. In that case, the possible chance errors would be -1, 0, 0, and 1 and the SE for the proportion would be $\frac{1}{2\sqrt{2}}$. 


#### The Formula

For the proportion of heads, everything would be divided by two, because $n=2$. The resulting SD is $\frac{1}{2}$. This is the SE for the difference of the proportions, $p_1-p_2$, if we were to assume that $p_1=p_2 = \frac{1}{2}$ and that the coin flip outcomes are independent. Compare this to the chance error from counting the number of heads from flipping a single fair coin twice. In that case, the possible chance errors would be -1, 0, 0, and 1 and the SE for the proportion would be $\frac{1}{2\sqrt{2}}$.

The **standard error for the difference of two independent quantities** is $\sqrt{a^2 + b^2}$, where $a$ and $b$ are the SEs for the first and second quantities.

**Aside**: You might note the similarities to the Pythagorean Theorem, coming from the similarity between the SD formula and the formula for Euclidean distance.[^1] The side of the triangle, or vector, corresponds to the random quantity and the length of the side is the SE (not to be confused with the value of the random quantity which does not appear in the triangle).

[^1]: The size of a vector, $ \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} $, or distance from the point to the origin, is $ \Vert x \Vert = \sqrt{x_1^2 + x_2^2} $.

```{figure} images/tikz/twoSampleSE.svg
:width: 34%
:name: twoSampleSE

If $\vec{y}$ has length $a$ and $\vec{x}$ has length $b$, then $\vec{y}-\vec{x}$ has length $\sqrt{a^2 + b^2}$. The SE is like the length of the hypotenuse.
``` 

#### Examples

**Example 1.** If $p_1 = 0.5$, $p_2 = 0.5$, $n_1= 25$ and $n_2 = 50$, find the SE for $p_1 - p_2$.

We apply the formula for the standard error of a difference, $\sqrt{a^2 + b^2}$. The first quantity is for $p_1$. Its sample average has an SE of $\sqrt{\frac{0.5\times(1-0.5)}{25}}$. The second quantity is for $p_2$. Its sample average has an SE of $\sqrt{\frac{0.5\times(1-0.5)}{50}}$. These two numbers take the place of $a$ and $b$ in the formula for the SE of a difference.

$$    \text{SE}  = \sqrt{\frac{0.25}{25} + \frac{.25}{50}} $$

$$    \text{SE}  = \sqrt{\frac{0.25}{25} + \frac{.25}{50}} $$
$$ \text{SE}  = \sqrt{\frac{1}{100} + \frac{1}{200}}$$
$$ \text{SE} = \sqrt{\frac{3}{200}}$$

**Example 2.** Box A has an average of 100 and SD of 10. Box B has an average of 50 and an SD of 18. 25 random draws are made with replacement from box A and 36 draws are made with replacement from box B. Find the expected value and difference between the average of the draws from box A and the average of the draws from box B. 

The expected value for the difference is $100 - 50 = 50$. The SE is calculated,

$$\text{SE}  = \sqrt{ \left(\frac{10}{\sqrt{25}}\right)^2 + \left(\frac{18}{\sqrt{36}}\right)^2 }$$
$$\text{SE} = \sqrt{2^2 + 3^2}$$
$$\text{SE}  = \sqrt{13}.$$

**Example 3.** If $\hat{p}_1 = 0.5$, $\hat{p}_2 = 0.6$, $n_1 = 50$, and $n_2 = 48$, find the SE for $\hat{p}_2 - \hat{p}_1$.

```{dropdown} SE for difference in proportions
$$\text{SE}  = \sqrt{\frac{0.25}{50} + \frac{.24}{48}} $$
$$ = \sqrt{\frac{1}{200} + \frac{1}{200}}$$
$$= \sqrt{\frac{1}{100}} = \frac{1}{10}$$
```

### The Test


Now we construct a hypothesis test for the population averages $\mu_1$ and $\mu_2$.

$$    H_0: \;\;\; \mu_1 = \mu_2, $$
$$ H_A: \;\;\; \mu_1 > \mu_2.$$

Again, the test statistic is 

$$z = \dfrac{\text{observed difference - expected difference}}{\text{SE for difference}}.$$

The two-sample $z$-statistic is calculated from
* the size of the two samples,
* the averages of the two samples,
* the SDs of the two samples. 

The test assumes two independent simple random samples. 


**Example** In both 1990 and 2004, NAEP tested 1,000 17-year-olds on mathematics as well as reading. The average score went up from 305 to 307. You may assume the assumptions for hypothesis testing hold. The SD for the 1990 data was 34, and the SD for the 2004 data was 27. Can the difference between the 305 and 307 be explained as a chance variation?

1. Should you make a one-sample $z$-test or a two-sample $z$-test? Why?
2. Formulate the null and alternative hypotheses in terms of a box model. Do you need one box or two? Why? How many tickets go into each box? How many draws? Do the tickets show test scores, or 0's and 1's? Why?
3. Is the difference real, or can it be explained by chance?


We should use a two-sample $z$-test. There is no pairing and these are separate, independent samples. There are two boxes, a 1990 box and a 2004 box. There are as many tickets as there are 17-year-olds for each population, and 1,000 draws from each. The tickets show test scores. The null hypothesis says the average of the boxes are the same. The alternative says the averages are different. The SE for the difference is 1.37, so $z = \frac{2}{1.37} \approx 1.46$. This is below the typical one-tailed threshold of 1.645, for 95% confidence, and could easily be chance variation. We fail to reject the null.

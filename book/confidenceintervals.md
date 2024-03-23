(confid)=
# Confidence Intervals

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapters 21, 23
```

Let's briefly review the Central Limit Theorem. 

{numref}`bernoulliCLT` and {numref}`bernoulliCLT2` illustrate the central limit theorem for the case of flipping a weighted coin that comes up heads 20% of the time. For $n$ flips of the coin, we can compute standard errors:

$$\text{SE for number of heads} = \sqrt{n} \times \sqrt{0.2\times 0.8}$$

$$\text{SE for proportion of heads} = \sqrt{\frac{0.2\times 0.8}{n}}$$

If we repeatedly flip a coin *100* times, we can expect the sample proportion to be in the interval $0.2\pm 2\times 0.04$ for 95\% of the repetitions, where 0.04 is the SE for the proportion.

```{figure} images/bernoulliCLT.svg
---
width: 50%
name: bernoulliCLT
---
Each miniature histogram reflects $n=100$ coin flips where $p=0.2$. Miniature histograms are arranged into a larger histogram according to their sample average.
```
If we repeatedly flip a coin *400* times, we can expect the sample proportion to be in the interval $0.2\pm 2\times 0.02$ for 95\% of the repetitions, where 0.02 is the SE for the proportion.

```{figure} images/bernoulliCLT2.svg
---
width: 50%
name: bernoulliCLT
---
Each miniature histogram reflects $n=400$ coin flips where $p=0.2$. Miniature histograms are arranged into a larger histogram according to their sample average.
```
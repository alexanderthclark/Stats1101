(confid)=
# Confidence Intervals

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapters 21, 23
```

## The Accuracy of Percentages

Let's briefly review the Central Limit Theorem. 

{numref}`bernoulliCLT` and {numref}`bernoulliCLT2` illustrate the central limit theorem for the case of flipping a weighted coin that comes up heads 20% of the time. For $n$ flips of the coin, we can compute standard errors:

$$\text{SE for number of heads} = \sqrt{n} \times \sqrt{0.2\times 0.8}$$

$$\text{SE for proportion of heads} = \sqrt{\frac{0.2\times 0.8}{n}}$$

If we repeatedly flip a coin *100* times, we can expect the sample proportion to be in the interval $0.2\pm 2\times 0.04$ for 95\% of the repetitions, where 0.04 is the SE for the proportion.

```{figure} images/bernoulliCLT.svg
---
width: 35%
name: bernoulliCLT
---
Each miniature histogram reflects $n=100$ coin flips where $p=0.2$. Miniature histograms are arranged into a larger histogram according to their sample average.
```
If we repeatedly flip a coin *400* times, we can expect the sample proportion to be in the interval $0.2\pm 2\times 0.02$ for 95\% of the repetitions, where 0.02 is the SE for the proportion.

```{figure} images/bernoulliCLT2.svg
---
width: 35%
name: bernoulliCLT2
---
Each miniature histogram reflects $n=400$ coin flips where $p=0.2$. Miniature histograms are arranged into a larger histogram according to their sample average.
```

This is all quite nice except it answers a question that isn't very interesting because we start by knowing the true parameter is $p=0.2$ and then we imagine repeatedly drawing samples. 

Consider again the example from {ref}`ptonSample`, where a researcher at Peloton wants to find the proportion of members who own an Apple Watch. In practice, only one sample will be collected and only one sample proportion $\hat{p}$ is observed. Interesting questions relate the unknown $p$ to the observed $\hat{p}$. That is, we are trying to make an *inference* about the population from the sample. To get some sense of the margin of error for the sample proportion $\hat{p}$, we also have to estimate the SE. 

To estimate the SE, we must first estimate the SD for the 0-1 box. According to the *bootstrap procedure*, the SD of the box can be estimated by substituting the fraction of 0's and 1's in the sample for the unknown fractions in the box. This provides a good estimate for a large enough sample. 

That is, we estimate the SE based on the population parameters, $\sqrt{\frac{p(1-p)}{n}}$, by substituting the sample proportion: $\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$.

**Example**: The Pew Research Center conducted a [study on tipping](https://www.pewresearch.org/2023/11/09/tipping-culture-in-america-public-sees-a-changed-landscape/). They surveyed 11,945 adults in the US. 59% reported that they always tip when having food delivered. Among all adults in the US, a proportion $p$ must always tip. The survey estimates this as $\hat{p} = 0.59$. The estimated SD as $\sqrt{.59\times.41} \approx 0.49$. The SE for the sample proportion is SE = $\frac{0.49}{\sqrt{11945}} \approx 0.004$. Converting to percentages, we expect that about 59% of adults always tip, give or take 0.4% as a typical chance error.

### Confidence Intervals


A confidence interval for a sample proportion can be found

$$\hat{p} \pm 1 \text{SE} \hspace{12pt} (\text{68% confidence interval}),$$ 

$$\hat{p} \pm 2 \text{SE} \hspace{12pt} (\text{95% confidence interval}),$$ 

$$\hat{p} \pm 3 \text{SE} \hspace{9pt} (\text{99.7% confidence interval}).$$ 

And more generally, an arbitrary $a\%$ confidence interval can be found as $\hat{p} \pm z^{\star} \text{SE}$, where $z^\star$ is the critical value such that $a\%$ of the area under a normal curve is between $-z^\star$ and $z^\star$. 

**Example**: Use a $z$-table to find the appropriate critical value for a 90% confidence interval. 

```{dropdown} 90% confidence interval
The critical value is 1.645. The interval takes the form $ \hat{p} \pm 1.645 \times \text{SE}$.
```

#### Interpretation of a Confidence Interval

The correct interpretation of a confidence interval is often misunderstood. The interpretation is based on our frequency theory of chance. First, there is nothing random about the parameter $p$. Our sample is random and thus randomness is manifested in $\hat{p}$ instead. With $p$ nonrandom, we *can't* make probabilistic statement like $p$ is in a 95\% confidence interval with 95\% probability. Relying on probabilities being long-run frequencies instead, we say that if we were to construct many samples and thus many 95\% confidence intervals, about 95\% of the intervals would contain the true parameter. 

Let's return to the simulated data with $p=0.2$, in {numref}`bernoulliCLT` and {numref}`bernoulliCLT2`. Each miniature histogram is a sample and most of the sample means are not equal to 0.2. However, 95% confidence intervals can be found for each. Indeed, for 95 of 100 of the simulated samples, the confidence interval would cover the true parameter.

```{figure} images/bernoulliCLTwCI.svg
---
width: 33%
name: bernoulliCLTwCI
---
Each miniature histogram reflects $n=100$ coin flips where $p=0.2$. Grayed out histograms are those where the confidence interval misses the true parameter.
```

```{figure} images/bernoulliCLT2wCI.svg
---
width: 33%
name: bernoulliCLT2wCI
---
Each miniature histogram reflects $n=400$ coin flips where $p=0.2$. Grayed out histograms are those where the confidence interval misses the true parameter.
```

## The Accuracy of Averages

Proportions are a special kind of average. The sample average $\bar{x}$ estimates the  population average $\mu$. For general averages, there is no formula analogous to SD=$\sqrt{p(1-p)}$. The standard deviation must be estimated from the data. With a large simple random sample, the SD of the sample is a good estimate of the SD of the box.[^sd] Then, the SE for the average can be calculated

$$\text{SE for average} = \frac{\text{SD}}{\sqrt{n}}.$$

[^sd]: It would be typical to use the sample standard deviation (SD<sup>+</sup>) here, but, following {cite}`freedman2007statistics`, we'll use the population standard deviation SD. There is little difference in a large sample.  

Once the SE is found, a confidence interval is constructed like in the case of proportions. For example, a 95% confidence interval is $\bar{x} \pm 2\text{SE}$.

**Example**: Use this [American Time Use Survey data](https://docs.google.com/spreadsheets/d/1PLUjN4IR-XRPJ8pjDGZGyUG4ii9b_shQa_R78rKaghA/edit?usp=sharing) to find a 95% confidence interval for the hours spent alone among 2020 respondents.

```{dropdown} 90% confidence interval
The sample size is $n$ = 8782, the sample average is 6.03 and the SE is 0.05.

The interval is $6.03 \pm 0.1$.

There are important caveats related to this number that would require a look at the ATUS documentation. Notably, no data was collected at the peak of the pandemic.
```


## Exercises

```{exercise-start}
:label: CIicecream
```
In a survey of 96 randomly selected Americans, $\hat{p} = 0.60$ said they think ice cream should be banned. Find the 95% confidence interval for the proportion. 
```{exercise-end}
```

```{exercise-start}
:label: CInarrow
```
You are interested in the 95% confidence interval of a sample mean. Which of the following makes this interval more narrow?

1. More observations.
2. Fewer observations.
3. Higher value of the average.
4. Lower value of the average. 
5. Both 1 and 4
```{exercise-end}
```

```{exercise-start}
:label: CImc
```
Consider a multiple choice exam with choices A, B, C, D, and E for each question. Assume that the probability that a particular question has the answer $C$ is $p = 0.2$ and that all letter answers are determined independently. Find a 90% confidence interval for the proportion of questions that will have a correct answer of C on a 1600-question exam. 
```{exercise-end}
```


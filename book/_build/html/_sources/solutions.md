---
search_exclude: true
---

# Selected Solutions

## [Getting Started](getting_started)

```{solution-start} spotpop
:class: dropdown
```

There are many possible answers. A good answer has to pay attention to the **context** of the data, in order to make fair comparisons or include appropriate caveats. 

Suppose you decide to average the song popularities for each artist. It's important to acknowledge that 

1. Not all artists have the same number of songs in this data set. 
2. The songs included are from the artist's "top songs" as determined by Spotify, which generally means their most popular songs. 
3. Artists with *more* songs in the data are at a disadvantage because the marginal songs will be less popular than the others. 

So maybe you should just average the top four songs for each artist. But if one artist has only released 20 songs and another has released 100 songs, maybe that's not fair. Nothing will be perfect. 

```{solution-end}
```

## [Experiments](experiments)


```{solution-start} exp1
:class: dropdown
```

The difference in average incomes indicates that our comparison will be confounded. The treatment group has more money, so they will likely have other resources that contribute to their dental health other than the electric toothbrush. 

```{solution-end}
```

```{solution-start} exp2
:class: dropdown
```

Only the last choice fits the definition of an experiment. The first features assignment to treatment that is understood, but it is not done by the researcher. The second also lacks a researcher component.

```{solution-end}
```

## [Observational Studies](observational_studies)

```{solution-start} medprog
:class: dropdown
```

The data might be valid, but the inference can be false. There are too many other factors to account for to conclude that the treatments have not improved. The historical comparison does not ensure that breast cancer is detected at the same stage, for example. There can also be the effect of other diseases, the treatments for which can also improve. Note also the different kinds of rates that are relevant. The provided data focuses on deaths only, but not what percentage of people who get cancer ultimately die. 

The above is a sufficient answer. Here is a toy, quantitative illustration.

Suppose women in this age group only die from breast cancer or in a car crash. In more recent time periods, cancer treatment is effective so that only 1% of cases result in death. Before that, 10% of cases resulted in death. There are also advances in car safety. 100% of car crashes used to result in death and now just 10%. The death rate improves 10x in both cases. 

Suppose that car crashes and cancer occur at the same rate over time. 

Before: If 1000 women get into a car crash and another 1000 get cancer, there are 1000 deaths from crashes and 100 deaths from cancer. That means 100 of 1100 deaths (1/11) are from cancer. 

Now: If 1000 women get into a car crash, 100 die. 1000 get cancer and 10 die. This means that 10 of 110 deaths (1/11) are from cancer. The rate is the same!

This doesn't give the same 13 out of 1000 deaths rate from the question, but it illustrates the point simply. To find a 13 of 1000 deaths to be due to cancer, we can solve for an initial death rate from cancer, $r$, continuing to assume 1000 occurrences and a death rate of 1 (100%) for crashes:

$$\frac{13}{1000} = \frac{1000 \times r}{1000\times r + 1000\times 1}.$$

Simplifying, 

$$\frac{13}{1000} = \frac{r}{r + 1}.$$

Cross multiplying, 
$$13000r + 13000 = 1000000r$$
and $r = \frac{13}{987}$, or about 1.3%. Then, let the improved cancer treatment will result in a death from cancer 0.13% of the time. If cars become safer, resulting in a death rate of 10%, then we still have 13 of 1000 deaths being from cancer,

$$\frac{13}{1000} = \frac{1000 \times 0.1 \times r}{1000\times 0.1 \times r + 1000\times 0.1}.$$


```{solution-end}
```

```{solution-start} comedian
:class: dropdown
```

This is an experiment because it features a researcher who is deliberately varying a joke. The defining feature of an experiment is the researcher's control of assignment to treatment. 

Researcher: comedian <br>
Control: first joke version <br>
Treatment: second joke version <br>
Control group: first joke audience <br>
Treatment group: second joke audience <br>

The fails to be a conclusive experiment because the measurement is done imprecisely (audience reaction), the control and treatment groups are not determined randomly, and double blinding is impossible. These weaknesses are not to be confused for the features of an observational study.


```{solution-end}
```

## [Natural Experiments](natural_exp)

```{solution-start} earlyclass
:class: dropdown
```

This can be used as a natural experiment. Because we are interested in the effect of an early morning class, we can call those in the 8am class the treatment group and the control group refers to the students in the 1pm section. "Nature" randomizes the assignment of students and the randomization is not undone because no students will switch to a different section under the assumption that all students prefer the later section. 

If not all students prefer the 1pm section, this becomes less compelling as a natural experiment. Students will sort according to their own preferences. Assignment is no longer random and there could be confounding. The preference for an 8am class could be related to studiousness, other classes the students are taking, etc.

```{solution-end}
```

## [Center and Spread](center_and_spread)

```{solution-start} sdproperties
:class: dropdown
```

The SD is equal to 1 for all three lists. The SD doesn't change by duplicating the list or by shifting it. Neither duplicating nor shifting the list would change the shape of the histogram either. 

Here is an [explainer video](https://www.youtube.com/watch?v=8eyg0meH5wo) for the math. 

```{solution-end}
```

## [Normal Distribution](normal)

```{solution-start} schoolsnorm
:class: dropdown
```

Let school A have an average SAT of 1000 with an SD of 200 and the other have an average of 1200 and an SD of 100. Any cutoff above 1400 will favor the lower average school.

```{figure} images/schoolnormexercise.svg
:width: 50%
:name: cumulative_ztable

A score of 1400 is two SDs above the mean for either school. 
```

School A can maintain a higher admission rate even if the admission rate is above 50% for school B. 

Let A have an average of 1000 with an SD of 1. Let school B have an average of 1200 and an SD of 100. Put the admission cutoff at 900. This will exclude essentially 0% of students in school A (100 SD below the average). This will exlcude those 3 SD below the average at school B, or about 0.15%.

```{solution-end}
```

## [Correlation](correlation)

```{solution-start} corrPairing
:class: dropdown
```
The correlation coefficient is $r=0.5$ for the first two tables. The correlation increases to $r=0.866$ for the last table. 

This is a question about the structure of data. There is an ordered pair $(x,y)$ for each day of the week where $x$ first represents Matt Damon and $y$ represents Wahlberg. In the second table, all $x$ and $y$ values are swapped. In a scatter plot, this would be like changing the $x$ and $y$ axis labels, so the correlation does not change. 

In the third table, there is a more substantive change. The list of values for our $x$ and $y$ variables beyond just relabeling. $(x,y)$ points are ordered pairs and the Wednesday pair is reordered without reordering the Monday and Tuesday points. This creates a visible change in the scatter plot and in the correlation coefficient. 

```{solution-end}
```

```{solution-start} corrMental
:class: dropdown
```

No, the award is not merited because the lack of correlation does not demonstrate that there can be no causal effect. This is a chicken and egg problem like in the case of police funding and crime. 


```{solution-end}
```

## [Regression](regression)


```{solution-start} assortMating
:class: dropdown
```

Researchers report both correlations and slopes, indicating that both can be interesting. If you want to know the effect size, use a slope. If you want to measure the strength of the relationship in terms of noisy vs perfectly linear, use a correlation coefficient.

A single row will contain the incomes for two partnered individuals, but an $x,y$ pair must also be *ordered*. There can different ways to decide what the $x$ and $y$ columns are. If the data only contains opposite-sex couples, data can be arranged in $x,y$ pairs for (male, female) or (female, male). The $x,y$ pairs might also be ordered in other ways. One example is (primary earner, secondary earner) or (secondary earner, primary earner). Random ordering is also okay, but you might find a different slope or correlation coefficient and these must be interpreted based on the ordering. 


```{solution-end}
```

## [Probability I](probability)

```{solution-start} conditional
:class: dropdown
```

$\mathbb{P}(A \mid B) + \mathbb{P}(\text{not }A \mid B)=1$ for any $A,B$.

```{solution-end}
```

```{solution-start} glee
:class: dropdown
```
Binomial coefficients tell you how many ways you can select $k$ items from a list of $n$, but the $k$ items are not ordered. 

The president/VP pair is ordered and the co-preseident pair is not. Only the co-president pairings are counted by $\binom{3}{2}$. There will be twice as many president/VP pairings because (Alice, Bob) and (Bob, Alice) are considered distinct. 
```{solution-end}
```

```{solution-start} turnout
:class: dropdown
```

a.) $\mathbb{P}(3D) = \mathbb{P}(0D) =\frac{1}{8}$, $\mathbb{P}(2D) = \mathbb{P}(1D) = \frac{3}{8}$

b.) Democrats win if either of these events occur:

1. Three democrats vote (1/8).
2. Two democrats vote and 1 or 0 republicans vote ($\frac38 \times (1-\frac{9}{16})$).
3. One democrat votes and 0 republicans vote ($\frac38 \times \frac{1}{16}$).

These are mutually exclusive events. Summing them, the probability that democrats win is $\frac{5}{16}$.

c.) Now, a democrat votes with probability $1 - \frac{1}{2}^2 = \frac34$ and a republican votes with a probability $1 - \frac{1}{4}^2 =\frac{15}{16}$. We can repeat parts a and b with these probabilities.

$\mathbb{P}(3D) = \mathbb{P}(2D) = \frac{27}{64}$, $\mathbb{P}(1D) = \frac{9}{64}$,  $\mathbb{P}(0D) = \frac{1}{64}$

$\mathbb{P}(2R) = \frac{225}{256}$, $\mathbb{P}(1R) = \frac{30}{256}$,  $\mathbb{P}(0D) = \frac{1}{256}$

Democrats win with a probability of at least $\frac{27}{64}$ because they always win if there are 3 democrats who vote. Therefore the probability that democrats win increases. 

d.) Democrats will prefer more early voting according to this model, as it decreases the Republican turnout advantage.


```{solution-end}
```



## [Probability II](bayes)


```{solution-start} boxes
:class: dropdown
```

1. $\mathbb{P}(H) = 0.5$
2. $\mathbb{P}(\text{box with two Ts} \mid H) = 0$ because the box must have an $H$ to draw an $H$. 
3. $$\mathbb{P}(\text{box with two Hs} \mid H) = \frac{ \mathbb{P}(H \mid \text{box with two Hs}) \mathbb{P}(\text{box with two Hs})}{\mathbb{P}(H)} $$

$$= \frac{1\times 0.25}{0.5} = 0.5$$

4. To find $\mathbb{P}(\text{H on second draw} \mid \text{H on first draw})$, the subtlety is that these are not independent. The unconditional probability is $\mathbb{P}(\text{H on second draw}) = 0.5$. This allows for the possibility of a box with two $T$s. An $H$ on the first draw reveals that the box does not have two $T$s, which will push our probability up. The intuititive answer of 0.5 is therefore *wrong*. For a similar problem, see also the famously difficult [boy girl paradox](https://en.wikipedia.org/wiki/Boy_or_girl_paradox).


**4 - Solution 1**
The first draw reveals there is an $H$ in the box. By part 3, we know there is a 0.5 probability the box contains two $H$s. The probability of an $H$ on the second draw is  


$$ \underbrace{\frac{1}{2}}_{a} \cdot \overbrace{1}^{b} + \underbrace{\frac{1}{2}}_{c} \cdot \overbrace{\frac{1}{2}}^{b} = \frac{3}{4}.$$


| Term | Probability of ... given $H$ on first draw               |
|------|----------------------------------------------------------|
| $a$  | box with two $H$s                                        |
| $b$  | $H$ given two two-$H$ box                                |
| $c$  | box with one $H$ and one $T$                             |
| $d$  | $H$ given two one-$H$-one-$T$ box                        | 

Each ticket is marked $H$ or $T$ independently and with equal chance, so $d$ is $\frac{1}{2}$. 


**4 - Solution 2 (my favorite)**

This solution is remarkably similar to the previous, but with a different interpretation. The first draw reveals there is an $H$ in the box. Half of the time you will draw the same exact ticket on your second draw. This always gives an $H$, but you can also get an $H$ by drawing the other ticket. The other half of the time you draw the other ticket. The other ticket is an $H$ half the time.

The conditional probability of an $H$ on the second draw given an $H$ on the first draw can be expanded as the sum of the probability of *the same ticket and $H$* and the probability of *a different ticket and $H$*, all conditional on $H$ on the first draw. The answer is

$$ \underbrace{\frac{1}{2}}_{\alpha} \cdot \overbrace{1}^{\beta} + \underbrace{\frac{1}{2}}_{\gamma} \cdot \overbrace{\frac{1}{2}}^{\delta} = \frac{3}{4}.$$

| Term     | Probability of ... given $H$ on first draw             |
|----------|--------------------------------------------------------|
| $\alpha$ | the same ticket is drawn again (an $H$).               |
| $\beta$  | $H$ given the same ticket is drawn second              |
| $\gamma$ | drawing the other ticket (which can be $H$ or $T$)     |
| $\delta$ | $H$ given the other ticket is drawn second             |


Each ticket is marked $H$ or $T$ independently and with equal chance, so $\delta$ is $\frac{1}{2}$. 

**4 - Solution 3 (the worst)**

Now we attempt to solve this by applying Bayes Theorem directly. It's important to get the notation clear. Let $H_2$ denote getting an $H$ on the second draw and $H_1$ is an $H$ on the first. We want to find $\mathbb{P}(H_2 \mid H_1)$. Bayes Theorem tells us

$$\mathbb{P}(H_2 \mid H_1) = \frac{\mathbb{P}(H_1 \mid H_2) \mathbb{P}(H_2)}{\mathbb{P}(H_1)}.$$

This doesn't do much to simplify the problem because $\mathbb{P}(H_1 \mid H_2)$ is no easier to solve for and we'll end up repeating calculations from Solution 1 or Solution 2 to find $\mathbb{P}(H_1 \mid H_2) \mathbb{P}(H_2) = \mathbb{P}(H_2 \text{ and } H_1).$ It's tempting to write this as $\mathbb{P}(H_1) \times \mathbb{P}(H_2)$, but these are dependent events so we can't. A tree is helpful. 

For a single draw. 
```{figure} images/tikz/HTrandomboxTree.svg
:width: 70%
:name: HTrandomboxTree2
```

For two draws. 
```{figure} images/tikz/HTrandomboxTree2Draws.svg
:width: 70%
:name: HTrandomboxTree2Draws
```

Therefore the probability of $H_1$ and $H_2$ is $0.5\times 0.25 + 0.25 \times 1 = \frac{3}{8}$. Plugging this into the formula for $\mathbb{P}(H_2 \mid H_1)$, we get 

$$\dfrac{\frac{3}{8}}{\frac{1}{2}} = \frac{3}{4}.$$ 

It follows that $\mathbb{P}(H_1 \mid H_2)$ is also $\frac{3}{4}$ because the unconditional probabilities of $H_1$ and $H_2$ are both $\frac{1}{2}$.

[Here is a Google Sheets simulation](https://docs.google.com/spreadsheets/d/1xlryzoPWZ05K4SeHVzZHiCC4yQ-XhLVaZChy-gYoWRc/edit?usp=sharing).


```{solution-end}
```

```{solution-start} bayesraredisease
:class: dropdown
```

What are trying to find the probability that someone has the rare disease given a positive test. We'll use a natural frequencies approach to find

$$\mathbb{P}(\text{disease} \mid \text{positive}) = \mathbb{P}(\text{positive and disease}) / \mathbb{P}(\text{positive}).$$

In a population of 990,000 people (99$\times$10000), we expect 99 to have the diease. Of those, 99% will test positive. This is 99-.99 = 98.01. We expect 989,901 not to have the disease. Of those, 1% will get a positive result, or 9899.01. Together, 9899.01 + 98.01 = 9997.02 get a positive test result

Thus, the conditional probability is about 98/9997, which is less than 1%. 

```{solution-end}
```


```{solution-start} bballbayes
:class: dropdown
```

An unknown player makes their first shot 50% of the time. This is calculated as

$$0.5\times 0.9 + 0.5 \times 0.1.$$ 

Simplifying yields $0.5(0.9 + 0.1) = 0.5$.


Suppose there were 200 players. We can expect 100 scrubs and 100 ballers. The ballers make 90 shots and the scrubs make 10. There are 100 makes total.

The probability of a scrub is now $\frac{10}{100}$ and the probability of a baller is now $\frac{90}{100}$. The second shot goes in with probability 

$$0.9\times 0.9 + 0.1 \times 0.1 = 0.81 + 0.01 = 0.82.$$ 

From the observer's perspective, the first and second shots are not independent. With more shots observed, they are beginning to learn the player's type. In other words, you should be more willing to pass to someone who makes their first shot because you should have greater confidence that the second shot will go in. 
```{solution-end}
```


```{solution-start} bayesReview
:class: dropdown
```

$\mathbb{P}(\text{good review}) = 0.75$

$\mathbb{P}(\text{good review} \mid H) = 1$ 

$$\mathbb{P}(H \mid \text{good review}) = \frac{\mathbb{P}(\text{good review}\mid H)\mathbb{P}(H)}{\mathbb{P}(\text{good review})}$$

$$ = \frac{1 \times 0.5}{.75} = \frac{2}{3}.$$

The probability tree is shown below.

```{figure} images/tikz/productreviewtree.svg
:width: 70%
:name: productreviewtree
```

These events are dependent because $\mathbb{P}(H \mid \text{good review}) \neq \mathbb{P}(H)$.

If the truth-teller is replaced by a joker, then $\mathbb{P}(H \mid \text{bad review}) = 1$. The fake reviewer always leaves a positive reviewer, so the probability is the same as $\mathbb{P}(H \mid \text{joker and bad review})$ and the joker only leaves a bad review if the product is of good quality.

```{solution-end}
```


```{solution-start} bayesCountry
:class: dropdown
```

4/63 songs mention tractor and 14/63 mention truck. 

2 of the 14 mentioning truck mention tractor. 

2 of the 4 mentioning tractor mention truck. This can be calculated by simplying inspecting the data or by solve for the first three and then applying Bayes' Theorem.


$$\mathbb{P}(\text{truck}\mid \text{tractor}) = \frac{ \mathbb{P}(\text{tractor}\mid \text{truck}) \mathbb{P}(\text{truck})} {\mathbb{P}(\text{tractor}) }  = \frac{ \frac{2}{14} \times \frac{14}{63} }{\frac{4}{63}} = \frac{2}{4}.$$

```{solution-end}
```

## [Sampling](sampling)


```{solution-start} incentivesurvey
:class: dropdown
```
1. Non-response bias will be a problem because the survey is voluntary. Less obvious, there is also a selection bias problem among who will see it. The most active users will use the site every day and the more casual users will not. Before considering non-response bias, the sample is skewed to more active users. 

2. This is a simple random sample of the entire user base. 

3. This is designed to combat non-response bias, but providing an incentive for responding.

```{solution-end}
```

## [Confidence Intervals](sampling)

```{solution-start} CInarrow
:class: dropdown
```
More observations will make an interval more narrow. The average itself does not change the width of an interval if this is not for a sample proportion. The average only sets the center of the interval, holding constant the SD.

```{solution-end}
```

## [Hypothesis Testing](hyptest)


```{solution-start} daycare
:class: dropdown
```
The SE is $\sqrt{\frac{.16}{64}}=\frac{0.4}{8} = 0.05$. The test statistic is $\frac{0.3-0.2}{0.05} = 2$. The P-value is about 97.5%. We fail to reject because this is a one-sided case. 

This is the odd case where the test statistic falls in the "wrong" side.

The numbers are made up in this exercise, but this is based on a true story. See "A Fine is a Price" ({cite}`gneezy2000fine`). The authors found that introducing a fine actually increases late pickups. This underscores that you usually need a strong theoretical reason to use a one-sided test instead of just expecting an intervention to operate one way. 
```{solution-end}
```



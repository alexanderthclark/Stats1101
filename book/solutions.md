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

## [Probability](probability)

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
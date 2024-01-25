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

## Experiments


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

## Observational Studies

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


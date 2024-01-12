(natural_exp)=
# Natural Experiments

```{admonition} Important Readings
:class: seealso
- {cite}`rosenbaum2017observation`, Chapter 6 pages 100-108
```

The definition of an experiment specifies that the researcher  manipulates the assignment of treatment and control. This was useful only indirectly so that randomization could be used. A **natural experiment** is an observational study where the assignment is essentially random, though not done by a researcher. A compelling natural experiment is usually more reliable than an observational study that attempts to control for confounders. 

As the name suggests, in a natural experiment, it is nature, broadly defined, who does the randomization. Imagine this policy-relevant comparison: do students who attend a charter school have better educational outcomes than students who don't? In the absence of randomization, it's easy to imagine ways this comparison can be confounded. Luckily, some state laws require that charter school seats are allocated by a random lottery. The lottery mechanism wasn't implemented in concert with researchers---it's just an instance of nature's bounty that allows for an unconfounded comparison of students who win the lottery with those who don't.

Less obvious examples of natural experiments might not involve actual randomization, but feature assignment of treatment and control that isn't related to the relevant qualities of the individuals in the population being studied. Fancier names for this include "exogeneity" or "ignorable treatment assignment." A classic example is the natural experiment analyzed by John Snow {cite}`snow1849mode`.



## Exercises

```{exercise-start}
:label: hurricanes
```

The result is more or less debunked, but it's been argued that hurricanes with typically female names are more deadly because of gender bias. The claim is that people don't take hurricanes with female names as seriously as hurricanes with male names. Suppose we have a data set for all hurricanes that made landfall in the US for the 1900s. For each hurricane, we observe the date of landfall, its name, and the death toll. Each tropical storm is named and the names alternate between male and female over the course of a season. Can this be analyzed as a natural experiment? After some data exploration, you find that there are no male names prior to 1979. Is this a problem? 

```{exercise-end}
```

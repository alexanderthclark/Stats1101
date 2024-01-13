(natural_exp)=
# Natural Experiments

```{admonition} Important Readings
:class: seealso
- {cite}`rosenbaum2017observation`, Chapter 6 pages 100-108
```

In the previous section, we learned to be skeptical of observational studies. In this short section, we add some nuance. There is a kind of observational study, called a natural experiment, that can still offer high quality evidence. 

The definition of an experiment specifies that the researcher manipulates the assignment of treatment and control. This was useful only indirectly so that randomization could be used. A **natural experiment** is an observational study where the assignment is essentially random, though not done by a researcher. A compelling natural experiment is usually more reliable than an observational study that merely attempts to control for confounders. 

As the name suggests, in a natural experiment, it is nature, broadly defined, who does the randomization. Imagine this policy-relevant comparison: do students who attend a charter school have better educational outcomes than students who don't? In the absence of randomization, it's easy to imagine ways this comparison can be confounded. Luckily, some state laws require that charter school seats are allocated by a random lottery. The lottery mechanism wasn't implemented in concert with researchers---it's just an instance of nature's bounty that allows for an unconfounded comparison of students who win the lottery with those who don't. 

Less obvious examples of natural experiments might not involve actual randomization, but feature assignment of treatment and control that isn't related to the relevant qualities of the individuals in the population being studied. Fancier names for this include "exogeneity" or "ignorable treatment assignment." A classic example is the natural experiment analyzed by John Snow. Snow studied a cholera outbreak in London and discovered a contaminated water supply was the cause rather than the prevailing theory of bad air.

Snow compared the customers of two water companies. The Southwark and Vauxhall company served contaminated water and the Lambeth company supplied purer water. What drove the difference was that the Lambeth company had its water intake point above sewage discharges points, but the Southwark and Vauxhall company's instake point was downstream and therefore contaminated by sewage ({cite}`freedman1991statistical`). It's possible that this comparison could be confounded in other ways, but Snow was able to argue this wasn't plausible in {cite}`snow1849mode`. 

> In many cases a single house has a supply different from that on either side. Each company supplies both rich and poor, both large houses and small; there is no difference in the condition or occupation of the persons receiving the water of the different companies...As there is no difference whatever either in the houses or the people receiving the supply of the two Water Companies, or in any of the physical conditions with which they are surrounded, it is obvious that no experiment could have been devised which would more thoroughly test the effect of water supply on the progress of Cholera than this, which circumstances placed ready made before the observer. The experiment too, was on the grandest scale. No fewer than three hundred thousand people of both sexes, of every age and occupation, and of every rank and station, from gentlefolks down to the very poor, were divided into two groups without their choice, and, in most cases, without their knowledge; one group being supplied water containing the sewage of London, and amongst it, whatever might have come from the cholera patients, the other group having water quite free from such impurity.

Above, Snow identifies the two groups and argues they are identical. The customers don't differ in status and, in some neighborhoods of focus, both companies supplied water. Then, Snow argues for something like randomization when he says the people were "divided into two groups without their choice, and, in most cases, without their knowledge." The two groups are those served by the two different companies. If a person's water company is determined in such a haphazard way, it cannot be related to their own potential to get cholera, and this eliminates confounding. 

Snow's natural experiment required more argument than natural experiments involving actual randomization for charter school seats. There is a spectrum to how compelling a natural experiment can be. {cite}`rosenbaum2017observation` is skeptical of comparing two geographic regions with different policies (see pages 104-105), but still grants that the Dutch famine is compelling. 

### Example

Is this compelling? {cite}`braghieri2022social` argues that Facebook had a negative impact on mental health. The analysis is done by "leveraging a unique natural experiment: the staggered introduction of Facebook across US colleges." Facebook used to be limited to college students, and only certain campuses at first. Because Facebook was available on certain campuses and not others, this allows for a treatment-control comparison.


```{dropdown} Facebook and Mental Health

We need more detail on "only certain campuses at first." If the certain campuses were randomly chosen, then we can proceed with confidence. But the campuses were not random. The rollout started at Harvard and later expansion groups generally included less presitigious schools. Could this cause some confounding? We know that Harvard students have good SAT scores and are otherwise selected to be different from other students. This study was published, indicating that some smart people find this to be a compelling natural experiment and it makes a decent addition to the wider research literature on social media and mental health. Still, those differences in colleges might be relevant to issues of mental health, so skepticism is fair.

```

## Exercises


```{exercise-start}
:label: california
```

California has higher taxes than South Dakota and South Dakota has had higher GDP growth recently. Is this a natural experiment that can be used to understand the effect of taxes? 

```{exercise-end}
```



```{exercise-start}
:label: earlyclass
```

A university has 200 students who must all take a specific calculus class offered at either 8am or 1pm. Each section is taught by the same instructor and the class size is capped at 100 students. The university randomly assigns students to the two sections. Students can switch sections if they find another student who will trade seats, but assume that all students prefer the 1pm section. 

Can this be used as a natural experiment to study the effect of an early-morning class on learning outcomes? What if not all students prefer the 1pm section? 
```{exercise-end}
```


```{exercise-start}
:label: hurricanes
```

The result is more or less debunked, but it's been argued that hurricanes with typically female names are more deadly because of gender bias. The claim is that people don't take hurricanes with female names as seriously as hurricanes with male names. Suppose we have a data set for all hurricanes that made landfall in the US for the 1900s. For each hurricane, we observe the date of landfall, its name, and the death toll. Each tropical storm is named and the names alternate between male and female over the course of a season. Can this be analyzed as a natural experiment? After some data exploration, you find that there are no male names prior to 1979. Is this a problem? 

```{exercise-end}
```


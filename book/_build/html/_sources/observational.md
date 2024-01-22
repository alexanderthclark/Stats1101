(observational_studies)=
# Observational Studies

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapter 2
```

In an **observational study**, the researcher does not assign subjects to the compared groups. That means we should not expect the groups to be similar. We could still call one group treatment and one group control, but if we are comparing the health of people who choose to take vitamins to those who choose not to take vitamins, we cannot expect the difference to be attributable to the vitamin.

To avoid overstatement, we might say there is an observed **association** between vitamin-intake and better health instead of making a causal claim. Again, the potential for confounding is what prohibits us from making a stronger claim about a causal relationship. 

We can try to make the treatment and control groups more similar by **controlling** for confounders. You can think of this as trying to do by hand what randomization does for free. For example, if vitamin-takers are wealthier, we can compare subsets with similar wealth. Comparisons between more homogeneous groups are more reliable.

Controlling is not a panacea because you can never know if you've controlled for everything important. This isn't hyperbole, unconfoundness is not a testable thing. Income is important, but you shouldn't expect that adjustment to make an observational study as reliable as a randomized controlled experiment. As {cite}`freedman2007statistics` states, "finding the weak points is more an art than a science." It's easy to imagine vitamin-takers being rich and then richer people being healthier. However, what makes one rich person take a vitamin and one not take a vitamin? It doesn't seem right to regard that choice as essentially random. The vitamin-taker might be more interested in health, so they could be healthier already. This would make it look the vitamin is effective when it is not. Or, the vitamin-taker might be trying to improve areas where they know their health is lacking. Someone who only eats cookies might take a vitamin to round their diet. This would make it look like the vitamin is counter-productive. See also the examples in {cite}`freedman2007statistics` Chapter 2.3. Practice being the gadfly who proposes a confounder that isn't controlled for. 

William Cochran describes two characteristics for certain types of observational studies {cite}`cochran1965planning`:
1. "The objective is to elucidate cause-and-effect relationships."
2. "It is not feasible to use controlled experimentation."

Neither of the two points above are *defining* features of observational studies, but they explain why observational studies are used, despite not being as reliable as a well-designed experiment. The first point means we are still making some comparison where the effect of the treatment is of interest. Second, Cochran was a member of the panel that wrote the 1964 US Surgeon General's report on smoking and health, so he likely had in mind the impossibility of any lab or government forcing certain people to smoke others not to smoke. Some experiments can't be run for ethical reasons and others are prohibitively expensive. The RAND health insurance experiment (from {numref}`rand`) cost about \$400 million in 2023 dollars, meaning it's unlikely something similar will be funded again.

## Simpson's Paradox

Controlling for potential confounders can reverse the associations found in data, underscoring the importance of a controlled analysis. When this happens, it's said to be an instance of **Simpson's Paradox**.

### Example
{cite}`bickel1975` analyze the case of possible sex bias in graduate admissions at UC Berkeley. Sex can be considered the treatment variable and admission decisions are the outcome. If there is a difference between groups, that might indicate bias. We'll see what appears to be a paradox. Women have a lower admission rate overall. However, when looking at admission rates for specific majors, there was no bias against women on the whole. {cite}`freedman2007statistics` run through the data in Chapter 2.4.

The following is a simplification to help understand this paradox, with these two seemingly clashing facts:

1. Women are admitted at a lower rate overall.
2. Women are admitted at a higher rate within each major.

The paradox arises if women are more likely to apply to programs with lower admission rates. Suppose there are 120 women and 120 men. There are two majors, A and B, that have their own independent admission standards. In major A, 100% of applicants are admitted. In major B, 20% of applicants are admitted. This is the admission rate for both men and women. {numref}`applicant-table` and {numref}`admit-table` below demonstrate the paradox when men apply to major A more often.

```{list-table} Applicants
:header-rows: 1
:name: applicant-table

* - 
  - Major A
  - Major B
  - Total
* - Men
  - 70
  - 50
  - 120
* - Women
  - 20
  - 100
  - 120
* - Total
  - 90
  - 150
  - 240
```

```{list-table} Admits
:header-rows: 1
:name: admit-table

* - 
  - Major A
  - Major B
  - Total
* - Men
  - 70
  - 10
  - 80
* - Women
  - 20
  - 20
  - 40
* - Total
  - 90
  - 30
  - 120
```

Simpson's paradox can also be seen in scatter plots. In {numref}`simpsonscatter`, the overall trend is negative, but this might come from confounding that distorts two flat trends. Turning this into a concrete example, it might be that $x$ measures the level of a continuous treatment, like the dosage of a medicine, and $y$ measures a health outcome. The overall trend is that the medicine has a negative effect on health. However, if there is one group of young people who take low dosage (the X points) and a group of old people who take a high dosage (the O points), then age is confounding the comparison and obscuring the truth of no effect. 

```{figure} images/tikz/simpsonscatter.svg
:width: 80%
:name: simpsonscatter

The overall trend is negative even though the trend is flat within each subset.
```

## Extension: Other Potential Worlds

In this section, we imagine ways observational studies can be confounded and make it concrete by writing down potential, or counterfactual outcomes. We show that differences in group averages can be misleading because (1) groups can be different to begin with, or (2) groups can respond to a treatment differently.

Imagine that Alice and Bob both got the flu shot and both get the flu. Alice is happy she got the shot nonetheless, believing she would be a lot more sick if not for the flu shot. Bob believes the shot did nothing but line the pockets of big pharma and that he'd be no worse off if he didn't get the shot. Both are thinking about a counterfactual when they think about *if* they didn't get the flu shot. If their health can be quantified, we might write this down like in the following table:

```{list-table} Health Outcomes According to Alice and Bob's Beliefs
   :header-rows: 1
   :name: shotbeliefs

   * - Person
     - Shot
     - No Shot
     - Believed Effect of Shot (treatment)
   * - Alice
     - -1
     - -2?
     - +1?
   * - Bob
     - -1
     - -1?
     - 0?
```

The individual effects are based on the difference between the two potential outcomes. We can't observe it because we don't observe the "No Shot" column, but Alice believes the effect was positive, and Bob believes it was zero. A table like this is helpful in describing two ways observational studies can be misleading.


### College and Earnings

Take the example of college. On my elementary school front door, there was posted a flyer that showed how college graduates earn more money than non-graduates. We were being told that college would make us richer, and reading between the lines, this was implying a causal relationship. This was based on observational data, so let's describe two ways it can be wrong to infer a causal effect. 

First, it can be that everyone who goes to college has higher earning potential to begin with. The following table shows that college has no effect on earnings because the College and No College columns are the same.

```{list-table} College as a Signal of Ability
   :header-rows: 1
   :name: posignal

   * - Person
     - College
     - No College
     - Observed Choice
     - Observed Income
   * - Anna
     - 100,000
     - 100,000
     - college
     - 100,000
   * - Boris
     - 100,000
     - 100,000
     - college
     - 100,000
   * - Chad
     - 30,000
     - 30,000
     - no college
     - 30,000
   * - Doris
     - 30,000
     - 30,000
     - no college
     - 30,000
```

In any study, we only observe the last two columns. If we compare group averages, we'll see that graduates earn \$100,000 salaries and non-graduates earn \$30,000. But the naive belief that college will increase your earning by an average of \$70,000 is wrong. Because of the lack of randomization in education levels, these two groups are not similar. The graduates would have earned more money regardless of their education level.

Second, it can be that people who choose to go to college get more out of college. That is, graduates and non-graduates might have been the same if none of them attended college, but it is only those choosing to attend who use the time to boost their earning potential. 


```{list-table} College Increases Earnings for Certain Individuals
   :header-rows: 1
   :name: pohet

   * - Person
     - College
     - No College
     - Observed Choice
     - Observed Income
   * - Erma
     - 80,000
     - 30,000
     - college
     - 80,000
   * - Fred
     - 80,000
     - 30,000
     - college
     - 80,000
   * - Gina
     - 30,000
     - 30,000
     - no college
     - 30,000
   * - Harry
     - 30,000
     - 30,000
     - no college
     - 30,000
```

The observed difference in group averages will be \$50,000, but this isn't a causal effect that we should expect to apply to those not choosing to attend college. With a randomized experiment, the effect would be cut in half. The non-graduate group would average \$30,000 and the average graduate salary would be \$55,000. At the population level, the average benefit of college is +\$25,000.

In both of these examples, we could point out ways an observational study would overestimate the effect of college on earnings *if* the tables accurately described the counterfactuals. 

### Vacations to Italy

If you compare yourself to happier tourists in Italy, there are many ways that comparison can be confounded. It doesn't have to be Italy that's making those people happier. In the "Romano Tours" SNL skit, Adam Sandler plays the role of a salesman for tours to Italy. He doesn't use the language of statistics, but he is essentially telling his listeners to be careful about inferring certain causal effects from promotional materials or from observing other people's experience. Trying to temper expectations after encountering disappointed customers in the past, he is honest about the limitations of a vacation as a treatment. He is describing something similar to the examples above. 

<div style="position: relative; width: 75%; overflow: hidden; margin: auto; padding-top: 42.1875%;">
    <iframe src="https://www.youtube-nocookie.com/embed/TbwlC2B-BIg?si=1H_VIitPD65JDHJr" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
    </iframe>
</div>

Which of these quotes highlights a kind of confounding more similar to that in {numref}`posignal`? Which is more similar to {numref}`pohet`?

1. "If you are sad where you are, and then you get on a plane to Italy, the you in Italy will be the same sad you from before."
  
2. "We can take you to the Italian Riviera. We cannot make you feel comfortable in a bathing suit."
  
```{dropdown} Romano Tours

The first is similar to the example in {numref}`posignal`, where expectations might be distorted by having observed other, happier people on vacation. The quote basically rules out any changes to happiness, making it unlike {numref}`pohet` which allows for a treatment effect for certain types. 

The second is closer to the example in {numref}`pohet`. Only certain types of people will respond favorably to the treatment. You can imagine two equally happy people at the Riviera, but only one will feel comfortable enough to have their happiness increase. 

```


## Exercises

```{exercise-start}
:label: medprog
```

(From {cite}`may1972social`) A journal commented editorially that "age-specific death rates from breast cancer have remained constant for 35 years. This constancy indicates that no significant advances in methods of treatment of breast cancer have been made." Age-specific death rates are obtained by dividing the number of deaths by the number of women in a specified age group. An example of "constancy" would be if 13 out of every 1000 fatalities among women between the ages of 35 and 45 resulted from breast cancer in the years 1940, 1945, 1950, 1955, 1960, 1965, and 1970. Discuss whether, and to what extent, the constancy in age-specific death rates does plausibly indicate that indeed no significant advances in methods of treating this malady have occurred. Could the factual premise be true and the inference false? How? 

```{exercise-end}
```



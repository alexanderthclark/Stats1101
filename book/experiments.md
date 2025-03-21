(experiments)=
# Experiments

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapter 1
```

# Types of Questions

Before continuing with this chapter and the next, it is helpful to understand that statistics can be used to answer *causal* questions and to answer *non-causal* questions. A causal question is one like, "Does this vaccine prevent this disease?" or "Does a 'no excuses' charter school produce better learning outcomes?" Non-causal questions might include "Will my business do better if I hire Columbia graduates instead of CUNY graduates?" or "At what age does an artist peak?"

Causal questions seek to understand the impact of something like a vaccine to understand the impact of an actual intervention where more people are vaccinated as a matter of medical guidance or policy. Similarly, the study of a charter school leads to a causal question because we want to know if we can actually attribute student success to the school and not to pre-existing differences between the students who do and do not attend charter schools.

A non-causal question might be a matter of mere prediction. Hiring managers will use your Columbia degree as a predictor of your qualifications for a job. They can predict that you will be intelligent and easy to train. The cause of those qualities might be Columbia, but for the purposes of the hiring manager, it doesn't matter if you possessed these qualities prior to arriving on campus. The true cause could be something not on your resume—perhaps your genetics, the water quality in your hometown, or your formation in preschool. The Columbia degree is only valuable as a signal. It will remain valuable so long as there is no shock that changes the statistical relationship, like if the [U.S. News scandal](https://www.nytimes.com/2022/03/17/us/columbia-university-rank.html) were to lower the prestige of the university and thus the quality of students or faculty.

And there are many other types of non-causal questions. Some have merely descriptive purposes, for example. It's fun to marvel at stats that describe Michael Jordan's basketball career or Shakespeare's influence. {cite}`galenson2006old` studies the life cycles of artists, categorizing artists who tend to peak early versus those who peak later in life. On the surface, this makes no explicit prediction and doesn't propose a causal theory of creativity. The descriptive statistics might inform further theorizing that might creep into causal or predictive territory, but the statistics are interesting in and of themselves. It tells us something about how creativity can work and challenges a simplistic belief that "artists peak early."

(typesEvidence)=
## Types of Evidence

For answering any questions, evidence can be more or less reliable. Practitioners often speak of a hierarchy of evidence. A simple hierarchy for our purposes is the following (based on {cite}`kohavi2020trustworthy`). We'll discuss 2-4 over the next three sections. 

1. Systematic reviews of randomized controlled experiments (e.g. replications and meta-analysis)
2. Randomized controlled experiments
3. Non-randomized experiments and natural experiments
4. Observational studies
5. Case studies, anecdotes, opinion (from both experts and the New York Post comments section)


# Experiments

Suppose we want to know if a vitamin improves a measurable health outcome. Making progress on this question requires the **method of comparison**. The vitamin can be considered a **treatment** and those who take the vitamin are considered treated or in the **treatment group**. Their health will be compared to the health of those in a **control group**. People in the control group take nothing or perhaps some alternative.

The clip below speaks to the importance of having a control group. Lisa Simpson sells a "tiger-repelling rock" to her father. She is able to do this by appealing to Homer's false belief that the presence of the rock is why he's not suffered any tiger attacks. He's imagining that in a control setting with no rock, tigers would be prowling in Springfield.

<div style="position: relative; width: 75%; overflow: hidden; margin: auto; padding-top: 42.1875%;">
    <iframe src="https://www.youtube-nocookie.com/embed/fm2W0sq9ddU?si=wJnc2V42JxHZaTkZ" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
    </iframe>
</div>

<br>

Of course, we shouldn't imagine a control group. We must actually observe a control group. A control group helps us answer the "but-for test." This is used in courtrooms, posing the question, "But for the defendant's actions, would the harm have occurred?" In the vitamin example, but for the vitamin, would health have improved? 

Can we use the method of comparison to measure the effect of the vitamin once we have a group taking the vitamin and another not taking the vitamin? Not yet. It is important that the control and treatment groups are similar in every other relevant way. With no other dissimilarities, the difference in health outcomes can be fully attributed to the vitamin. A study where individuals themselves choose if they take a vitamin is less reliable. People who *choose* to take vitamins are going to be systematically different than those who choose not to take a vitamin. One, they'll be able to afford vitamins. Two, they'll be interested in their own health, so their baseline health or other behaviors might be different than the control group.

To avoid this problem, we use **experiments**, where the assignment of treatment and control is understood by and done by the researcher. Of course, it would be bad if a researcher assigned the vitamin exactly to the group who would have chosen to pay for vitamins or to those who expressed the most interest in taking vitamins. This wouldn't be any better than not having the researcher choose the treatment and control groups. To ensure the similarity of both groups, researchers do the assignment randomly, creating a **randomized controlled experiment**. These are sometimes called by different names, like randomized controlled trials. In a business setting, it might be called an A/B test.

Randomization solves the problem of **confounding**. In the scenario where the people who take vitamins are those who are more interested in their own health, we can also expect them to eat healthier and exercise more. The method of comparison doesn't work because the group differences will mix the effects of these factors. The effect of the vitamin is said to be **confounded** and the other behaviors are called **confounders**.

Time can also be a confounder, meaning it's better to use contemporaneous controls. This rules out something like comparing the health outcomes of those currently enlisted in the US Navy who take vitamins to 18th century sailors who only ate hardtack. In the intervening centuries, much changed and the groups differ by much more than their vitamin regimens. Comparing groups from closer time periods can also threaten the validity of results.

The problem of confounding from non-randomness is not black and white. Imagine an experiment that uses a treatment group of artists and a control group of accountants. There will be confounders because we can expect demographic and other differences. If the treatment being studied is a kind of bone-setting procedure for people who break their femurs, it's hard to imagine the demographic differences creating any dramatic bias. Something like socioeconomic status is unlikely to influence the biological process of bone healing. If the treatment being studied is the use of AI for a creative storytelling task, then the confounders are more relevant.

## On Designing and Interpreting Experiments

The above describes the basic usefulness of experiments for answering causal questions. An experiment worth running involves a lot more care than "try stuff and see what happens." We avoid the problem of confounding when using randomized controlled experiments. Still, there's much more to designing an experiment. For example, the control group might be given a *placebo*, especially in experiments where the outcome might be based on the self-reports of the participants (e.g. reported level of pain). This is a kind of blinding—the participants are blind to their status in treatment or control. It's also possible to use *double blinding*, where someone on the other side, like a doctor evaluating participants, also doesn't know which participants are in treatment or control. This should produce more reliable evaluations and measurements, where the doctor doesn't see a treatment effect when it isn't there.

### Extension: The Gold Standard and Story Time

Experiments are often described as the "gold standard" for causal evidence. Still, we shan't get too carried away with what we might call story time when it comes to interpreting experiments. {cite}`gelman2018benefits` cautions, "The social science and medical research literature is full of papers in which a randomized experiment is performed ... and then story time begins, and continues, and continues—as if the rigor from the randomized experiment somehow suffuses through the entire analysis." The folly of story time usually involves selective analysis or overstating the results. For example, a negative effect might be measured in the short-run, but long-run effects can be different, as in the case of a [Facebook notifications experiment](https://medium.com/@AnalyticsAtMeta/notifications-why-less-is-more-how-facebook-has-been-increasing-both-user-satisfaction-and-app-9463f7325e7d) showing fewer notifications reduce activity in the short-run but increase activity in the long-run.

{cite}`stevenson2023cause` examines experiments in the criminal legal space, finding that most interventions don't produce lasting effects or scale up with the expansion of a program (including both tough interventions, like scared straight programs, and supportive ones, like Barack Obama's "My Brother's Keeper" initiative). Stevenson notes that social change is hard to engineer, so we might still have to interpret results cautiously in these contexts.

Moving to hard science, consider the case of James Lind's investigation of scurvy. {cite}`angrist2014mastering` describes Lind's non-randomized experiment:

> Scurvy, a debilitating disease caused by vitamin C deficiency, was the scourge of the British Navy. In 1742, James Lind, a surgeon on HMS Salisbury, experimented with a cure for scurvy. Lind chose 12 seamen with scurvy and started them on an identical diet. He then formed six pairs and treated each of the pairs with a different supplement to their daily food ration. One of the additions was an extra two oranges and one lemon (Lind believed an acidic diet might cure scurvy). Though Lind did not use random assignment, and his sample was small by our standards, he was a pioneer in that he chose his 12 study members so they were "as similar as I could have them." The citrus eaters—Britain’s first limeys—were quickly and incontrovertibly cured, a life-changing empirical finding that emerged from Lind’s data even though his theory was wrong.

Despite the lack of randomization, this is a good approach that was ahead of its time. Lind didn't understand the role of vitamin C, but he got the essential thing right by recommending citrus—unlike a less disciplined researcher who might have indulged in story time. A bad chain of reasoning might go, (1) citrus is helpful, (2) cider is acidic like citrus, (3) therefore cider is helpful. Luckily, Lind didn't recommend other acidic foods that lacked vitamin C or otherwise attempt to explain why citrus was helpful.

Running an experiment and working with data requires scientific integrity that goes beyond not lying. Here's how Richard Feynman put it in his famous Cargo Cult Science address ({cite}`feynman1999pleasure`).[^1]

[^1]: This is a short address delivered at Caltech's 1974 commencement. I recommend reading it if you're interested in science.

> It’s a kind of scientific integrity, a principle of scientific thought that corresponds to a kind of utter honesty---a kind of leaning over backwards. For example, if you’re doing an experiment, you should report everything that you think might make it invalid---not only what you think is right about it: other causes that could possibly explain your results; and things you thought of that you’ve eliminated by some other experiment, and how they worked---to make sure the other fellow can tell they have been eliminated. Details that could throw doubt on your interpretation must be given, if you know them. You must do the best you can—if you know anything at all wrong, or possibly wrong—to explain it.

Finally, don't forget that we'll mostly be looking at *average* effects. {cite}`deaton2018understanding` sets up this conundrum for the experiment zealot.

> Imagine two schools, St Joseph's and St. Mary's, both of which were included in [a randomized controlled experiment] of a classroom innovation. The innovation is successful on average, but should the schools adopt it? Should St Mary's be influenced by a previous attempt in St Joseph's that was judged a failure? Many would dismiss this experience as anecdotal and ask how St Joseph's could have known that it was a failure without benefit of ‘rigorous’ evidence. Yet if St Mary's is like St Joseph's, with a similar mix of pupils, a similar curriculum, and similar academic standing, might not St Joseph's experience be more relevant to what might happen at St Mary's than is the positive average from the [randomized controlled experiment]? And might it not be a good idea for the teachers and governors of St Mary's to go to St Joseph's and find out what happened and why? They may be able to observe the mechanism of the failure, if such it was, and figure out whether the same problems would apply for them, or whether they might be able to adapt the innovation to make it work for them, perhaps even more successfully than the positive average in the [experiment].

The next sentence of {cite}`deaton2018understanding` starts, "Once again, these questions are unlikely to be easily answered in practice." We have to be comfortable with some ambiguity and tolerate slow progress, as evidence builds and effects are replicated.

## Exercises

```{exercise-start}
:label: exp1
```

In an experiment with a large number of participants, the average income of the treatment group is \$100,000 and the average income of the control group is \$20,000. Describe what kind of problem this might create if we are studying the effectiveness of an electric toothbrush (treatment) vs a non-electric toothbrush (control). 

```{exercise-end}
```


```{exercise-start}
:label: exp2
```

Which of these is best described as a randomized, controlled experiment? Explain why the other choices fail to describe experiments.

* A charter school selects students by lottery due to state law.
* The Internal Revenue Service randomly audits some taxpayers and not others.
* A researcher randomly assigns participants to a high-fat or low-fat diet. 

```{exercise-end}
```



```{exercise-start}
:label: rand
```

The RAND Health Insurance Experiment was used to study the utilization of health care services among people randomly assigned to different health insurance plans. One hypothesis might be that those with more comprehensive coverage overuse medical services because they can do so at no cost. As a simplification, suppose there is one insurance plan covering 100\% of costs and one plan with partial coverage. This is a complicated experiment because of the potential for *attrition*---participants can drop out and be removed from the study. Despite randomization in original assignments, at the end of the study, there was a substantial difference in average number of doctors' visits in the year before the experiment across the two groups. 

Why is it problematic if one group used health care services more intensively than the other prior to the study? 

Speculate on why a participant might drop out and how this might confound the comparison (there is no single right answer). In your answer, provide a reason for why this would affect the 100\% coverage group more or less than the partial coverage group.

```{exercise-end}
```
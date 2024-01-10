# The Histogram

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapter 3
```

You've probably seen histograms before. They are used to summarize data by showing the distribution.  

```{figure} images/normal_histogram.svg
:width: 80%
:name: fig:normalhist

A typical histogram.
```

TKTK


### Extension: Data Visualization and Exploratory Data Analysis

The histogram is an important piece of **exploratory data analysis** (EDA). Notably, {cite}`freedman2007statistics` doesn't cover this topic and we won't attempt to cover it other than this brief mention.

EDA refers to open-ended exploration of data, usually emphasizes visualization and simple descriptive analysis. John Tukey was a statistician who developed the box plot and other methods for exploratory data analysis. {cite}`gelman2021most` names EDA as one of the most important statistical ideas of the past 50 years (emphasis mine):

> Following Tukey (1962), the proponents of exploratory data analysis have emphasized the limitations of asymptotic theory and the corresponding benefits of **open-ended exploration and communication** (Cleveland 1985) along with a general view of data science as going beyond statistical theory (Chambers 1993; Donoho 2017). This fits into a view of statistical modeling that is focused more on discovery than on the testing of fixed hypotheses, and as such has been influential not just in the development of specific graphical methods but also in moving the field of statistics away from theorem-proving and toward a more open and, we would say, healthier perspective on the role of learning from data in science. An example in medical statistics is the much-cited article by Bland and Altman (1986) that recommended graphical methods for data comparison in place of correlations and regressions.

If you are the kind of person who likes data and graphs more than the mathematical aspects of statistics, you should find this exciting. Beyond the exploratory analysis, there is also a lot of work on effective communication with graphs and tables. Communication is often more *explanatory* than exploratory. It depends on the needs of your audience.

Oversimplifying, I would distill works like {cite}`knaflic2015storytelling` and {cite}`schwabish2021better` into two points.

1. Avoid clutter.
2. Use pre-attentive processing.

These are similar ideas, with negative and positive framing. Like in your prose, remove anything distracting. And then, insofar as you are explaining something, actively draw your reader's attention to the important things. For example, use color thoughtfully. Gray out lines that don't need individual attention in a line chart. The first figure below does this well and the next figure fails. Figure {numref}`fig:schwabgray` does this well.


```{figure} images/schwabishgray.png
:width: 410px
:name: fig:schwabgray

A good example of pre-attentive processing used to highlight a national trend and the trends for states of note. From {cite}`schwabish2021better`, page 151.
```

```{figure} images/LI_AI_skills.jpeg
:width: 410px
:name: fig:liaiskills

A bad example from my former colleagues at LinkedIn, showing a lot of clutter and sparking no joy ([source](https://www.linkedin.com/posts/linkedin_people-worldwide-are-adding-ai-skills-to-activity-7122236926580948992-AqxP?utm_source=share&utm_medium=member_desktop)).
```

In a scatter plot with many overlapping points, reduce the opacity of points to make it more clear where the majority of the data lies.

```{figure} images/sheetsopacity.png
:width: 98%
:name: fig:sheetsopacity

In [Google Sheets](https://docs.google.com/spreadsheets/d/1CkrzZAi8d4AkTEGBG6Cb_CRZa6UlT2E1GyopWoVEsUc/edit?usp=sharing), use the chart editor to change the opacity of each point in a scatter plot.
```

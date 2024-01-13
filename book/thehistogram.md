# The Histogram

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapter 3
```

## Summarizing a Distribution

You've probably seen **histograms** before. They are used to summarize data by showing the distribution. 

```{figure} images/normal_histogram.svg
:width: 80%
:name: normalhist

A histogram showing a symmetric, bell-shaped distribution. 
```

{numref}`normalhist` lacks any vertical scale. This is inessential as long as we're only concerned with the *shape* of the data.

A histogram is made of blocks (or bars). Each block has a predetermined **class interval** and thus a width. Given the interval, the height of a block is determined by the data. More specifically, the height is chosen so the *area* of the block is proportional to the number of data points in the class interval. 

{numref}`hist1` summarizes the data set 0, 0, 1, 1, 2, 6, 10, 10, 10, 10. 

```{list-table} Data Frequencies
:header-rows: 1
:name: hist1

* - Value
  - Count
* - 0
  - 2
* - 1
  - 2
* - 2
  - 1
* - 10
  - 4
```

This can be translated into any number of slightly different histograms, depending on how the class intervals are chosen. Let's start with intervals of one-unit width, centered at every whole number. 

Histograms reveal the shape of the distribution, and sometimes interesting irregularities, like in {cite}`freedman2007statistics` Review Exercise 11 and in the following example.

### Example: Sleuthing out Fraud

{cite}`shu2012signing`, titled "Signing at the beginning makes ethics salient and decreases dishonest self-reports in comparison to signing at the end," was retracted in 2021 because of evidence of fraud, uncovered in {cite}`simonsohn_2021`. The retracted research was based on an experiment where customers of an insurance company were asked to report their odemeter readings. Customers signed a statement asserting their honesty, and the statement was either at the top or at the bottom of the form. The presented finding was that it's better to have the statement signed *before* the customer provides the information instead of after. 

Data was collected like in {numref}`drivingdata`. The mileage driven is the difference between the baseline and updated mileage. 

```{list-table} Driving Data
:header-rows: 1
:name: drivingdata

   * - Condition
     - ID
     - Baseline Mileage
     - Updated Mileage
   * - Sign Top
     - 1
     - 896
     - 39198
   * - Sign Bottom
     - 2
     - 21396
     - 63511
```

The alleged fraud in this research was uncovered, in part, because of the use of histograms. The first red flag was the **uniform** distribution in the implied miles driven. It's hard to explain why there appears to be a ceiling so that no customers drove more than 50,000 miles or why driving close to zero miles is not more rare. In general, you would expect something closer to a bell curve. 

```{figure} images/colada98_implied_hist.svg
:width: 80%
:name: impliedhist

A uniform distribution of miles driven is anomalous because other driving data shows a more bell-shaped distribution.
```

Another tip-off comes when reducing the class intervals to be just one-unit wide. This is preposterously narrow if you are only interested in the general shape of a distribution, but it shows something about how people round numbers when reporting them. Equal class interval widths also means that heights and areas represent the same things, both percentages and crowding. {numref}`baselinehist` shows rounding in the reported baseline mileage.

```{figure} images/colada98_baseline_hist.svg
:width: 80%
:name: baselinehist

Spikes in the histogram show that people are more likely to report round numbers at the nearest 1,000. 
```

Checking the reported updated mileage shows no such rounding. 


```{figure} images/colada98_update_hist.svg
:width: 80%
:name: updateehist

Spikes in the histogram are not predominant at the nearest 1,000. 
```

This reveals something interesting. 

1. There is rounding in the baseline mileage.
2. There is no rounding in the updated mileage. 

This suggests something fishy. Maybe it is the insurance customers who report their own mileage in a fishy way. But why round for the baseline but not the updated? *Or* it reveals something fishy about the researchers, who might have manipulated the updated mileage data. These numbers could have been fabricated with a random number generator, hence the lack of human-like rounding. Given the retraction, most favor the latter hypothesis. 



## Variables 

```{figure} images/tikz/typesofvariables.svg
:width: 50%
:name: typestree

```

### Controlling for a Variable

## Extension: Data Visualization and Exploratory Data Analysis

The histogram is an important piece of **exploratory data analysis** (EDA). Notably, {cite}`freedman2007statistics` doesn't cover this topic and we won't attempt to cover it other than this brief mention.

EDA refers to open-ended exploration of data, usually emphasizes visualization and simple descriptive analysis. John Tukey was a statistician who developed the box plot and other methods for exploratory data analysis. {cite}`gelman2021most` names EDA as one of the most important statistical ideas of the past 50 years (emphasis mine):

> Following Tukey (1962), the proponents of exploratory data analysis have emphasized the limitations of asymptotic theory and the corresponding benefits of **open-ended exploration and communication** (Cleveland 1985) along with a general view of data science as going beyond statistical theory (Chambers 1993; Donoho 2017). This fits into a view of statistical modeling that is focused more on discovery than on the testing of fixed hypotheses, and as such has been influential not just in the development of specific graphical methods but also in moving the field of statistics away from theorem-proving and toward a more open and, we would say, healthier perspective on the role of learning from data in science. An example in medical statistics is the much-cited article by Bland and Altman (1986) that recommended graphical methods for data comparison in place of correlations and regressions.

If you are the kind of person who likes data and graphs more than the mathematical aspects of statistics, you should find this exciting. Beyond the exploratory analysis, there is also a lot of work on effective communication with graphs and tables. Communication is often more *explanatory* than exploratory. It depends on the needs of your audience.

Data visualization principles are a mix of objective and subjective rules. The **area principle** is one of the more objective rules, stating that "each data value should be represented by the same amount of area" ({cite}`destats`). This is why it was the *areas* that represented percentages in a histogram and not necessarily the height. 

Oversimplifying, I would distill the more general, subjective rules from into two points ({cite}`knaflic2015storytelling` and {cite}`schwabish2021better`).

1. Avoid clutter.
2. Use pre-attentive processing.

These are similar ideas, with negative and positive framing. Like in your prose, remove anything distracting. And then, insofar as you are explaining something, actively draw your reader's attention to the important things. For example, use color thoughtfully. Gray out lines that don't need individual attention in a line chart. The first figure below does this well and the next figure fails. {numref}`fig:schwabgray` does this well and {numref}`fig:liaiskills` fails.


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


## Exercises

```{exercise-start}
:label: spotskew
```

Most artists on Spotify have uploaded fewer than 10 songs, but a small number of artists are very productive with much larger catalogs. Sketch a histogram with exactly three blocks that is consistent with this. 


```{exercise-end}
```

```{exercise-start}
:label: histmult
```

Provide two different data sets that could produce the following histogram with a single block.

```{figure} images/oneblockhist.svg
:width: 70%
:name: oneblockhist

```

```{exercise-end}
```


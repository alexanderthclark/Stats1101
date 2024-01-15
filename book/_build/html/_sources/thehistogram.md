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

In the previous example, we were working with a specific **variable**, vehicle mileages. A variable is a characteristic recorded for each individual in a study. In a spreadsheet, the individuals usually correspond to rows and the variables are stored in the columns. Mileage is a **quantitative** variable. Something like the car color would be **qualitative** (also called categorical). Qualitative variables describe or categorize something and quantitative variables measure something, usually including units. Quantitative variables necessarily involve numbers, but a number doesn't automatically qualify a variable as quantitative. For example, postal codes are qualitative despite the use of numbers. I grew up in 40422 and now I have an office in the measly zip code of 10027, but subtracting them to find I've regressed by 30,395 doesn't mean anything. In other words, there's no quantitative content in the numbers. A postal code is qualitative. 


```{figure} images/tikz/typesofvariables.svg
:width: 68%
:name: typestree

Variable taxonomy
```


Quantitative variables can be subdivided into discrete and continuous variables. For a continuous variable, you'll always be able to find another value between two other values. The quantities don't come in discrete steps. You could fill a beaker with 1 ounce of water, 2 ounces of water, or any arbitrary amount between 1 and 2 ounces. Water can be measured continuoustly. For a discrete variable, each value has a next highest or next lowest value. Family size is discrete because there are no possibilities between 3 and 4. The lines can be blurry, either because of convention or limits of measurement precision. Ice cream could be measured continuously, just like water. A shop might charge by weight, but it's more likely you'll order by the scoop and they'll shoo you away if you ask for 1.7777777 scoops or if you complain that you asked for 2 scoops and they gave you 1.99999999998. This tension between continuous and discrete will be familiar to anyone who has agonized over a stingy serving of chicken when dining at Chipotle Mexican Grill. 

### Working with Real Data and Real People

Real world data is messy and sometimes inelegantly organized. The 1996-1997 National Organizations Survey ({cite}`kalleberg2001national`) records data on US work establishments, including demographics and revenue among other variables. Revenue is a quantitative variable, but responding establishments could also refuse to answer, respond that they don't know, or choose "not applicable." Perhaps because of technical limitations, all responses are still recorded as numbers. The "Not applicable" response is recorded as -999. "Don't know" is recorded as 88,888,888,888 and "refused to answer" is recorded as 99,999,999,999. These are special *flag values* that aren't meant to be interpreted as dollar amounts like the other values for the variable. Anyone deriving a statistic using the variable would have to remove these observations in their calculations. 

The lesson is to inspect your data and any accompanying documentation. The survey codebook explains these flag values. Preliminary data inspection and a histogram can also help a researcher discover impossible negative values or strange clumps at large values like 99,999,999,999.

Unfortunately, this lesson was a learned only after a mistake was discovered in {cite}`herring2009does`. Herring found that more diverse businesses recorded higher revenue in an observational study, arguing for the business case for racial and gender diversity. {cite}`stojmenovska2017does` found the mistakes in the calculations and argued for no effect on the basis of other statistical details. This necessitated the follow-up {cite}`herring2017diversity`, which argued in support of the original hypothesis with an updated analysis. 

The above is a cautionary tale and highlights the necessity of dealing with missing values or coaxing an answer out of the respondents. We'll discuss surveys in Chapter 19, but it's worth noting here that the structure of a variable can impact the quality of a study. Netflix switched from a 1-5 stars scale for ratings to a thumbs up/thumbs down scale. This led to a [200% increase in users rating titles](https://www.businessinsider.com/why-netflix-replaced-its-5-star-rating-system-2017-4). 


## Controlling for a Variable


Recall a confounder is a variable that can distort the comparion of two groups. In an observational study, it's a good idea to compare the distributions for confounders between your treatment and control group.  

When a potential confounder is quantitative, 



```{figure} images/histogram_goncalves_mello.png
:width: 62%
:name: speedingrace

Figure 2 from {cite}`goncalves2021few`.
```

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

```{exercise-start}
:label: qualquant
```

Classify each of the following variables as qualitative or quantitative.

* car color
* number of cars owned
* number of red cars owned
* saturation of car color


```{exercise-end}
```



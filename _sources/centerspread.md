(center_and_spread)=
# Center and Spread

Previously, we summarized data with a histogram. Visual representations sometimes lack simplicity or precision, so now we describe a distribution with just two numbers. The average describes the center of the data and the standard deviation describes its spread. Alternatives for center and spread include median and interquartile range, respectively. 

## The Average

The **average** of a list of $n$ numbers is their sum, divided by $n$. Typical notation for an average is $\bar{x}$ or $\mu$. If you prefer,

$$\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i.$$

The **median** is the number in the middle of an ordered list of numbers. If there's an even number of numbers, average the middle two numbers. The median is less affected by extreme values. If I have a list of numbers 1, 2 and 3, then the average and the median are both 2. 

```{figure} images/hist_with_mean_median.svg
:width: 87%
:name: mean_median_sym

The average and median are similar for a symmetric distribution. 
```

If we extend the list to include 94, then the average increases to 25 and the median increases to just 2.5. Is 25 or 2.5 more representative of 1, 2, 3, 94? It depends on how you might use the statistic. The median is often preferred in cases like these to avoid the influence of an extreme value. {numref}`mean_median_skew` shows two skewed distributions with vertical line for the average and the median. Which line marks the average and which line marks the median?  


```{figure} images/skewed_hist_mean_median.svg
:width: 87%
:name: mean_median_skew

Which line is the average? The median? 
```

```{dropdown} Median vs Average

The heavier, orange line marks the average. The white line marks the median. 

```

While the median will split a histogram so that there is equal area on either side, the histogram balances when supported at the average. Imagine balancing either of the histograms in {numref}`mean_median_skew` at the median. The histogram would tip toward the long tail because of the leverage exerted by the extreme values. 


## The Standard Deviation

### Preamble: Root Mean Square

The **root mean square** size of a list is the (1) square *root* of the (2) *mean*, aka average, of the (3) *square*d entries. This says something about the size of a list.[^1]

[^1]: The rms formula is similar to the formula for Euclidean distance, from the origin to the list of numbers as a single point in a coordinate system. The Euclidean distance also measures a kind of size, but without averaging. 

$$ \text{root mean square size of a list} = \sqrt{\frac{1}{n}\sum_{i=1}^n x_i^2} $$

The r.m.s. doesn't change if you change the sign on any of the numbers. It says something about the typical absolute size of a number in the list. The average of the absolute values would also do that, but as {cite}`freedman2007statistics` says, "it fits in better with the algebra [statisticians] have to do." Squaring helps us ignore the sign, we average to get some notion of what's typical, and then we take the square root to return to the original units. 

### The Standard Deviation

The **standard deviation (SD)** is a measure of spread in a list of numbers. The spread is in reference to the center, so for a single entry, we talk of the deviation from the average,

$$\text{deviation = entry - average}.$$


For a list of numbers, the SD is the root mean square size of each deviation. If the list of numbers is -1 and 1, then we find the SD as follows. 

1. The average of the entries is $\frac{-1+1}{2} = 0$.
2. The deviations are $-1-0$ and $1-0$, or $-1$ and $1$. 
3. The rms is $\sqrt{ \frac{1}{2}(-1^2 + 1^2) } = \sqrt{1} = 1$.

Make a table if it helps with more complicated examples. Below, we find the SD for the list 1,2,3,4,5. The average is 3. 

```{list-table} Finding the standard deviation
:header-rows: 1
:name: sd-table

* - Entry
  - Deviation
  - Squared Deviation
* - 1
  - 1-3 = -2
  - 4
* - 2
  - 2-3 = -1
  - 1
* - 3
  - 3-3 = 0
  - 0
* - 4
  - 4-3 = 1
  - 1
* - 5
  - 5-3 = 2
  - 4
* - *average*
  - *0*
  - *2*
```
The SD is the square root of the average squared deviation, so SD = $\sqrt{2}$.

#### Population vs Sample, SD vs SD<sup>+</sup>

Our particular calculation for SD is technically the *population standard deviation*, as opposed to the *sample standard deviation*, which we call SD<sup>+</sup>
. These are calculated slightly differently. SD<sup>+</sup> doesn't use the average squared deviation, dividing by $n-1$ instead of $n$:

$$\text{SD} = \sqrt{ \frac{1}{n} \sum_{i=1}^n(x_i-\bar{x})^2 }.$$

$$\text{SD}^{+} = \sqrt{ \frac{1}{n-1} \sum_{i=1}^n(x_i-\bar{x})^2 }.$$

This is important to appreciate if you are using random calculators. In Google Sheets, use `STDEVP` for the SD. 

We'll cover samples, where you observe data for just a subset of a larger population, later in the course. For now, you can imagine everything is the entire population. 

#### What the SD Says

The standard deviation describes the spread in the data, or the typical size of deviations from the average in a list of numbers. 

I like to think of it in terms of a prediction exercise. If your prediction algorithm for a number drawn from the list is "always guess the average," the SD helps summarize the expected prediction error.  

We keep using the word "typical" in a vague way. The 68-95 rule is a rule of thumb that helps explain what kind of yardstick the SD is. 

**The 68-95 rule** says that roughly 68% of entries in a list are within one SD of the average. About 95% of entries are within two SDs of the average. This is true if the data is normally distributed (Chapter 5). 



## Exercises 

```{exercise-start}
:label: sdproperties
```

Find the SD for -1, 1. Find the SD for -1, -1, 1, 1. Find the SD for 0, 2. Comment on the similarities between the first list and the other two. 

```{exercise-end}
```


```{exercise-start}
:label: sd_add_avg
```

True or False? Extending a list of numbers to include the average will always decrease the standard deviation. Justify your answer.


```{exercise-end}
```

```{exercise-start}
:label: starnetwork
```

Suppose Taylor Swift launches her own social network. Members can follow Taylor Swift and nobody else. As a courtesy, Swift follows everyone back. Can the average number of followers on the network ever exceed two? Will it always be greater than one? Is the distribution skewed or symmetric? Use a calculator to find the SD for the number of followers if the network has 10 members in addition to Taylor Swift (11 total). Does the 68-95 rule hold? 


```{figure} images/tikz/hubspokestrio.svg
:width: 87%
:name: tswiftnetwork

An illustration of possible networks. The yellow circle represents Swift and the other circles represent other members. The labels are the number of followers.
```


```{exercise-end}
```

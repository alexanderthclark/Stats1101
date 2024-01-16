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

The r.m.s. doesn't change if you change the sign on any of the numbers. It says something about the typical absolute size of a number in the list. The average of the absolute values would also do that, but as {cite}`freedman2007statistics` says, "it fits in better with the algebra [statisticians] have to do."

### The Standard Deviation

The standard deviation (SD) is a measure of spread in a list of numbers. 
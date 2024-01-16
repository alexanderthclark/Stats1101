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


## The Standard Deviation
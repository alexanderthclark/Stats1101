(chance)=
# Chance Error

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapter 16, 17, 18
```

A fair coin is expected to land heads 50% of the time. This is expressed by the probability as a long-run frequency,

$$\mathbb{P}(H) = \frac{ \text{number of heads}} {\text{number of tosses}}.$$

However a perfect 50/50 balance is unlikely. In fact, if you flip a coin 100 times, you'll get 50 heads with probability $\binom{100}{50}0.5^{50}0.5^{50} \approx 0.08$. The difference between the actual outcome and the expectation is called the **chance error**;

$$\text{number of heads} = \frac{1}{2}\times \text{number of tosses + chance error}.$$

Chance errors reflect the noise inherent in a random process. In the equation above, the chance error is kind of like an accounting hack, balancing the observed data with the expected. For a general chance process, we write

$$\text{observed} = \text{expected + chance error}.$$

Chance errors can be positive or negative. Suppose you flip a fair coin 200 times and it comes up heads just 80 times. Then, the chance error is -20. What is the chance error if you instead got 120 heads out of 200 flips? 


```{dropdown} 120/200 Chance Error
The chance error is 20. 
```

The **law of averages** says that the chance error will get smaller *in percentage terms* as the number of trials increases. Suppose you recruited 2000 volunteers. The first 1000 each flip a coin 10 times each. The second 1000 each flip a coin 100 times each. We should expect larger chance errors for the latter group, in absolute terms. After all, some of them might get 60 heads, meaning a chance error of 10. A chance error of 10 is very unlikely for just 10 tosses, requiring all tails. However, proportional to the number of tosses, the chance error will go down with the number of tosses. 60 heads of 100 tosses is similar to 6 of 10 tosses, yet the former is less likely according to the law of averages.  

```{figure} images/chanceErrorHist.svg
---
width: 90%
name: chanceErrorHist
---

This shows the results from 10 and 100 tosses of a coin, repeated 1000 times each. The histogram for 100 tosses is more spread out in absolute terms. But, in percentage terms, more of the 1000 trials yield close to 50% heads.
```

In absolute terms, the chance error will increase, but more slowly than the number of tosses. In fact, if the number of tosses increases 2x, the chance error increases only by a factor of $\sqrt{2}$. If the number of tosses increases 100x, the chance error increases only by a factor of 10. 

## Sums from Boxes

To start, our focus is on the sum of $n$ draws made with replacement from a box. The coin-tossing example above can be thought of as making repeated draws from a box with a 0-1 box. Thus, the number of heads from $n$ tosses is the sum of $n$ draws from the 0-1 box.

```{figure} images/tikz/box01.svg
---
width: 22%
name: box01
---
This is a 0-1 box representing a fair coin flip. 
```

There is chance variability based on the *number of draws* and the actual chance inherent in a process. Suppose 100 draws are made with replacement from one of the boxes below. You will win $1 if you can guess the sum within 10. 


```{figure} images/tikz/boxsums.svg
---
width: 70%
name: boxsums
---
```

Which box is the best? Which is the worst? 

```{dropdown} Boxes i, ii, iii
iii is the best and i is the worst
```

In expectation, the sum is 500 for each of the boxes. However, they each have a different SD and this has consequences for the typical chance error for a sum. 


We quantify the typical chance error using the **standard error** (SE). The above demonstrates that this depends on both $n$ and the SD of the box. The **square root law** makes this precise, stating

$$\text{standard error for sum of draws} = \sqrt{n} \times \text{SD of box}.$$


The standard deviation applies to a list of numbers and standard errors are for chance processes. It's worth noting that when your chance process is "draw one ticket from a box," then the SE is the same as the SD of the box. This can be seen from the above square root law formula, or by returning to the identity

$$\text{observed} = \text{expected} + \text{chance error},$$
$$\text{one draw} = \text{average} + \text{deviation from average}.$$

The SE describes a typical chance error just as the SD describes a typical deviation from the average for a list of numbers. Like for SD, we expect an observed sum to be more than two SE from the expected sum only rarely. 

### 0-1 Boxes

0-1 boxes are focal because they mimic coin flips and many natural questions that can be modeled as coin flips. The **standard deviation for a 0-1 box** is $\sqrt{p(1-p)}$, where $p$ is the proportion of 1s and $1-p$ is the proportion of 0s in the box. Applying the square root law, the **SE for a 0-1 box** is 

$$\sqrt{n} \sqrt{p(1-p)}.$$

**Example**: Ruth and Antonin run an ice cream shop. They know they will have 100 customers today. Each customer orders a scoop of vanilla 50\% of the time and otherwise orders a scoop of chocolate. All orders are independent. If they stock 60 scoops of vanilla, are they likely to run out of vanilla ice cream?


```{dropdown} ice cream
The standard error is found,

$$\text{SE} = \sqrt{100} \times \sqrt{0.5 \times (1-0.5)} = 10 \times \frac{1}{2} = 5.$$

They will run out of vanilla if 61 or more people order vanilla. Compared to an expectation of 50 orders, this requires a chance error of 11 or more. This is rare because 11 is more than two SE from the expectation. 
```

The solution above doesn't quantify the risk of running out of vanilla ice cream. One approach would be to use the binomial formula. They run out of ice cream with probability $\mathbb{P}(\text{61 or more orders}) = \binom{100}{61}0.5^{61}\cdot0.5^{39} + \cdots + \binom{100}{100}0.5^{100}\cdot0.5^0 \approx 0.018.$[^1] Another approach would be to use a normal approximation. Indeed, the 68-95 rule will carry over to SEs under the right conditions. 

[^1]: This can be calculated in Google Sheets as `=1 - BINOMDIST(60,100,0.5,True)`, where the second term is the cumulative probability of 0-60 successes from 100 trials where the probability of success is 0.5. 


## Normal Approximation

For a large number of draws made with replacement from a box, the chance error will follow a normal curve. The expected chance error is zero and its typical size is the SE. In particular, an observed sum will be within one SE of the expected sum 68% of the time and within two SEs about 95% of the time. 

**Example**: One hundred draws are made with replacement from the box below. How likely is the sum to be in the range from 470 to 530?
```{figure} images/tikz/box24410.svg
---
width: 22%
name: box24410
---
```
```{dropdown} Sum of 100 draws
The SD of the box is 3 and the average is 5. The expected sum from 100 draws is 500.

The standard error is found,

$$\text{SE} = \sqrt{100} \times 3 = 30.$$

The range 470 to 530 is therefore the expected sum $\pm$ SE. The sum falls in this range 68% of the time.
```

The normal approximation is justified because of the **central limit theorem**. The central limit theorem states that, when random draws are made replacement from a box, the distribution for the sum of these draws will approximate a normal distribution. This is true even if the contents of the box do not follow a normal curve as long as the number of draws is large.

The central limit theorem is a big deal. 

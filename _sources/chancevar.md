(experiments)=
# Chance Error

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapter 16, 17, 18
```

While a coin is expected to land heads 50% of the time, a perfect 50/50 balance is unlikely if you flip a coin 100 times. In fact, you'll get 50 heads with probability $\binom{100}{50}0.5^{50}0.5^{50} \approx 0.08$. The difference between the actual outcome and the expectation is called the **chance error**;

$$\text{number of heads} = \text{half the number of tosses + chance error}.$$

Chance errors just reflect the noise inherent in a random process. Suppose you flip a fair coin 200 times and it comes up heads just 80 times. Then, the chance error is -20. What is the chance error if you instead got 120 heads out of 200 flips? 


```{dropdown} 120/200 Chance Error
The chance error is 20. 
```

The **law of averages** says that the chance error will get smaller *in percentage terms* as the number of trials increases. Suppose you recruited 2000 volunteers. The first 1000 each flip a coin 10 times each. The second 1000 each flip a coin 100 times each. We should expect larger chance errors for the latter group, in absolute terms. After all, some of them might be 60 heads, meaning a chance error of 10. A chance error of 10 is very unlikely for just 10 tosses. However, proportional to the number of tosses, the chance error will go down. 60 heads of 100 tosses is similar to 6 of 10 tosses, yet the former is less likely according to the law of averages.  

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


TK
(sampling)=
# Sampling

```{admonition} Important Readings
:class: seealso
- {cite}`freedman2007statistics`, Chapters 19, 20
```

## Sample Surveys

Researchers are often interested in **populations**. This is the group of individuals to which the research aims to generalize. The numerical facts of interest are called **parameters**. Maybe you want to know the average lifespan of owls. The parameter of interest is the average lifespan. The population of interest is all owls.

Of course, the leading owl experts don't study every single owl. Nearly all researchers work with **samples**, or some subset of the larger population. One could estimate the average lifespan of owls from a sample, but this wouldn't be a parameter. We reserve parameter as a term for populations. Instead the sample average is a **statistic** meant to estimate the population parameter. The statistic will be a good estimate when the sample is representative. 

In practice, finding a good sample statistic is difficult. There are nuances that require domain knowledge. For example, how will you find the owls? In surveys of people, there's no guarantee that someone will respond and, even if they do, they might not respond truthfully. When using surveys, we can imagine three hurdles:

1. Who to survey?
2. Who will respond to the survey?
3. Who will respond truthfully to the survey? 

Each hurdle presents an opportunity for bias in the final estimate. 

One important type of bias is **selection bias**, which occurs when the sample systematically excludes one kind of person. Suppose a political pollster sets up a table at the local creamery, asking people who they'll vote for in an American election as they shop for organic milk. The sensible population of interest is American voters and the parameters of interest are the percentage voting for each candidate. However, the creamery setting *selects* for a sort of yuppie person who can tolerate lactose. People of Northern European descent have the lowest rate of lactose intolerance, so the sample is unlikely to be representative of America. 

The pollster might have a smarter colleague who assembles a list of names that is truly representative of all voters. The next hurdle is getting responses. If a phone survey is used, there will be many who don't answer. This is a problem *if* those who don't respond are systematically different than those who do respond. In fact, old people are usually more available and willing to answer the phone, potentially leading to bias. A systematic difference between respondents and non-respondents is called **non-response bias**. 

The specific problem of an unrepresentative distribution of ages in a sample can be solved by using **quota sampling**. In quota sampling, the sample is constructed to resemble the population of interest with respect to key characteristics. This can help, but it doesn't guarantee representativeness because not all important characteristics can be understood. 

**Example**: Imagine we want to estimate the public's satisfaction with the US Postal Service. Opinions differ by age and by their curmudgeonliness. Perhaps older people like USPS more, but curmudgeons will not like USPS regardless of age *and* curmudgeons will not respond. It's easy to quota sample based on age, and a quota sample will result in an average satisfaction rating of 9 based on {numref}`age-curmudg-table`. This is better than not using quota sampling and constructing a sample that overrepresents older non-curmudgeons. However, the true average rating is 7. Quota sampling can't give a good estimate of the actual population parameter because quotas for old or young people will systematically exclude curmudgeons. 

```{list-table} Average USPS Satisfaction by Age and Curmudgeonliness
:header-rows: 1
:name: age-curmudg-table

* - 
  - Bottom 50% Age
  - Top 50% Age
* - Bottom 50% Curmudgeon
  - 8
  - 10
* - Top 50% Curmudgeon
  - 5
  - 5
```

The last hurdle in surveying is getting truthful responses. People might provide socially acceptable answers instead of truthful answers, especially when the survey involves talking to an actual person. Answers can be influenced by the wording of questions. These phenomena all fall under the umbrella of **response bias**. 

The Trafalgar Group is an opinion polling company, notable for predicting that Donald Trump would win the 2016 US presidential election while most polls were wrong. One proposed explanation for why so many polls were wrong is the theory of the "shy Trump voter." A shy Trump voter is someone who voted for Trump but indicated the opposite to pollsters, motivated by fear of social stigma. This is a case of response bias and correcting for it requires some artifice. The Trafalgar group attempted to account for that by asking respondents how they think their neighbors will vote. 

### Non-response in the American Time Use Survey

{cite}`abraham2006nonresponse` reports different response rates for the American Time Use Survey, partially reproduced in {numref}`atusresprates`. The differing response rates present a minefield for researchers. 

```{list-table} 2004 ATUS Response Rates (Table 2 from [AMB06])
:header-rows: 1
:name: atusresprates

* - Variable
  - Number in Sample
  - Response Rate
* - **Respondent's Sex**
  - 
  - 
* - Male
  - 12,160
  - 51.6
* - Female
  - 14,736
  - 54.7
* - **Respondent's Age**
  - 
  - 
* - 15–30
  - 6,438
  - 46.1
* - 31–45
  - 8,447
  - 51.7
* - 46–55
  - 4,676
  - 58.8
* - 56–65
  - 3,216
  - 60.3
* - Over 65
  - 4,119
  - 55.3
* - **Respondent's Race/Ethnicity**
  - 
  - 
* - Hispanic
  - 3,508
  - 46.4
* - Non-Hispanic black
  - 3,864
  - 40.0
* - Other
  - 19,524
  - 56.1
* - **Household Income ($)**
  - 
  - 
* - Missing
  - 5,055
  - 41.0
* - Less than 20,000
  - 4,947
  - 46.2
* - 20,000–39,999
  - 5,817
  - 53.9
* - 40,000–74,999
  - 5,982
  - 58.8
* - 75,000 or more
  - 5,095
  - 62.0
```

Differing response rates can be accounted for with statistical corrections, but the researcher can't necessarily be confident in their results just by looking at the data. While different demographic groups can be reweighted when calculating a statistic, the features of non-respondents can never be fully known. The decline in response rates for important household surveys has caused some concern regarding the quality of this data. 

```{figure} images/household-survey-respons.svg
---
width: 80%
name: household-survey-respons
---
Source: [Bureau of Labor Statistics](https://www.bls.gov/osmr/response-rates/)
```

### Probability Methods

A good sample is representative of the population of interest. Like in experiments, the best way to ensure representativeness is to use randomization. A **simple random sample** is one drawn at random without replacement. When feasible, this is a good method. Feasibility requires there's some big list of names to draw from. For people who will vote in the next election, there is no such list. So, political polling is complicated and the nuts and bolts are beyond our scope. 

Note that probability methods are important regardless of the sample size. An estimate can be decomposed as 

$$\text{estimate = parameter + bias + chance error}.$$

The sample size controls the chance error, with larger samples reducing the chance error, but a bad sampling technique is vulnerable to bias no matter the sample size. 

## Chance Errors in Sampling

In this section, we put aside most issues of bias and try to understand the chance error for a sample statistic.

### Expected Value and SE

Percentages are a focal population parameter and thus a focal sample statistic. What percentage of Columbia students want a TikTok ban? What percentage of Peloton members have an Apple Watch? What percentage of Uber customers also use Lyft? Etc. This sort of question can be answered with a simple random sample. With a simple random sample, the expected value for the sample percentage equals the poulation percentage. This means there is no bias, but it doesn't rule out chance error. 

(ptonSample)=
#### Finding the right SE

Let's take the example of finding what percentage of Peloton members have an Apple Watch. Before building an app for the watchOS, a smart business will first "size" the opportunity by estimating how many members have a watch.

```{figure} images/tikz/boxapplewatch.svg
---
width: 61%
name: boxapplewatch
---
The box represents a simplification where 40 members of a population of 100 members have an Apple Watch.
```

Suppose, as indicated by {numref}`boxapplewatch`, there are 100 Peloton members and, though Peloton doesn't know it, 40 of them have an Apple Watch. 

If Peloton were to sample 100 members *with replacement*, the total in the sample who have an Apple Watch would be 

$$\text{# Apple Watch Owners in Sample = 40 + chance error}.$$

Because the sample was done with replacement, the chance error can be nonzero, so SE>0. In particular, it could be calculated as $\sqrt{100} \times \sqrt{.4\times.6} \approx 4.9$ given what we learned from Chapter 17. 

We consider two adjustments to turn this into an SE for the percentage of users with an Apple Watch if we instead sampled without replacement. 

**Adjustment 1**. The chance error above is for a sum. Peloton might prefer to report a percentage if they expect to continue to attract new members. This involves a straightforward adjustment. The fraction of members owning an Apple Watch is actually an average (recording a 1 for every Apple Watch owner and a 0 otherwise). For an average calculated as $\frac{\text{sum}}{n}$,

$$\text{SE for an average} = \frac{\text{SE for sum}}{n}.$$

Just like how the SD for a list of numbers would double if you doubled each value, the SE is divided by $n$ when moving from a sum to an average. This is mere arithmetic manipulation, so there is no square root business at work. It follows that we simply multiply to work with percentages:

$$\text{SE for a percentage} = \frac{\text{SE for sum}}{n} \times 100\%.$$

Both of these can be rewritten by substituting in how the SE for the sum is calculated.

$$\text{SE for an average} = \frac{\text{SD for the box}}{\sqrt{n}}.$$

$$\text{SE for a proportion} = \sqrt{\frac{p(1-p)}{n}}.$$

$$\text{SE for a percentage} = \sqrt{\frac{p(1-p)}{n}} \times 100\%.$$

Thus, the SE for the percentage of members with an Apple Watch based on the sample of 100 members, drawn with replacement is about $\frac{4.9}{100}\times 100\%$, or 4.9%.


**Adjustment 2**. The SE formulas we first learned assume draws are made *with replacement*. Simple random samples are done without replacement. While we found SE to be about 4.9%, we should note that if a sample of 100 members were done without replacement, we'd have sampled the entire population and there would be no variability in the sample percentage. We'd always find 40% of members have an Apple Watch. This reveals that sampling without replacement actually has a lower associated standard error. The is corrected by a correction factor:

$$\text{SE drawing without replacement = correction factor} \times \text{SE drawing with replacement}.$$

And the correction factor is 

$$\text{correction factor} = \sqrt{\frac{\text{Population Size - Sample Size}} {\text{Population Size} -1}}.$$

When the sample size equals the population size, this means the SE for a simple random sample is zero, because the numerator zeros out. When the population size is large relative to the sample size, the correction factor is nearly one. If we sample 10 people from a population of 100, the correction factor is about 0.95. In practice, the correction factor is often ignored. One rule of thumb is that this can be done when less than 10% of the population is sampled. 



## Exercises

```{exercise-start}
:label: incentivesurvey
```
A user researcher at a large ecommerce company wants to have a representative sample of its users take a survey.

1. They create a survey that is visible to anyone who completes an order on a single day. Describe at least one source of bias. 

2. They email 100 users, drawn without replacement, from a list of all people holding an account with the company.  What kind of sample is this? 

3. In the email to 100 users, they offer a $10 gift card to anyone who completes the survey. What kind of bias is this designed to prevent?

```{exercise-end}
```

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

One important type of bias is **selection bias**, which occurs when the sample systematically excludes one kind of person. Suppose a political pollster sets up a table at the local creamery, asking people who they'll vote for in an American election as they shop for organic milk. The sensible population of interest is American voters and the parameters of interest are the percentage voting for each candidate. However, the creamery setting *selects* for a sort of yuppie person who can tolerate lactose. People of Northern European descent have the lowest rate of lactose intolerant, so the sample is unlikely to be representative of America. 

The pollster might have a smarter colleague who assembles a list of names that is truly representative of all voters. The next hurlde is getting responses. If a phone survey is used, there will be many who don't answer. This is a problem *if* those who don't respond are systematically different than those who do respond. In fact, old people are usually more available and willing to answer the phone, potentially leading to bias. A systematic difference between respondents and non-respondents is called **non-response bias**. 

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


### Non-response in the American Time Use Survey

{cite}`abraham2006nonresponse` reports different response rates for the American Time Use Survey, partially reproduced in {numref}`atusresprates`. The differing response rates present a mine field for researchers. 

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



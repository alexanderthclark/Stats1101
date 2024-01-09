(getting_started)=
# Getting Started

```{admonition} Important Readings
:class: seealso
- {cite}`hand2008statistics`, Chapter 1
- {cite}`freedman2007statistics`, Preface
```

Statistics refers to both the discipline and values calculated from data. We can define each after we define data. Data is mostly what you think it is, but our definition might be broader than you expect. **Data** are a collection of values and their context. Values does not have to mean numbers. This can include text, images, smells, and audio. If it's something Google or the NSA might collect, it's probably data.[^1]

[^1]: Data is the plural of datum. That means a grammatically correct sentence would be "These data were analyzed by puppies."

Returning to **statistics**, we first examine a few definitions for the discipline.

1. "The technology of extracting meaning from data." ({cite}`hand2008statistics`)
2. "A way of reasoning and a set of tools that help us understand the world." ({cite}`destats`)
3. "The art of making numerical conjectures about puzzling questions." ({cite}`freedman2007statistics`)
4. "The discipline that concerns the collection, organization, analysis, and interpretation of data." (Wikipedia)

The first definition above is presented as a "working definition" and it does well to emphasize a notion of extraction. Our textbook, {cite}`freedman2007statistics`, emphasizes that this is a numerical endeavor. Extracting meaning isn't just a matter of solving equations, though. Taking a large data set and judging it by its average or anything else we calculated is a reductive exercise, as is any kind of summary, statistical or not. Judging if this oversimplifies what's in the data or might not be applicable in more general settings requires argument. Indeed, {cite}`abelson2012statistics` emphasizes the quantitative endeavor *and* logical rhetoric, "The purpose of statistics is to organize a useful argument from quantitative evidence, using a form of principled rhetoric." This is all to say we have to use both parts of our brain going forward and we have to be comfortable with some ambiguity.

Finally, we can define **statistic** in its second use. A statistic is a calculation made from data. A statistic can be judged by how well it says something useful.

Consider the following two gambles.

- **A.** 100% chance of winning \$1 million.
- **B.** 89% chance of winning \$1 million, 10% of \$5 million, and 1% chance of nothing.

Gamble A earns you \$1 million on average and gamble B earns you \$1.39 million on average. Gamble B is better according to the average, but no statistician would insist that means Gamble B is better than A. The average, as a statistic, does not communicate relevant information about risk. Someone else might look at these two gambles and decide that the important statistic to compute is the worst-case winnings. Statistics won't help us decide which gamble is better. But statistics can help sensitize us to what is lost and what judgments are implicit in choosing one statistic over another.

All of this can be disappointing to someone who is looking for statistics to resolve questions. Some questions can't be resolved and others might be resolved only slowly. In the 1890s, some of the first reports were published associating smoking with lung cancer. The United States Surgeon General's Report on Smoking and Health was not published until 1964. This wasn't a case of averages failing to adequately capture risk like in the above, rather it was that certain standards of evidence needed to be met. Not all types of studies are equally reliable and it comes down to much more than just sample size.


## Exercises

The [data below](https://docs.google.com/spreadsheets/d/1RiCq9ovd1N_-qnNewD20oaEhnD1VL3qg/edit?usp=sharing&ouid=102598671780190894865&rtpof=true&sd=true) come from Spotify. Song popularity is based "in the most part, on the total number of plays the track has had and how recent those plays are."[^2] Artist popularity is derived from song popularities. The following exercises emphasize the inherent ambiguity in finding a good statistic.

[^2]: From [Spotify's documentation](https://developer.spotify.com/documentation/web-api/reference/get-track).

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXwJFqZzlWtVTKpchx-2NW3i5RVIu9JIE5gqOyPFcak8cJJjrYHOdsZKpundt11A/pubhtml?widget=true&amp;headers=false" width="100%" height="400px"></iframe>


```{exercise-start}
:label: spotpop
```

Without using the artist-popularity column, use the data to develop a statistic that can be used to rank the artists on popularity.

```{exercise-end}
```

```{exercise-start}
:label: spotcav
```

Briefly, what are some important caveats regarding what "popularity" actually means here? Hint: Artists come from different time periods and Garth Brooks' entire catalog is not on Spotify. 

```{exercise-end}
```

```{exercise-start}
:label: spotone
```

Use the data to develop a statistic that can be used to find the biggest one-hit wonder.

```{exercise-end}
```

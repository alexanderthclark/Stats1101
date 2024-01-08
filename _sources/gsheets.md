# Google Sheets

Google Sheets is excellent for its low scare-factor and its free availability. Microsoft Excel can do a bit more and Python or R can do a lot more. Use Google Sheets if you are someone who needs to manipulate data or make statistical calculations, but not so often that you should suffer the investment required to use languages like Python or R or to learn/pay for other applications. Google Sheets will get you from point A to point B and with only an internet browser. In the context of this class, the only advantage of Excel might be the availability of the Analysis ToolPak plugin (useful for regression analysis). 

## Basics

### Formulas: Not `1+1` but `=1+1`

Arithmetic can be done as you would expect, as long as you enter `=` and then the formula. Without the equals sign, you will only have text. 

### Cell References: `A1` and `Sheet1!A1`

You can reference the value of another cell using its column and row coordinate. For example, `A1` refers to the value in column A, row 1. If you would like to reference the value in another sheet named `Sheet1` (another tab in the same workbook), you can do that with the syntax `=Sheet1!A1`. 

### Cell Ranges: `A1:A2`, `A:A` and `A1:B2`

You can select a range of cells with the mouse or by specifying a range of cell coordinates. When using coordinates, there are three types of ranges you might use:

1. Single column subset, `A1:A2`. This will select the cells in column A from row 1 to row 2.
2. An entire column, `A:A`. This will select every cell in column A.
3. Rectangular selection, `A1:B2`, This will select `A1:A2` and `B1:B2`. Note, you can use `A1:C1` to select all cells in row 1 for columns A-C.
4. An entire row, `1:1`. This will select the entirety of row 1.

Selecting a range of cells will be useful later when we use formulas. Note, if you use the reference `=A1:B2` by itself, as shown below, you will get back an error because the 2x2 range cannot be inserted into a single cell.

### Copying and Pasting Cell References (`$A$1` vs `A1`)

To leverage the power of Sheets, you should be copying and pasting your references and formulas as much as possible. There are three types of references that behave differently when copying and pasting. A plain `=A1` reference:

1. `=A1`, relative referencing
2. `=A$1`, mixed referencing where the column is relative
3. `=$A1`, mixed referencing where the row is relative
4. `=$A$1`, absolute referencing

## Formulas

Google Sheets offers hundreds of functions across several categories. We are especially interested in the statistical, math, and logical categories.

### Mathematical and Statistical

Below is a selection of commonly used functions in Google Sheets. Their purpose should be apparent from the name:

| Function | Sample Usage | Notes |
|----------|--------------|-------|
| [AVERAGE](https://support.google.com/docs/answer/3093615?hl=en) | `AVERAGE(A1:A10)` |  |
| [CORREL](https://support.google.com/docs/answer/3093990?hl=en) | `CORREL(A1:A10, B1:B10)` | Correlation, same as `PEARSON`. |
| [COVAR](https://support.google.com/docs/answer/3093993?hl=en) | `COVAR(A1:A10, B1:B10)` |  |
| [MEDIAN](https://support.google.com/docs/answer/3094025) | `MEDIAN(A1:A10)` |  |
| [PERCENTILE](https://support.google.com/docs/answer/3267350) | `PERCENTILE(A1:A10, 0.5)` |  |
| [VAR](https://support.google.com/docs/answer/3094063) | `VAR(A1:A10)` | This is SD${^{+}}^2$. |
| [VARP](https://support.google.com/docs/answer/3094113?hl=en) | `VARP(A1:A10)` |  |
| [SUM](https://support.google.com/docs/answer/3093669) | `SUM(A1:A10)` |  |
| [STDEV](https://support.google.com/docs/answer/3094054?hl=en) | `STDEV(A1:A10)` | This is SD$^{+}$, not SD, per {cite}`freedman2007statistics`. |
| [STDEVP](https://support.google.com/docs/answer/3094105) | `STDEVP(A1:A10)` | This is SD, per {cite}`freedman2007statistics`. |


### Probability Distributions

| Function | Sample Usage | Notes |
|----------|--------------|-------|
| [NORMDIST](https://support.google.com/docs/answer/3094021) | `NORMDIST(x, mean, std dev, cumulative)` |  |
| [BINOMDIST](https://support.google.com/docs/answer/3093987) | `BINOMDIST(num successes, trials, probability success, cumulative)` |  |
| [CHIDIST](https://support.google.com/docs/answer/7003346) | `CHIDIST(x, degrees of freedom)` | Right-tailed |
| [CHISQ.DIST](https://support.google.com/docs/answer/7003347) | `CHISQ.DIST(x, degrees of freedom, cumulative)` | Left-tailed |
| [TDIST](https://support.google.com/docs/answer/3295914) | `TDIST(x, degrees of freedom, tails)` |  |
| [NORMINV](https://support.google.com/docs/answer/3094022) | `NORMINV(probability, mean, std dev)` |  |
| [TINV](https://support.google.com/docs/answer/6055811) | `TINV(probability, degrees of freedom)` | Two-tailed inverse |

### Logical

| Function | Syntax | Example |
|----------|--------|---------|
| [IF](https://support.google.com/docs/answer/3093364) | `IF(logical_expression, value_if_true, value_if_false)` | `IF(A1 > 0, A1, 0)` |
| [AND](https://support.google.com/docs/answer/3093301) | `AND(logical_expression, [logical_expressions, ...])` | `AND(A1 > 0, A1 < 2)` |
| [OR](https://support.google.com/docs/answer/3093306) | `OR(logical_expression, [logical_expressions, ...])` | `OR(A1 > 2, A1 < -2)` |
| [AVERAGEIF](https://support.google.com/docs/answer/3256529) | `AVERAGEIF(criteria_range, criterion, [average_range])` | `AVERAGEIF(A:A, ">0", B:B)` |
| [SUMIF](https://support.google.com/docs/answer/3093583) | `SUMIF(criteria_range, criterion, [sum_range])` | `SUMIF(A:A, "taxi", B:B)` |

### Lookup Functions

| Function | Syntax | Example |
|----------|--------|---------|
| [XLOOKUP](https://support.google.com/docs/answer/12405947) | `XLOOKUP(search_key, lookup_range, range_result, missing_value, match_mode, search_mode)` | `XLOOKUP("Shaq", A:A, B:B)` |

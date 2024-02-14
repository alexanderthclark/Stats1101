# Regression

Use the [`LINEST`](https://support.google.com/docs/answer/3094249?hl=en) formula for linear regression. 

Sample usage:

* `LINEST(A2:A10, B2:B10)` for simple linear regression, predicting A (y) from B (x)
* `LINEST(A2:A10, B2:B10, True, True)` for simple linear regression with verbose output for significance testing

## Simple Linear Regression

### Finding the Regression Line

Suppose, like Galton, we want to predict a son's height from his father's height ({cite}`freedman2007statistics` p. 170).

We're looking for the equation 

$$\hat{y} = mx + b,$$

where $\hat{y}$ is the predicted father's height and $x$ is the son's height. The data is organized in [this spreadsheet](https://docs.google.com/spreadsheets/d/1xmuDi3BZev565rt8K1wtNBKGZFwsdzTsjOMIE5G-txA/edit?usp=sharing), with Fathers' heights stored in `A2:A1079` and sons' in `B2:B1079`.

Using `=LINEST(B2:B1079, A2:A1079)`, we find 

$$\hat{y} = 0.51 \times x + 33.89.$$

The intercept is always the value furthest to the right in the output. The next value to the left is the slope.

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT-dSyrCQpPp3hBvsROqV7CYEHepTWW_Qzm0aNHoz-10RLqQL5RTV5R98jgv8VGWnccTttBJvkdPbWa/pubhtml?widget=true&amp;headers=false" width="100%" height="300px"></iframe>


### Predictions and Residuals

For a father of height 75.4 (the tallest father in the data), the predicted son's height is $\hat{y} = 0.51 \times 75.4 + 33.89 \approx 72.3$.[^1]

[^1]: The actual value found in the spreadsheet is 72.64884635 if the other coefficients are not rounded.

In a [separate tab](https://docs.google.com/spreadsheets/d/1xmuDi3BZev565rt8K1wtNBKGZFwsdzTsjOMIE5G-txA/edit?usp=sharing), we calculate the predictions. For the observation in the second row, this is done with `=$G$2 + $F$2*A2`. `G2` references the intercept from the `LINEST` output and `F2` references the slope. We use absolute referencing, `$F$2` and `$G$2`, for the coefficients so we can copy and paste the formula without the coefficients changing. If the formula is pasted into the cell below, the coefficient references are frozen, but `A2` is replaced by `A3`, giving the prediction for the next observation in row three. These predictions are stored in column `C`. 

Next, residuals (or prediction errors) are calculated with the formula `B2 - C2` entered in `D2` and then pasted down the rest of column `D`. A useful sanity check is that the average residual should be zero (for the observations used to find the regression line). This helps ensure that no mistakes were made in finding your predictions. 

The *root mean square error* is calculated in `F14` as the square root of the average of the squared residuals. 
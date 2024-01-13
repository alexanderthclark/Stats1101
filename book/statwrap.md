# StatWrap

StatWrap is a Python package I've written for this course. Find the [documentation here](https://statwrap.readthedocs.io/en/latest/index.html).

I simplify other packages and use function names that match the conventions of {cite}`freedman2007statistics` or Google Sheets to make it easier to switch from the book to coding. Other packages use defaults that might clash with the book (e.g. SD vs $\text{SD}^{+}$). Using StatWrap prevents accidentally wading into those complications. 

If you pursue more advanced study of statistics or related fields, you will never use StatWrap again, but it's a good place to start if you already find coding to be overwhelming enough. 

## Using StatWrap

StatWrap is not installed in Google Colab by default. To install and use statwrap, run this code. 

```python
!pip install statwrap
import statwrap
%use_fpp
%use_sheets
```

Here's what the lines above do.

1. This install statwrap. This isn't permanent on Google Colab, so you'll have to run this for every new session.
2. This imports statwrap.
3. This loads the FPP module, which includes functions likes `sd` to calculate the standard deviation of a list of numbers using the syntax `sd(1,2,3)`. You *don't* have to write `statwrap.fpp.sd(1,2,3)` if you run this line. 
4. Like the third line, this loads the Google Sheets module. This module includes functions like `stdevp` to match the `STDEVP` function in Google Sheets and Excel. 
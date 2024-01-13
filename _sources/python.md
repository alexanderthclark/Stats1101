# Overview

## What is Python?

Python is a general-purpose programming language. Our purposes are statistical calculations and the occasional graph. We will run code in [Google Colaboratory](https://colab.research.google.com/). This roughly mirrors running Jupyter notebooks on your own machine, but we skip the setup by running everything in the browser. If you master intro stats and become proficient in Python and SQL, there is a six-figure job waiting for you at any number of tech companies.

Python is popular because the code is readable. More specifically, “Pythonic” code is readable. Pythonic code not only gets you from point A to B, but it uses Python as it was intended and conforms to the standards of beauty described in *The Zen of Python* and [elsewhere](https://peps.python.org/pep-0008/).

**The Zen of Python, by Tim Peters**

*Beautiful is better than ugly.*  
*Explicit is better than implicit.*  
*Simple is better than complex.*  
*Complex is better than complicated.*  
*Flat is better than nested.*  
*Sparse is better than dense.*  
*Readability counts.*  
*Special cases aren't special enough to break the rules.*  
*Although practicality beats purity.*  
*Errors should never pass silently.*  
*Unless explicitly silenced.*  
*In the face of ambiguity, refuse the temptation to guess.*  
*There should be one---and preferably only one---obvious way to do it.*  
*Although that way may not be obvious at first unless you're Dutch.*  
*Now is better than never.*  
*Although never is often better than *right* now.*  
*If the implementation is hard to explain, it's a bad idea.*  
*If the implementation is easy to explain, it may be a good idea.*  
*Namespaces are one honking great idea---let's do more of those!*

Python can seem endlessly complex. [Fluent Python](https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348) is 1,012 pages. Luckily, we don't need to aspire to fluency.

## Thinking like a Programmer

Here's a joke. 

> A programmer is given orders, "Go to the store and buy a loaf of bread. If they have eggs, buy a dozen." The programmer returns with 12 loaves of bread.

This joke speaks to the importance of logic and literalism in coding. This will be frustrating if you're the kind of person who says, "I could care less" when you mean you couldn't care less. Python is your belligerent friend who insists on taking you literally.

When executing a chunk of code, remember that is executed in order, from the one line to the next, and that any variables have to be defined before you can use them. When using a notebook like in Google Colab, be careful with running different cells out of order or forgetting to run one cell before going on to the next. 

Here are a few questions to ask yourself when your code doesn't work. 

1. If there's an error, does the error message say anything useful?
	* For example, the error message might tell you a variable is not defined. Check for typos or make sure you actually defined it and ran the appropriate code.
	* If the error message is too complicated to understand, paste it into ChatGPT and ask for an explanation.
2. Does the error persist if I start and over and run all code from scratch? 
	* If you are re-using variable names, you might overwrite something in an unexpected way. This can cause a clash that messes up the code.
	* A "run all" command will also ensure that you didn't forget to run a cell in a Jupyter or Colab notebook.
3. Did I import the right packages? 
	* If you want to make a graph or work with dataframes, this will require importing a package that offers that functionality.
4. Is my code in the correct order?
 	* The order of execution matters. Make sure your code is executed in the sequence you intend, especially in Jupyter or Colab notebooks where cells can be run in any order.
 5. Is there something odd about my data types? 
 	* Note that `1+1` will produce `2` but `'1' + '1'` will produce `'11'`. The former treats 1 as a number but the second, by using quotes, treats it as plain text, or a string. 
 6. Is there anything wrong with my syntax? 
 	* Recall `**` is used for exponents, so $2^4$ is written as `2**4`. `2^4` does something else.
 7. Could the precision of a decimal value change my results? 
 	* Computers can have a hard time storing exact values. You might get 0.00000000001 instead of 0. This usually isn't a big deal in our applications. 



# Instructions

In this challenge we will assess your coding skills. Create a little project implementing a solution for the problem shown below. After you're done, please push your code to a public GitHub or Bitbucket repository.

# Number Translation Problem

You have arrived in a long forgotten island, called kwego. After 3 days on this island, you realized that their numeric system is the same as the [roman system](https://en.wikipedia.org/wiki/Roman_numerals) but with different names and came up with the following kwegonian to roman translation table:

```
kil   	I
jin    	V
pol   	
kilow 	L
jij   	C
jinjin	D
polsx  	M
```

To make your life easier, you will build an Rest API to translate their kwegonian numbers into DECIMAL numbers.

Here's an example of the request payload:

```
Input: "polsx polsx pol jin kil"
Output: 2016

Input "polsx polsx jinjin pol kilow kil jin"
Output: 2544
```

You can use external libraries to build and test, but not to do the translation itself.
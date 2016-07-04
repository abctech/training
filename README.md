# training

###Instructions

We want to do the roman numerals kata:[KataRomanNumerals](http://www.codingdojo.org/cgi-bin/index.pl?KataRomanNumerals) 

1. We want to do it Test Driven (TDD)
2. Feel free to do the first iteration in pairs if you want to
3. The following resource will easily give you correct roman numerals to use as test cases: http://www.novaroma.org/via_romana/numbers.html Remember that there is a Part II of this kata, that is converting from I to 1 as well.

###GIT commit message guide

Remember to commit to git after each of the 3 steps, so it is easy to see progress, and that you also practice commit often. See Git Commit messages for information on writing good commit messages. As a special case when we do TDD training, we like to also include possible improvement points for our code

#####Git Commit messages
The first line is a header, it should not be longer than ≈ 50 characters. After the header/subject line, have an empty line, and then explain the reasoning behind the changes in this commit.

Please put the step number in the beginning of the header line/subject of the commit message: E.g.

	1: Add failing test for converting 2 to II
 
	Now that the code is running, and I can run
	the test suite and convert 1 to II, I've
	added a second actual test to start implementing
	something real.
 
	Possible improvement points:
 
	- Code duplication in test (two calls to is).

See more [GitCommitMessages](https://wiki.openstack.org/wiki/GitCommitMessages)
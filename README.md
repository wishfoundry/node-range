# range - A simple library for range(a, b, step).

# INSTALL

```
$ npm install range
```

# EXAMPLE

```
$ npm test

> range@0.0.2 test /Users/andrew/Desktop/src/node-range
> grunt

Running "exec:backgroundServer" (exec) task

Running "exec:waitForServer" (exec) task
Server running at http://127.0.0.1:8124/

Running "exec:loadPage" (exec) task
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
98
Fizz
Buzz

Running "exec:killServer" (exec) task

Done, without errors.
```

# LICENSE

FreeBSD

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.8+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Cucumber](http://cukes.info/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)

# DEVELOPMENT

## Test

Ensure the example script works as expected:

```
$ cucumber 
Feature: Run example tests

  Scenario: Running example tests            # features/run_example_tests.feature:3
    Given the program has finished           # features/step_definitions/steps.rb:1
    Then the output is correct for each test # features/step_definitions/steps.rb:5

1 scenario (1 passed)
2 steps (2 passed)
0m2.454s
```

## Lint

Keep the code tidy:

```
$ npm run-script lint
```

## Spell Check

```
$ aspelllint
...
```

## Local CI

Guard can automatically run testing when the code changes:

```
$ bundle
$ guard -G Guardfile-cucumber
...
```

Guard can automatically lint when the code changes:

```
$ bundle
$ guard -G Guardfile-lint
...
```

## Git Hooks

See `hooks/`.

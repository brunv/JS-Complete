# Introduction to ES6 / ES2015

## _let_ and _const_
Both _let_ and _const_ are not function-scoped but block-scoped. A block is simply all the code that is wrapped between these curly braces {}.

## Temporal Dead Zone
This means that the variables are actually hoisted but we still cannot access them before they are declared. In ES5 we can access them but they're all _undefined_.
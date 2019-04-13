# Introduction to ES6 / ES2015

## _let_ and _const_
Both _let_ and _const_ are not function-scoped but block-scoped. A block is simply all the code that is wrapped between these curly braces {}.

## Temporal Dead Zone
This means that the variables are actually hoisted but we still cannot access them before they are declared. In ES5 we can access them but they're all _undefined_.

## Blocks and IIFEs
In ES5 we only have immediately-invoked functions expressions to achive data privacy. But in ES6 we have a much simpler way of achiecing data privacy because all we have to do is to use a block. That's possible because of how _let_ and _const_ works.
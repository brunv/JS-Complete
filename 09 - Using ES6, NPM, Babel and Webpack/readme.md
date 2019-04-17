# Using ES6, NPM, Babel and Webpack

# NodeJS and NPM
To init the project just type 
``` npm init ```
and answer some questions to properly set it.

We have two types of NodeJS packages:
- libraries and frameworks (jQuery, React...);
- development tools (Webpack...);

The _devDependencies_ are those dependencies that only developers will use, like tools. Frameworks or libraries that should be in the client-side (i.e. jQuery) must be whitin the _dependencies_.

To install all the dependencies that are listed in the package.json, just enter:
``` npm install ```

Globally installed packages does not get listed in _package.json_.

## Webpack
To install Webpack, enter:
``` npm install webpack --save-dev ```


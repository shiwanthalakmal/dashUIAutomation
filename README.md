# Generic Test Automation Framework 


## Environment Setup

## Examples


## Getting started

This package.json references the local protractor directory with `"protractor": "file: ../"`. For the type declarations to work, from the protractor directory
run an `npm install` to generate the declarations file.

Next, install node_modules with:

```
npm install
```

Then, run the given test plans via package.json references using below command:

```
npm test
```


## Protractor typings

To use Protractor types, you'll need to import `protractor`. After this is imported, you should have autocompletion hints when typing.

```
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
```

Although the Protractor configuration file can be written in javascript, creating it in typescript will have some hints.
These hints and the reference configuration can be found in `lib/featureConfig.ts`. Below we are importing the Config interface and
applying that interface to the config variable:

```
import {Config} from 'protractor';

export let config: Config = {
  ...
}
```


## Compiling your code

To convert your typescript to javascript (transpiling), you'll use the Typescript compiler (tsc). If you install typescript globally,
the command is `tsc`. If it is not installed globally, the typescript compiler can be executed with `npm run tsc`.


## Running Protractor

After transpiling your code to javascript, you'll run Protractor like before: `protractor conf.js` using below command:

```
npm test
```


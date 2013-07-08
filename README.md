# grunt-steal

[![Build Status](https://secure.travis-ci.org/alexisabril/grunt-steal.png)](http://travis-ci.org/alexisabril/grunt-steal)

A task to allow for ease of running multiple [StealJS](http://javascriptmvc.com/docs.html#!stealjs "StealJS") build scripts.

Currently, this assumes you have steal as a subdirectory/submodule placed in the root of your UI project.`.

## Getting Started

Install this plugin with: `npm install grunt-steal-node`

Then add this line to your project's `Gruntfile.js` file:

	grunt.loadNpmTasks('grunt-steal-node');

### Overview

Specify a `steal` section in your gruntfile. This will allow configurations for overriding options in the specified build scripts.

### Parameters

#### js `string`

Optional - Specify a path to the steal root. Defaults to gruntfile directory.

#### build `array`

Specify all build scripts via string or object. *See example below*

### Sample config

The configuration below specifies the steal root, where the `js` runner exists, then runs each build script.

```javascript
  steal: {
    options: {
      compressor: 'uglify'
    },
    dist: {
      src: 'test/fixtures/index.html',
      dest: 'dist'
    }
  }
```

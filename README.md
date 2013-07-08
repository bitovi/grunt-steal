# grunt-steal

[![Build Status](https://secure.travis-ci.org/matthewp/grunt-steal.png)](http://travis-ci.org/matthewp/grunt-steal)

A task to allow for ease of running multiple [Steal](http://javascriptmvc.com/docs.html#!stealjs "StealJS") build scripts.

Currently, this assumes you have steal as a subdirectory/submodule placed in the root of your UI project.`.

## Getting Started

Install this plugin with: `npm install grunt-steal-node`

Then add this line to your project's `Gruntfile.js` file:

```javascript
grunt.loadNpmTasks('grunt-steal-node');
```

### Overview

Specify a `steal` section in your gruntfile. This will allow configurations for overriding options in the specified build scripts.

### Sample config

The configuration below specifies the steal root, where the `js` runner exists, then runs each build script.

```javascript
  steal: {
    options: {
      compressor: "uglify"
    },
    dist: {
      src: "path/to/my/app.js",
      dest: "out_folder"
    }
  }
```

Or, if you have multiple projects all sharing the same `steal`, you can add those like so:

```javascript
  steal: {
    options: {
      compressor: "uglify"
    },
    dist: {
      "out_folder": "path/to/my/app.js",,,,
			"other_folder": "path/to/my/second/app.js"
    }
  }
```

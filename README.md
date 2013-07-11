# grunt-steal

[![Build Status](https://secure.travis-ci.org/matthewp/grunt-steal.png)](http://travis-ci.org/matthewp/grunt-steal)

A task to allow for ease of running multiple [Steal](http://javascriptmvc.com/docs.html#!stealjs "StealJS") builds in your project.

This assumes that you have a `stealconfig.js` and a `steal` subfolder containing `steal.js`. If you install [steal](https://github.com/bitovi/steal) getting these prereqs is as simply as running `steal install`.


## Getting Started

Install this plugin with: `npm install grunt-steal-node`

Then add this line to your project's `Gruntfile.js` file:

```javascript
grunt.loadNpmTasks('grunt-steal-node');
```

### Overview

Specify a `steal` section in your `Gruntfile.js`. This will allow configurations for overriding options in the specified build scripts.

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
      "out_folder": "path/to/my/app.js",
			"other_folder": "path/to/my/second/app.js"
    }
  }
```

## Options

There are a number of options available. Specify them in the `options` section of your config.

### compressor

Specifies which JavaScript compressor to use. Valid options are either `closure` or `uglify` (closure is the current default).

### includeSteal

Signals that you want to package `steal.js` as part of the produced `production.js`. To turn on this option set it to: `includeSteal: true`.

### depth

Specify the `depth` for packages.

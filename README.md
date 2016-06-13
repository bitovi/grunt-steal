# grunt-steal

[![Build Status](https://travis-ci.org/stealjs/grunt-steal.svg?branch=master)](https://travis-ci.org/stealjs/grunt-steal)

[Grunt](http://gruntjs.com/) tasks for [StealJS](http://stealjs.com/).

## Install

```shell
npm install grunt-steal --save-dev
```

## Use

In your `Gruntfile.js` add tasks for "steal-build" like:

```js
grunt.initConfig({
  "steal-build": {
    default: {
      options: {
        system: {
          config: __dirname + "/app/config.js",
          main: "app/app"
        },
        buildOptions: {
          minify: false
        }
      }
    }
  }
});
```

Then run with:

```
grunt steal-build
```

See [stealjs.com](http://stealjs.com/) for documentation on [build](http://stealjs.com/docs/steal-tools.cmd.build.html), [export](http://stealjs.com/docs/steal-tools.grunt.export.html), and [live-reload](http://stealjs.com/docs/steal-tools.grunt.live-reload.html).

## License

MIT

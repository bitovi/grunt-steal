@module {{}} grunt-steal
@parent StealJS.ecosystem
@group grunt-steal.tasks Tasks

@description

**grunt-steal** is a collection of [Grunt](http://gruntjs.com/) tasks for building out projects that use StealJS.

@option {grunt-steal.build} build

A task for building an application for production. Equivalent to using [steal-tools.build].

@option {grunt-steal.export} export

A task for exporting a project to another module format, for sharing with others who will use your project outside of StealJS.

@option {grunt-steal.live-reload} live-reload

A task for starting a [live-reload] server.

@body

## Installation

Use grunt-steal by first installing it as a development dependency:

```
> npm install grunt-steal --save-dev
```

## Use

In your *Gruntfile.js* load the tasks that grunt-steal provides in the same way you register any other Grunt tasks:

```js
grunt.loadNpmTasks("grunt-steal");
```

Then use one of the tasks provided in your Grunt configuration: [grunt-steal.build], [grunt-steal.export], and [grunt-steal.live-reload].

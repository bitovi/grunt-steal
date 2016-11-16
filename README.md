# grunt-steal

[![Build Status](https://travis-ci.org/stealjs/grunt-steal.svg?branch=master)](https://travis-ci.org/stealjs/grunt-steal)

[Grunt](http://gruntjs.com/) tasks for [StealJS](http://stealjs.com/).

## Install

```shell
npm install grunt-steal --save-dev
```

- <code>[__grunt-steal__ Object](#grunt-steal-object)</code>
  - <code>[steal-build Object](#steal-build-object)</code>
  - <code>[steal-export Object](#steal-export-object)</code>
  - <code>[steal-live-reload Object](#steal-live-reload-object)</code>

## API

##  `{Object}`

 
**grunt-steal** is a collection of [Grunt](http://gruntjs.com/) tasks for building out projects that use StealJS.




### <code>Object</code>

- __build__ <code>{[steal-build](#steal-build-object)}</code>:
  
  
  A task for building an application for production. Equivalent to using [steal-tools.build].
  
- __export__ <code>{[steal-export](#steal-export-object)}</code>:
  
  
  A task for exporting a project to another module format, for sharing with others who will use your project outside of StealJS.
  
- __live-reload__ <code>{[steal-live-reload](#steal-live-reload-object)}</code>:
  
  
  A task for starting a [live-reload] server.
  
### steal-build `{Object}`


The `steal-build` options object's values.



#### <code>Object</code>

- __steal__ <code>{Object}</code>:
  Specifies the `config` argument in
  [steal-tools.build]. The [config.main main] option must be specified. Typically,
  [config.configPath configPath] is also specified, as that is used to set 
  [config.baseURL baseURL].  Any Steal [config.config configuration] can be specified; however,
  most other __build__ configuration values are specified
  by [config.buildConfig], in the config file.
  
- __buildOptions__ <code>{Object}</code>:
  Specifies the `options` argument 
  to [steal-tools.build stealTools.build].
  
  
### steal-export `{Object}`


A Grunt multi task that loads modules, and writes them out in different formats.



#### <code>Object</code>

- __tasks__ <code>{Object\<String,steal-tools.export.object\>}</code>:
  An object with task names as keys,
  and exportObjects as values.
  
  ```
  grunt.initConfig({
    "steal-export": {
      taskName1: { ExportObject1 },
      taskName2: { ExportObject2 }
    }
  });
  ```
  
  Each [steal-tools.export.object] specifies:
  
   - A `steal` object that specifies the modules to be loaded.
   - An `options` object that specifies any special loading behavior, like turning logging.
   - An `outputs` object that specifies how the modules should be written out.
   
  ```
  grunt.initConfig({
    "steal-export": {
      taskName: {
        steal : { .. },
        options: { .. },
        outputs: { .. }
      }
    }
  });
  ```
  
  
### steal-live-reload `{Object}`


The `steal-live-reload` options object's values.



#### <code>Object</code>

- __steal__ <code>{Object}</code>:
  Specifies the `config` argument in
  [steal-tools.build]. The [config.main main] option must be specified. Typically,
  [config.configPath configPath] is also specified, as that is used to set
  [config.baseURL baseURL].  Any Steal [config.config configuration] can be specified; however,
  most other __build__ configuration values are specified
  by [config.buildConfig], in the config file.
  
- __liveReloadOptions__ <code>{Object}</code>:
  Specifies the `options` argument
  to [steal-tools.cmd.live-reload steal-tools live-reload].
  

## License

MIT

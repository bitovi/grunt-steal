module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
			files: {
				src: ['grunt.js', 'tasks/*.js']
			}
    },

    steal: {
			options: {
				compressor: 'uglify'
			},
			dist: {
				src: 'test/fixtures/index.html',
				dest: 'dist'
			}
    },

    concat: {
      dist: {
        src: ['test/fixtures/concat/a.js', 'test/fixtures/concat/b.js'],
        dest: 'tmp/concat.js'
      }
    },

    nodeunit: {
      all: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['steal', 'nodeunit']);

	// Linting
	grunt.registerTask('lint', ['jshint']);

  // Default task.
  grunt.registerTask('default', ['lint', 'test']);
};

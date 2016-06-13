'use strict';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		simplemocha: {
			options: {
				timeout: 30000
			},
			app: {
				src: ['test/steal_build.js']
			}
		}
	});

	grunt.registerTask('default', 'test');
	grunt.registerTask('test', [ 'simplemocha' ]);

	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadTasks("tasks");
};

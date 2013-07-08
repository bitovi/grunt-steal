var grunt = require('grunt'),
fs = require('fs');

exports.build = {
	script: function(test) {
		'use strict';

debugger;

		test.expect(1);

		var actual = grunt.file.read('dist/production.js'),
		expected = grunt.file.read('test/expected/production.js');

		test.equal(expected, actual, 'generated build script w/ default options');

		test.done();
	}
}

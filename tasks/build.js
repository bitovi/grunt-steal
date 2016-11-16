var build = require("steal-tools").build;

module.exports = function(grunt){

	grunt.registerMultiTask("steal-build", "Build a steal project into bundles.", function(){
		var done = this.async();
		var options = this.options();

    var steal = options.steal;
		var buildOptions = options.buildOptions;

		// Run the build with the provided options
		var promise = build(steal, buildOptions);
		if(promise.then) {
			var success = function(){
				grunt.log.writeln("Build was successful.");
				done();
			};

			var error = function(error) {
				grunt.log.writeln("Build has failed. ", error);
				done(error);
			};

			promise.then(success, error);
		}
	});

};

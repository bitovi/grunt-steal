module.exports = function(grunt) {
  grunt.registerMultiTask("steal", "Build your application with Steal", function() {
		var build = require("steal-tools").build;
		var done = this.async();
	
		grunt.config.requires("steal");

		var self = this;
		this.files.forEach(function(file){
			var src = file.src[0],
				dest = file.dest;

			var options = self.options({
				to: dest,
				packageSteal: self.options().includeSteal
			});

			build(src, options, done);
		});
  });
};

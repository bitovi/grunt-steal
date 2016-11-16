var liveReload = require("steal-tools/lib/stream/live");

module.exports = function(grunt){

	grunt.registerMultiTask("steal-live-reload", "Start live-reload server.", function(){
		var options = this.options();

		var steal = options.steal;
		var liveReloadOptions = options.liveReloadOptions || {};

		liveReload(steal, liveReloadOptions);
	});

};

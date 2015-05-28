module.exports = function(grunt)
{
	grunt.registerTask(
		'_pre-build-debug',
		'Default task to build all the project code', [
			'clean:manifests',
			'manifests:release'
		]
	);
	
	grunt.registerTask(
		'_pre-build',
		'Default task to build all the project code', [
			'clean:manifests',
			'manifests:debug'
		]	
	);
};
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	connect: {
	  server: {
	    options: {
		  port: 9001,
		  //keepalive: true,  // watch無しのserver単体で動かす時はtrue
		  hostname: 'localhost',
		  base: './'
		}
	  }
	},
	watch: {
	  files: ['./*/*'],
	  tasks: [],
	  options: {
	    livereload: true
	  }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['connect', 'watch']);
}

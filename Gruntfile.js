module.exports = function (grunt) {
    grunt.initConfig({
      run: {
        api: {
          options: {wait:false},
          args:['./app.js']
        }
      },
      mochali:{
        all:['test/*js'],
        options:{
          reportor:"spec",
          bail:true
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-run');
  
    grunt.registerTask('default', ['run','mocha','stop.api']);
  };
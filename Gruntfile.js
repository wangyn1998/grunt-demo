module.exports = function(grunt){
    grunt.initConfig({
        htmlhint:{
            option:{
                csslintrc:'./.csslintrc'
            },
            src:['*.css']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.registerTask('default',['csslint']);
}
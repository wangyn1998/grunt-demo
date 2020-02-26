module.exports = function(grunt){
    grunt.initConfig({
        htmlhint:{
            option:{
                eslintrc:'./.eslintrc,json'
            },
            target:['*.js']
        }
    });
    grunt.loadNpmTasks('grunt-eslint');
    grunt.registerTask('default',['eslint']);
}
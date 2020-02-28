module.exports = function(grunt){
    grunt.initConfig({
        mocha:{
            test:{
                src:'test/index.html'
            },
            option:{
                ren:true,
                reportor:'Dot'
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha');
    grunt.registerTask('default',['mocha']);
}
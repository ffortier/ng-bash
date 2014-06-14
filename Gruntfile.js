module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        concat: {
            dist: {
                src: ['src/main.js', 'src/**/*.js'],
                dest: 'dist/ng-bash.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/ng-bash.min.js': 'dist/ng-bash.js'
                }
            }
        }
    });

    grunt.registerTask('build', ['concat:dist', 'uglify:dist']);
};
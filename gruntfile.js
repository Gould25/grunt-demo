module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var config = grunt.file.readYAML('gruntconfig.yml');

  grunt.initConfig({
    sass: {
      dist: {
        src: config.scssDir+'style.scss',
        dest: config.cssDir+'style.css'
      }
    },
    concat:{
      dist:{
        src: config.jsSrcDir+'*.js',
        dest: config.jsConcatDir+'app.js'
      }
    },
    jshint:{
      options: {
        "eqeqeq": true
      },
      all:[
        'gruntfile.js',
        config.jsSrcDir+"*.js"
      ]
    },
    watch: {
      sass: {
        files: config.scssDir+'**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'sass',
    'concat',
    'watch'


  ]);
};

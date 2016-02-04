module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/breadcrumb.css': 'sass/_breadcrumb.scss',
          'css/style.css': 'sass/_style.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/breadcrumb.min.js': ['js/breadcrumb.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('dev',['watch', 'uglify']);
};
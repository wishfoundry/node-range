'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      test: 'npm test',

      jshint: 'node node_modules/jshint/bin/jshint .',
      jslint: 'find . -type d -name node_modules -prune -o -type d -name bower_components -prune -o -type f -name "*[-.]min.js" -prune -o -type f -name "*.bat" -prune -o -type f \\( -wholename "*/bin/*" -or -name "*.js" \\) -exec node_modules/.bin/jslint {} \\;',
      eslint: 'node node_modules/eslint/bin/eslint .',
      lili: 'bundle exec lili .',
      editorconfig: 'flcl . | xargs -n 100 editorconfig-cli check'
    },
    uglify: {
      options: {
        mangle: true
      },
      range: {
        files: {
          'dist/range.min.js': ['lib/range.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['exec:test']);

  grunt.registerTask('test', ['exec:test']);

  grunt.registerTask('lint', [
    'exec:jshint',
    // Go to bed, Crockford
    // 'exec:jslint',
    'exec:eslint',
    'exec:lili',
    'exec:editorconfig'
  ]);

  grunt.registerTask('getsize', function () {
    var size = require('fs').statSync('dist/range.min.js').size;
    grunt.log.writeln('range.min.js size is ' + size + ' bytes');
  });
  grunt.registerTask('size', 'get size of script previously minified', ['uglify', 'getsize']);

  grunt.registerTask('jshint', ['exec:jshint']);
  grunt.registerTask('jslint', ['exec:jslint']);
  grunt.registerTask('eslint', ['exec:eslint']);
  grunt.registerTask('lili', ['exec:lili']);
  grunt.registerTask('editorconfig', ['exec:editorconfig']);
};

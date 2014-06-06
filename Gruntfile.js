/* --------------------------------------------------------
 * http://gruntjs.com/getting-started
 * http://gruntjs.com/sample-gruntfile
 *
 * https://www.npmjs.org/package/grunt
 * https://www.npmjs.org/package/grunt-contrib-compass
 * https://www.npmjs.org/package/grunt-contrib-watch
 * https://www.npmjs.org/package/load-grunt-tasks
 * https://www.npmjs.org/package/time-grunt
 *
 * --------------------------------------------------------
 */

(function () {
    "use strict";
}());

module.exports = function (grunt) {
    // show elapsed time at the end
    require("time-grunt")(grunt);
    // load all grunt tasks
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        compass: {
            clean: {
                options: {
                    clean: true
                }
            },
            dev: {
                options: {
                    sassDir: "src/sass",
                    cssDir: "build/styles",
                    environment: "development",
                    outputStyle: "expanded",
                    config: "config-dev.rb"
                }
            },
            dist: {
                options: {
                    sassDir: "src/sass",
                    cssDir: "dist/styles",
                    environment: "production",
                    outputStyle: "compressed",
                    config: "config-dev.rb"
                }
            }

        },
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: ["build/**/*"]
            },
            sass: {
                files: "src/sass/**/*.scss",
                tasks: ["compass:dev"]
            }
        }
    });
};
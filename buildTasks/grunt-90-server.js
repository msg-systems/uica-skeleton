/* global global: false */
module.exports = function (grunt) {

    grunt.loadTasks("node_modules/lite-proxyServer")

    grunt.extendConfig({
        watch: {
            options: {
                nospawn: true,
                livereload: 35729
            }
        },
        focus: {
            watchProd: {
                include: ["app-static", "app-yaml", "app-code", "app-i18n", "app-style", "app-markup",
                    "copy-assets", "lib"]
            },
            watchDev: {
                include: ["appDev-static", "appDev-yaml", "appDev-code", "appDev-i18n", "appDev-style", "appDev-markup",
                    "copy-assets", "libDev"]
            }
        }
    });

    grunt.registerTask("serverDev", ["proxyServer", "focus:watchDev"]);
    grunt.registerTask("server", ["proxyServer", "focus:watchProd"]);

};
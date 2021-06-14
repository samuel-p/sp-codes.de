const glob = require("glob");
const minify = require('@node-minify/core');
const htmlMinifier = require('@node-minify/html-minifier');
const crass = require('@node-minify/crass');

console.log('compress all html and css files');

glob("dist/**/*.html", function (er, files) {
    files.forEach(file => {
        console.log(file);
        minify({
            compressor: htmlMinifier,
            input: file,
            output: file,
            options: {
                collapseWhitespace: true,
                conservativeCollapse: true
            },
        });
    })
});

glob("dist/**/*.css", function (er, files) {
    files.forEach(file => {
        console.log(file);
        minify({
            compressor: crass,
            input: file,
            output: file
        });
    })
});

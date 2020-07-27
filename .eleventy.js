const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/scss/");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy({
        "src/img": "img",
        "src/font": "font",
        "node_modules/@fortawesome/fontawesome-free/webfonts/": "font",
        "node_modules/flag-icon-css/flags/4x3/(de|us)*": "flags"
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_includes/layouts",
            output: "dist"
        }
    };
};

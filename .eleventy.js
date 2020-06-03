const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./scss/");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy({
        "img": "img",
        "font": "font",
        "node_modules/@fortawesome/fontawesome-free/webfonts/": "font",
        "node_modules/fork-awesome/fonts/": "font",
        "node_modules/flag-icon-css/flags/4x3/(de|us)*": "flags"
    });

    eleventyConfig.addCollection("sites_en", function(collection) {
        return collection.getFilteredByGlob(".sites/en/posts/*.md");
    });

    return {
        dir: {
            input: "sites",
            includes: "_includes",
            layouts: "_includes/layouts",
            output: "dist"
        }
    };
};

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/scss/");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy({
        "src/img": "img",
        "src/font": "font",
        "src/favicon.*": "",
    });
    eleventyConfig.addShortcode("translatedUrl", function (currentLocale, newLocale) {
        return this.page.url.replace(new RegExp(`\/${currentLocale}\/`), `/${newLocale}/`);
    });

    eleventyConfig.addFilter('year', function (value) {
        return value * 12;
    });

    eleventyConfig.addFilter("sum", function (value) {
        return value.map(d => d.amount).reduce((a, b) => a + b);
    });

    eleventyConfig.addFilter("amount", function (value) {
        // TODO update language dynamically
        return value.toLocaleString('de', {minimumFractionDigits: 2});
    });

    eleventyConfig.addFilter("banktransfers", function (donations) {
        return donations
            .flatMap(y => y.donations)
            .filter(d => d.via === 'banktransfer')
            .filter(d => d.first)
            .length;
    });

    eleventyConfig.addFilter("cash", function (donations) {
        return donations
            .flatMap(y => y.donations)
            .filter(d => d.via === 'cash')
            .filter(d => d.first)
            .length;
    });

    return {
        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: "njk",
        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: "njk",
        // Opt-out of pre-processing global data JSON files: (default: `liquid`)
        dataTemplateEngine: false,

        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_includes/layouts",
            data: "_data",
            output: "dist"
        }
    };
};

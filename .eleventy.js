const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/scss/");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy({
        "src/img": "img",
        "src/font": "font",
        "node_modules/@fortawesome/fontawesome-free/webfonts/": "font",
        "node_modules/flag-icon-css/flags/4x3/(de|us)*": "flags"
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
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_includes/layouts",
            output: "dist"
        }
    };
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({ "src/_data": "_data" });

  // Copy the CMS admin files verbatim; don't run them through the template engine.
  eleventyConfig.ignores.add("src/admin/**");

  eleventyConfig.addFilter("monthYear", function (value) {
    if (!value) return "";
    const d = new Date(String(value).slice(0, 10) + "T00:00:00Z");
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};

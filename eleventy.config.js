module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "src/_data": "_data" });

  eleventyConfig.addCollection("bookshelf", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/bookshelf/*.md");
  });

  eleventyConfig.addCollection("readingList", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/reading-list/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};

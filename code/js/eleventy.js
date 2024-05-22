const lunr = require("lunr");

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("searchIndex", function(collectionApi) {
    const index = lunr(function() {
      this.ref("url");
      this.field("title");
      this.field("content");

      collectionApi.getAll().forEach(item => {
        this.add({
          title: item.data.title,
          content: item.templateContent,
          url: item.url
        });
      });
    });

    return index;
  });

  eleventyConfig.addPassthroughCopy("search-index.json");

  return {
    passthroughFileCopy: true,
  };
};

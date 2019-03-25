const MarkdownIt = require('markdown-it');
const md = new MarkdownIt()

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img')
    eleventyConfig.addPassthroughCopy('src/css')
    eleventyConfig.addNunjucksShortcode("markdown", function(text) { return md.render(text) });
    return {
      passthroughFileCopy: true,
      dir: {
        input: 'src'
      },
      markdownTemplateEngine: 'njk'
    }
  }
   
module.exports = {
  collections_config: {
    posts: {
      name: "Posts",
      path: "src/_posts",
      parser: "frontmatter",
      output: true,
      url: "/posts/[slug]",
    },
    pages: {
      name: "Pages",
      path: "src/_pages",
      parser: "frontmatter",
      output: true,
      url: "/[slug]",
    },
  },
};

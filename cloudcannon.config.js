module.exports = {
  collections_config: {
    posts: {
      name: "Posts",
      path: "src/_posts",
      parser: "frontmatter",
      output: true,
      url: "/posts/[slug]",
    },
  },
};

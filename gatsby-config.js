module.exports = {
  siteMetadata: {
    title: `juniper wilde`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
  ],
};

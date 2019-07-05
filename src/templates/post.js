import React from 'react';
import { graphql } from 'gatsby';

import Sidebar from '../components/sidebar/sidebar';

export default (props) => (
  <div className="wrapper">
    <Sidebar />
    <div className="page">
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <h4>{props.data.markdownRemark.frontmatter.date}</h4>
      <div
        className="post"
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html,
        }}
      />
    </div>
  </div>
);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

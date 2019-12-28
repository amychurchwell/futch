import React from 'react';
import { Link, graphql } from 'gatsby';

import Sidebar from '../components/sidebar/sidebar';

export default (props) => {
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="page">
        <h2>Blog posts, baked with love!</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div className="post" key={node.fields.slug}>
              <div className="postTitle">
                <Link to={node.fields.slug}>{title}</Link>
                <span> - </span>
                <span className="postDate">{node.frontmatter.date}</span>
              </div>
              <div className="postExcerpt"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

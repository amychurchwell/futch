import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Sidebar from '../components/sidebar/sidebar';

export default () => (
  <div className="wrapper">
    <Sidebar />
    <div className="page">
      <h2>Programmer - Sea Siren - Wolf Queen</h2>
      <p>I am very sleepy and busy please call back later thanks</p>
      <p>
        Should you need me for kind words or collaboration please, never
        hesitate to get in <a href="mailto:juniper.r.wilde@gmail.com">touch</a>
      </p>
      <p>Stay safe, ily</p>
    </div>
  </div>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "portrait.png" }) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          base64
        }
      }
    }
  }
`;

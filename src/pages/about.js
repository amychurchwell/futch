import React from 'react';

import Layout from "../components/layout";

export default () => (
  <Layout>
    <h2>June's a southern trash possum</h2>
    <p className="indentlessLine">She's a huge fan of dogs</p>
    <p className="indentlessLine">Elle est Cadienne et Créole de Louisiane</p>
    <p className="indentlessLine">
      She's doing platform engineering at{' '}
      <a href="https://www.mozilla.org">Mozilla</a>
    </p>
    <p className="indentlessLine">
      She's making digital friends at{' '}
      <a href="https://github.com/rosegardencult">rose garden cult</a>
    </p>
    <section className="webring">
      <iframe
        title="abelian"
        width="100%"
        height="80"
        id="abelian-webring-nav"
        src="https://abelian.now.sh/embed/"
        frameBorder="no"
        scrolling="no"
      />
    </section>
  </Layout>
);

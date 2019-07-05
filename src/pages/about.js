import React from 'react';

import Sidebar from '../components/sidebar/sidebar';

export default () => (
  <div className="wrapper">
    <Sidebar />
    <div className="page">
      <h2>June is a rad programmer</h2>
      <p>She's a huge fan of dogs</p>
      <p>Elle est Cadienne et Créole de Louisiane</p>
      <p>
        She's doing platform engineering at{' '}
        <a href="https://www.mozilla.org">Mozilla</a>
      </p>
      <p>
        She's making games with friends as{' '}
        <a href="https://sogoodgames.itch.io">So Good Games</a>
      </p>
      <p>
        She's making digital friends at{' '}
        <a href="https://github.com/rosegardencult">rose garden cult</a>
      </p>
      <p>
        <iframe
          title="abelian"
          width="100%"
          height="100%"
          id="abelian-webring-nav"
          src="https://abelian.now.sh/embed/"
          frameBorder="no"
          scrolling="no"
        />
      </p>
    </div>
  </div>
);

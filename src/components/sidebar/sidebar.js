import { Link } from 'gatsby';
import React from 'react';

import sidebarStyles from './sidebar.module.css';

export default () => (
  <div className={sidebarStyles.sidebar}>
    <div className={[sidebarStyles.div_one, sidebarStyles.title].join(' ')}>
      <Link to="/">juniper wilde</Link>
    </div>
    <div className={sidebarStyles.div_two}>
      <Link to="/">
        <img src="/portrait.png" alt="my beautiful face" />
      </Link>
    </div>
    <div className={sidebarStyles.div_three}>
      <Link to="/">home</Link>
    </div>
    <div className={sidebarStyles.div_four}>
      <Link to="/about">about</Link>
    </div>
    <div className={sidebarStyles.div_five}>
      <Link to="/blog">blog</Link>
    </div>
    <div className={sidebarStyles.div_six} />
    <div className={sidebarStyles.div_seven}>
      <iframe
        title="abelian"
        width="100%"
        height="100%"
        id="abelian-webring-nav"
        src="https://abelian.now.sh/embed/"
        frameBorder="no"
        scrolling="no"
      />
    </div>
  </div>
);

import { Link } from 'gatsby';
import React from 'react';

import sidebarStyles from './sidebar.module.css';

export default () => (
  <div className={sidebarStyles.sidebar}>
    <div className={[sidebarStyles.div_one, sidebarStyles.title].join(' ')}>
      <Link to="/">
        <img src="/portrait.png" alt="a cute dog" />
        juniper wilde
      </Link>
    </div>
    <div className={sidebarStyles.div_two}>
      <Link to="/">⚜️ home</Link>
    </div>
    <div className={sidebarStyles.div_three}>
      <Link to="/love">💛 love</Link>
    </div>
    <div className={sidebarStyles.div_four}>
      <Link to="/blog">🗒️ blog</Link>
    </div>
    <div className={sidebarStyles.div_five}>
      <Link to="/work">⚒️ work</Link>
    </div>
    <div className={sidebarStyles.div_six}>
      <Link to="/about">👩‍💻 about</Link>
    </div>
    <div className={sidebarStyles.div_seven}>
      copyright juniper wilde 2019
    </div>
  </div>
);

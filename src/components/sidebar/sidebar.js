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
      <Link to="/">
        <span role="img" aria-label="fleur de lis">
          ⚜️
        </span>
        home
      </Link>
    </div>
    <div className={sidebarStyles.div_three}>
      <Link to="/love">
        <span role="img" aria-label="yellow heart">
          💛
        </span>
        love
      </Link>
    </div>
    <div className={sidebarStyles.div_four}>
      <Link to="/blog">
        <span role="img" aria-label="spiral notepad">
          🗒️
        </span>
        blog
      </Link>
    </div>
    <div className={sidebarStyles.div_five}>
      <Link to="/work">
        <span role="img" aria-label="hammer and pick">
          ⚒️
        </span>
        work
      </Link>
    </div>
    <div className={sidebarStyles.div_six}>
      <Link to="/about">
        <span role="img" aria-label="woman technologist: light skin tone">
          👩🏻‍💻
        </span>
        about
      </Link>
    </div>
    <div className={sidebarStyles.div_seven}>copyright juniper wilde 2019</div>
  </div>
);

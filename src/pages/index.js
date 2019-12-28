import React from 'react';

import Sidebar from '../components/sidebar/sidebar';

export default () => (
  <div className="wrapper">
    <Sidebar />
    <div className="page">
      <h2>Programmer - Sea Siren - Possum</h2>
      <p className="indentlessLine">I am very sleepy and busy please call back later thanks</p>
      <p className="indentlessLine">
        Should you need me for kind words or collaboration please, never
        hesitate to get in <a href="mailto:juniper.r.wilde@gmail.com">touch</a>
      </p>
      <p className="indentlessLine">Stay safe, ily</p>
    </div>
  </div>
);

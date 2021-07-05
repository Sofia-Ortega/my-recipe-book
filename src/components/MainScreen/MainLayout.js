import React from 'react';
import AppBarLayout from "./AppBar/AppBarLayout.js" ;

const MainLayout = () => (
  <div>
    <div>
      <AppBarLayout />
    </div>
    <div>
      <h3>CARDS</h3>
    </div>
    <div>
      <button>ADD</button>
    </div>
  </div>
);

export default MainLayout;

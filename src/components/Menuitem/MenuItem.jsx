import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='app__menuItems'>
    <div className="app_menuItems-head">
      <div className="app__menuItem-name">
        <p className="p__cormorant">
          {title}
        </p>
      </div>

      <div className='app__menuItems-dash'/>

      <div className="app__menuItem-price">
        <p className="p__cormorant">
          {price}
        </p>
      </div>
    </div>
    
<div className="app__menuItem-sub" style={{color:'#AAA'}}>
        <p className="p__opensans">
          {tags}
        </p>
      </div>


  </div>
);

export default MenuItem;

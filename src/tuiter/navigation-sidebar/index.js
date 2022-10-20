import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
 return (
    <div className="list-group mb-1">
     <a className="list-group-item">
      <i className="bi bi-twitter"></i>
     </a>
     <a href="#" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
      <i className="bi bi-house-fill"></i>
      <p className="d-none d-xl-inline d-xxl-inline"> Home</p>
     </a>
     <a href="#" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
      <i className="bi bi-hash d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline"> Explore</p>
     </a>
     <a href="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
      <i className="bi bi-bell-fill d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline"> Notifications</p>
     </a>
     <a href="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
      <i className="bi bi-envelope-fill d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline"> Messages</p>
     </a>
     <a href="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
      <i className="bi bi-bookmark-fill d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline"> Bookmarks</p>
     </a>
     <a href="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
      <i className="bi bi-list-ul d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline"> Lists</p>
     </a>
     <a href="#" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
      <i className="bi bi-person-fill d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline"> Profile</p>
     </a>
     <a href="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
      <i className="bi bi-three-dots d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline"> More</p>
     </a>
    </div>
 );
};

export default NavigationSidebar;
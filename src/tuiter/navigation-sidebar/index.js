import React, {useState} from "react";
import { Link } from 'react-router-dom';

const NavigationSidebar = (
) => {
 const [activeTab, setActiveTab] = useState('home');
 const toggle = tab => {
     if (activeTab !== tab) setActiveTab(tab);
 }
 return (
    <div className="list-group mb-1">
     <Link className="list-group-item">
      <i className="bi bi-twitter"></i>
      <p className="d-none d-xl-inline d-xxl-inline">  Tuiter</p>
     </Link>
     <Link to="/tuiter"
        onClick={() => {toggle('home')}}
        className={`list-group-item
                    ${activeTab === 'home'?'active':''}`}>
      <i className="bi bi-house-fill"></i>
      <p className="d-none d-xl-inline d-xxl-inline">  Home</p>
     </Link>
     <Link to="/tuiter/explore"
        onClick={() => {toggle('explore')}}
        className={`list-group-item
                    ${activeTab === 'explore'?'active':''}`}>
      <i className="bi bi-hash d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline">  Explore</p>
     </Link>
     <Link to="/#" 
        onClick={() => {toggle('notifications')}}
        className={`list-group-item
                    ${activeTab === 'notifications'?'active':''}`}>
      <i className="bi bi-bell-fill d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline">  Notifications</p>
     </Link>
     <Link to="/#" 
        onClick={() => {toggle('messages')}}
        className={`list-group-item
                    ${activeTab === 'messages'?'active':''}`}>
      <i className="bi bi-envelope-fill d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline">  Messages</p>
     </Link>
     <Link to="/#" 
        onClick={() => {toggle('bookmarks')}}
        className={`list-group-item
                    ${activeTab === 'bookmarks'?'active':''}`}>
      <i className="bi bi-bookmark-fill d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline">  Bookmarks</p>
     </Link>
     <Link to="/#" 
        onClick={() => {toggle('lists')}}
        className={`list-group-item
                    ${activeTab === 'lists'?'active':''}`}>
      <i className="bi bi-list-ul d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline">  Lists</p>
     </Link>
     <Link to="/#" 
        onClick={() => {toggle('profile')}}
        className={`list-group-item
                    ${activeTab === 'profile'?'active':''}`}>
      <i className="bi bi-person-fill d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline">  Profile</p>
     </Link>
     <Link to="/#" 
        onClick={() => {toggle('more')}}
        className={`list-group-item
                    ${activeTab === 'more'?'active':''}`}>
      <i className="bi bi-three-dots d-inline"></i>
      <p className="d-none d-xl-inline d-xxl-inline">  More</p>
     </Link>
    </div>
 );
};

export default NavigationSidebar;
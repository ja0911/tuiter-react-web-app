import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import { useLocation } from 'react-router-dom';
import whoReducer
  from "./reducers/who-reducer"; 
import tuitsReducer from "./reducers/tuits-reducer";
import postsReducer from "./reducers/posts-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer,
    tuits: tuitsReducer,
    posts: postsReducer}});

function Tuiter() {
  let { pathname } = useLocation();
  const renderSwitch = path => {
    switch(path) {
      case '/tuiter/explore':
        return <ExploreComponent/>;
      default:
        return <HomeComponent/>;
    }
  };
  return(
    <Provider store={store}>
      <div className="container">
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar/>
          </div>
          <div className="col-10 col-md-10 col-lg-7 col-xl-6"
              style={{"position": "relative"}}>
            {renderSwitch(pathname)}
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
      </div>
    </Provider>
  );
 }
 export default Tuiter
import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = (
 {
   tuit =  {
    "_id": 234,
    "topic": "Space",
    "userName": "SpaceX",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "image": "https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg",
    "liked": true,
    "disliked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "dislikes":123,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
 }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuitThunk(id));
    }
  return (
    <li className="list-group-item">
        <div className="row">
            <div className="col-1 pe-0">
                <img className="float-end rounded-circle" alt="tuit author" src={tuit.image} height="45px" width="45px" style={{objectFit:"cover"}}></img>
            </div>
            <div className="col-11 ps-3 pe-2">
                <i className="bi bi-x-lg float-end"
                onClick={() => deleteTuitHandler(tuit._id)}></i>
                {tuit.userName !== '' ? 
                  <div>
                    <div className="fw-bolder"> 
                      {tuit.userName} 
                      <i background="blue" className="bi bi-patch-check-fill pt-1 ps-2 pe-1 text-primary"></i>
                      {tuit.handle !== '' ? <text className="fw-normal"> {tuit.handle} • {tuit.time}</text> : ''}
                    </div>
                  </div>
                : ''}
                <TuitStats
                tuit={tuit}/>
            </div>
        </div>
    </li>
 );
};
export default TuitItem;
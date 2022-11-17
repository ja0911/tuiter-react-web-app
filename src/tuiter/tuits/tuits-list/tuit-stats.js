import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = (
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

 return(
    <div>
    {tuit.tuit !== '' ? <div> {tuit.tuit} </div> : ''}
      <div className="row mt-3">
        <div className="col-2 pe-3"><i className="bi bi-chat"></i>  {tuit.replies}</div>
        <div className="col-2 pe-3"><i className="bi bi-arrow-repeat"></i>{tuit.retuits}</div>
        <div className="col-2 pe-1">
            <button className="btn btn-default pt-0 pb-0 ps-0 pe-0"
            onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
                liked: !(tuit.liked),
            }))}>
            <i className={`bi ${tuit.liked ? 'bi-heart-fill text-danger':'bi-heart'}`}></i>
            {tuit.likes}
            </button> 
        </div>
        <div className="col-2 pe-3">
            <button className="btn btn-default pt-0 pb-0 ps-0 pe-0"
            onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
                disliked: !(tuit.disliked),
            }))}>
            <i className={`bi ${tuit.disliked ? 'bi bi-hand-thumbs-down-fill':'bi bi-hand-thumbs-down'}`}></i>
            {tuit.dislikes}
            </button> 
        </div>
        <div className="col-2 pe-3"><i className="bi bi-share"></i></div>
      </div>  
    </div>
 );
};
export default TuitStats;
import React from "react";
const PostSummaryItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg"
   }
 }
) => {
 return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-10 pe-3">
                <div>
                    {post.userName !== '' ? <div class= "text-secondary"> {post.userName} <i className="fa-solid fa-circle-check pt-1 ps-1 pe-1"></i> - {post.time} </div> : ''}
                </div>
                {post.topic !== '' ? <div class="fw-bolder"> {post.topic} </div> : ''}
                {post.title !== '' ? <div> {post.title} </div> : ''}
                {post.tweets !== undefined ? <div class="text-secondary"> {post.tweets} Tweets </div> : ''}
            </div>
            <div className="col-2">
                <img className="float-end rounded" alt="post summary" src={post.image} height="90px" width="90px" style={{objectFit:"cover"}}></img>
            </div>
        </div>
    </li>
 );
};
export default PostSummaryItem;
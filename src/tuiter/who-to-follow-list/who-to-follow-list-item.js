import React from "react";

const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg' }
 }
) => {
 return(
    <li className="list-group-item ps-4 pe-4">
        <div className="row" style={{height: "50px"}}>
            <div className="col-2 ps-0 pe-0">
                <img className="float-end rounded-circle" alt="user profile" src={who.avatarIcon} height="50px" width="50px" style={{"objectFit": "cover"}}></img>
            </div>
            <div className="col-7 pe-0">
                <div className= "fw-bolder">
                    {who.userName}
                    <i className="bi bi-patch-check pt-1 ps-1 pe-1"></i>
                </div>
                <div> @{who.handle} </div>
            </div>
            <div className="col-3 ps-0 pe-0 text-center">
                <button className="btn btn-primary mt-1 btn-sm rounded-pill">
                    Follow
                </button>
            </div>
        </div>
    </li>
 );
};
export default WhoToFollowListItem;
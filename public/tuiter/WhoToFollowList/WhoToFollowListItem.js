const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item ps-4 pe-4">
        <div class="row" style="height: 50px;">
            <div class="col-2 ps-0 pe-0">
                <img class="float-end rounded-circle" src=${who.avatarIcon} height="50px" width="50px" style="object-fit:cover;">
            </div>
            <div class="col-7 pe-0">
                <div>
                    <div class= "fw-bolder" style="float:left">${who.userName}</div>
                    <i class="fa-solid fa-circle-check pt-1 ps-1 pe-1" style="float:left"></i>
                    <div class="wd-float-done"></div>
                    <div class="text-white">
                        @${who.handle}
                    </div>
                </div>
            </div>
            <div class="col-3 ps-0 pe-0 text-center">
                <button class="btn btn-primary mt-1 btn-sm rounded-pill">
                    Follow
                </button>
            </div>
        </div>
    </li>`
    );
   }

export default WhoToFollowListItem;
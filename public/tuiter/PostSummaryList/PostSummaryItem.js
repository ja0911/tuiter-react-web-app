const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-10 pe-3">
                ${post.topic !== '' ? `<div class="text-secondary"> ${post.topic} </div>` : ''}
                <div>
                    ${post.userName !== '' ? `<div class= "fw-bolder" style="float:left"> ${post.userName} </div>` : ''}
                    <i class="fa-solid fa-circle-check pt-1 ps-1 pe-1" style="float:left"></i>
                    <div class="text-secondary" style="float:left"> - ${post.time} </div>
                    <div class="wd-float-done"></div>
                </div>
                ${post.title !== '' ?
                `<div class="fw-bolder">
                    ${post.title}
                </div>` : ''}
                ${post.tweets !== undefined ?
                `<div class="text-secondary"> ${post.tweets} Tweets </div>` : ''}
            </div>
            <div class="col-2">
                <img class="float-end rounded" src=${post.image} height="90px" width="90px" style="object-fit:cover;">
            </div>
        </div>
    </li>`
    );
   }
   export default PostSummaryItem;
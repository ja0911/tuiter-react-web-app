import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";

const WhoToFollowList = () => {
   return(`
      <ul class="list-group">
        <li class="list-group-item">
            <div class="row">
                <div class="fw-bolder">
                    Who to follow
                </div>
            </div>
        </li>
         ${
            whos.map(who => {
               return(WhoToFollowListItem(who));
            }).join('')
         }
      </ul>
   `);
}
export default WhoToFollowList;
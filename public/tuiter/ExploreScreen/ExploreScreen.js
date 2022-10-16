import PostSummaryList from "../PostSummaryList/index.js";

const ExploreScreen = () => {
    return(`
            <div class="row mb-2">
                <div class="col-11">
                    <i class="fa-solid fa-magnifying-glass wd-search-icon position-absolute"></i>
                    <input class="wd-text-input ps-5 form-control rounded-pill" type="text" id="Name"
                    placeholder="Search Twitter"/>
                </div>
                <a class="col-1 wd-explore-settings" href="explore-settings.html">
                    <i class="fa-solid fa-gear" style="font-size: 1.6em"></i>
                </a>
           </div>
           <ul class="nav mb-2 nav-tabs mt-1 mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">
                        Sports
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link pe-0 d-sm-none d-md-block" href="#" tabindex="-1">
                        Entertainment
                    </a>
                </li>
           </ul>
           <div class="position-relative">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" width="100%"/>
                <h2 class="position-absolute bottom-0 left-0 ps-2" style="color:#1F1F1F; font-weight:600">SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreScreen;

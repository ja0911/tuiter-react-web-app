const NavigationSidebar = () => {
    return(`
    <div class="list-group mb-1">
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fa-brands fa-twitter"></i>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fa-solid fa-house-chimney d-inline"></i>
       <p class="d-none d-xl-inline d-xxl-inline">Home</p>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action active">
       <i class="fa-solid fa-hashtag d-inline"></i>
       <p class="d-none d-xl-inline d-xxl-inline">Explore</p>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fa-solid fa-bell d-inline"></i>
       <p class="d-none d-xl-inline d-xxl-inline">Notifications</p>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fa-solid fa-envelope d-inline"></i>
       <p class="d-none d-xl-inline d-xxl-inline">Messages</p>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fa-solid fa-bookmark d-inline"></i>
       <p class="d-none d-xl-inline d-xxl-inline">Bookmarks</p>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fa-solid fa-list d-inline"></i>
       <p class="d-none d-xl-inline d-xxl-inline">Lists</p>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fa-solid fa-user d-inline"></i>
       <p class="d-none d-xl-inline d-xxl-inline">Profile</p>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fa-solid fa-circle-minus"></i>
       <p class="d-none d-xl-inline d-xxl-inline">More</p>
    </a>
    <button class="btn btn-primary mt-1 rounded-pill ps-0 pe-0" width="100px">
        Tweet
    </button>
    </div>
    `);
   }
   export default NavigationSidebar;
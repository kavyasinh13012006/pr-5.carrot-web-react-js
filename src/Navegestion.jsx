function Navegestion() {
   return (
      <>
         <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
               {/* Logo */}
               <div className="col-3">
                  <img
                     src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png"
                     alt="logo"
                     className="logo"
                  />
               </div>

               {/* Search Input */}
               <div className="col-5">
                  <div className="input-group">
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Search for items..."
                     />
                     <div className="dropdown">
                        <button
                           className="btn btn-secondary dropdown-toggle"
                           type="button"
                           id="dropdownMenuButton1"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           All Categories
                        </button>
                        <ul
                           className="dropdown-menu"
                           aria-labelledby="dropdownMenuButton1"
                        >
                           <li><a className="dropdown-item" href="#">Action</a></li>
                           <li><a className="dropdown-item" href="#">Another action</a></li>
                           <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                     </div>
                     <button className="btn btn-outline-secondary" type="button">
                        <i className="fa fa-search"></i>
                     </button>
                  </div>
               </div>

               {/* Dropdown */}
               <div className="col-4">
                  <i class="fa-solid fa-user"></i><span>Account</span>
                  <i class="fa-solid fa-heart"></i><span>Wishlist</span>
                  <i class="fa-solid fa-cart-shopping"></i><span>Cart</span>
               </div>
            </div>
         </div>
      </>
   );
}

export default Navegestion;

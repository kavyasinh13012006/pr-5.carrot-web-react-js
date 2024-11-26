import { Link } from "react-router";

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    {/* Sidebar Toggle Button */}
                    <div className="col-2 d-flex justify-content-start">
                        <button type="button" className="btn btn-outline-secondary">
                            <i className="fa-solid fa-bars-staggered"></i>
                        </button>
                    </div>

                    {/* Centered Navbar */}
                    <div className="col-7 text-center">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid justify-content-center">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle" href="#" id="categoryDropdown">
                                                Category
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                                                <li><a className="dropdown-item" href="#">Subcategory 1</a></li>
                                                <li><a className="dropdown-item" href="#">Subcategory 2</a></li>
                                                <li><a className="dropdown-item" href="#">Subcategory 3</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle" href="#" id="productsDropdown">
                                                Products
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                                                <li><a className="dropdown-item" href="#">Product 1</a></li>
                                                <li><a className="dropdown-item" href="#">Product 2</a></li>
                                                <li><a className="dropdown-item" href="#">Product 3</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle" href="#" id="pagesDropdown">
                                                Pages
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                                                <li><a className="dropdown-item" href="#">Page 1</a></li>
                                                <li><a className="dropdown-item" href="#">Page 2</a></li>
                                                <li><a className="dropdown-item" href="#">Page 3</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle" href="#" id="blogDropdown">
                                                Blog
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                                                <li><a className="dropdown-item" href="#">Blog Post 1</a></li>
                                                <li><a className="dropdown-item" href="#">Blog Post 2</a></li>
                                                <li><a className="dropdown-item" href="#">Blog Post 3</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle" href="#" id="elementsDropdown">
                                                Elements
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="elementsDropdown">
                                                <li><a className="dropdown-item" href="#">Element 1</a></li>
                                                <li><a className="dropdown-item" href="#">Element 2</a></li>
                                                <li><a className="dropdown-item" href="#">Element 3</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active" href="#" id="elementsDropdown">
                                                <Link to={"/contact"}>Contact <i class="fa-solid fa-phone"></i></Link>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/* Contact Section */}
                    <div className="col-3 d-flex justify-content-end">
                        <p className="m-0">
                            <i className="fa-solid fa-phone"></i> +123 ( 456 ) 7890
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;

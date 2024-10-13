import React from 'react';

function Products() {
    return (
        <>
            <div className="custom-products-section">
                <h2>Popular Products</h2>
                <p className="custom-section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <div className="custom-product-content d-flex">
                    {/* Filter Sidebar */}
                    <div className="col-3 custom-filter-sidebar">
                        <div className="custom-filter-buttons">
                            <button className="custom-filter-btn">All<span><i className="fa-solid fa-arrow-right"></i></span></button>
                            <button className="custom-filter-btn">Snacks<span><i className="fa-solid fa-arrow-right"></i></span></button>
                            <button className="custom-filter-btn">Fruits<span><i className="fa-solid fa-arrow-right"></i></span></button>
                            <button className="custom-filter-btn">Vegetables<span><i className="fa-solid fa-arrow-right"></i></span></button>
                            <button className="custom-filter-btn">Bakery<span><i className="fa-solid fa-arrow-right"></i></span></button>
                        </div>
                        <div className="custom-product-banner">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/product-banner.jpg" alt="Product Banner" />
                        </div>
                    </div>

                    {/* Product Cards */}
                    <div className="col-9 custom-product-cards-container">
                        <div className="custom-product-cards d-flex mb-5">
                            <div className="custom-card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="custom-card-img-top" alt="Vegetables" />
                                <div className="custom-card-body">
                                    <h5 className="custom-card-title">Vegetables</h5>
                                    <p className="custom-card-text">Fresh organic villa farm lemon 500gm pack</p>
                                    <h4 className="custom-card-price">$120.25</h4>
                                    <a href="#" className="custom-btn-primary">Shop Now</a>
                                </div>
                            </div>
                            <div className="custom-card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg" className="custom-card-img-top" alt="Snacks" />
                                <div className="custom-card-body">
                                    <h5 className="custom-card-title">Snacks</h5>
                                    <p className="custom-card-text">Best snacks with hazelnut pack 200gm</p>
                                    <h4 className="custom-card-price">$145.00</h4>
                                    <a href="#" className="custom-btn-primary">Shop Now</a>
                                </div>
                            </div>
                            <div className="custom-card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" className="custom-card-img-top" alt="Fruits" />
                                <div className="custom-card-body">
                                    <h5 className="custom-card-title">Fruits</h5>
                                    <p className="custom-card-text">Fresh organic apple 1kg from Shimla</p>
                                    <h4 className="custom-card-price">$120.25</h4>
                                    <a href="#" className="custom-btn-primary">Shop Now</a>
                                </div>
                            </div>
                            <div className="custom-card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/17.jpg" className="custom-card-img-top" alt="Bakery" />
                                <div className="custom-card-body">
                                    <h5 className="custom-card-title">Bakery</h5>
                                    <p className="custom-card-text">Fresh bakery bread 400gm pack</p>
                                    <h4 className="custom-card-price">$120.25</h4>
                                    <a href="#" className="custom-btn-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="custom-product-cards d-flex">
                            <div className="custom-card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="custom-card-img-top" alt="Vegetables" />
                                <div className="custom-card-body">
                                    <h5 className="custom-card-title">Vegetables</h5>
                                    <p className="custom-card-text">Fresh organic villa farm lemon 500gm pack</p>
                                    <h4 className="custom-card-price">$120.25</h4>
                                    <a href="#" className="custom-btn-primary">Shop Now</a>
                                </div>
                            </div>
                            <div className="custom-card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg" className="custom-card-img-top" alt="Snacks" />
                                <div className="custom-card-body">
                                    <h5 className="custom-card-title">Snacks</h5>
                                    <p className="custom-card-text">Best snacks with hazelnut pack 200gm</p>
                                    <h4 className="custom-card-price">$145.00</h4>
                                    <a href="#" className="custom-btn-primary">Shop Now</a>
                                </div>
                            </div>
                            <div className="custom-card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" className="custom-card-img-top" alt="Fruits" />
                                <div className="custom-card-body">
                                    <h5 className="custom-card-title">Fruits</h5>
                                    <p className="custom-card-text">Fresh organic apple 1kg from Shimla</p>
                                    <h4 className="custom-card-price">$120.25</h4>
                                    <a href="#" className="custom-btn-primary">Shop Now</a>
                                </div>
                            </div>
                            <div className="custom-card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/17.jpg" className="custom-card-img-top" alt="Bakery" />
                                <div className="custom-card-body">
                                    <h5 className="custom-card-title">Bakery</h5>
                                    <p className="custom-card-text">Fresh bakery bread 400gm pack</p>
                                    <h4 className="custom-card-price">$120.25</h4>
                                    <a href="#" className="custom-btn-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;

import React from 'react'

function OfferProducts() {
    return (
        <>
            <div className="container-sm">
                <div className="offerBanner d-flex">
                    <div className="col-4 offer-product">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/2.jpg" alt="Product 1" />
                        <div className="offer-content">
                            <h3>Fresh & Healthy Organic Fruits</h3>
                            <p>35% Off on first order</p>
                            <button className="offer-btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-4 offer-product">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/1.jpg" alt="Product 2" />
                        <div className="offer-content">
                            <h3>Fresh & Healthy Organic Vegetables</h3>
                            <p>35% Off on first order</p>
                            <button className="offer-btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-4 offer-product">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/3.jpg" alt="Product 3" />
                        <div className="offer-content">
                            <h3>Fresh & Healthy Organic Snacks</h3>
                            <p>35% Off on first order</p>
                            <button className="offer-btn">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferProducts;

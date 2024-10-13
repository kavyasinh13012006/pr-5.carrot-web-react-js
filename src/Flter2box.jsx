import React from 'react';


function Flter2box() {
  return (
    <>
      <div className=" container-sm filter-box2 d-flex m-5">
        <div className="col-7">
          <div className="custom-product-cards d-flex mb-5">
            {/* Product 1 */}
            <div className="custom-card">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="custom-card-img-top" alt="Vegetables" />
              <div className="custom-card-body">
                <h5 className="custom-card-title">Vegetables</h5>
                <p className="custom-card-text">Fresh organic villa farm lemon 500gm pack</p>
                <h4 className="custom-card-price">$120.25</h4>
                <a href="#" className="custom-btn-primary">Shop Now</a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="custom-card">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg" className="custom-card-img-top" alt="Snacks" />
              <div className="custom-card-body">
                <h5 className="custom-card-title">Snacks</h5>
                <p className="custom-card-text">Best snacks with hazelnut pack 200gm</p>
                <h4 className="custom-card-price">$145.00</h4>
                <a href="#" className="custom-btn-primary">Shop Now</a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="custom-card">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" className="custom-card-img-top" alt="Fruits" />
              <div className="custom-card-body">
                <h5 className="custom-card-title">Fruits</h5>
                <p className="custom-card-text">Fresh organic apple 1kg from Shimla</p>
                <h4 className="custom-card-price">$120.25</h4>
                <a href="#" className="custom-btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-5 product-banner position-relative">
          <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/products-rightview.jpg" className="product-img" alt="Organic Vegetables" />
          <div className="product-text">
            <h2>Organic & Healthy Vegetables</h2>
            <h3>25% OFF</h3>
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flter2box;

import React from 'react';

function Help() {
    return (
        <>
            <div className="container-sm my-5">
                <div className="row text-center service-box">
                    {/* 24x7 Support */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="service-item p-4 shadow-sm">
                            <i className="fa-solid fa-headphones fa-3x mb-3 text-primary"></i>
                            <h4 className="mb-2">24x7 Support</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* Fast Service */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="service-item p-4 shadow-sm">
                            <i className="fa-solid fa-truck fa-3x mb-3 text-success"></i>
                            <h4 className="mb-2">Fast Service</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* Secure Payment */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="service-item p-4 shadow-sm">
                            <i className="fa-solid fa-money-check-dollar fa-3x mb-3 text-warning"></i>
                            <h4 className="mb-2">Secure Payment</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* Product Packing */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="service-item p-4 shadow-sm">
                            <i className="fa-solid fa-square-parking fa-3x mb-3 text-info"></i>
                            <h4 className="mb-2">Product Packing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Help;

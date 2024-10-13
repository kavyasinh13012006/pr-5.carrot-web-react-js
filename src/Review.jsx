import React from 'react'

function Review() {
    return (
        <>
            <div className="container my-5">
                <h2 className="text-center mb-4">Customer Reviews</h2>
                <div className="row justify-content-center">
                    {/* Review 1 */}
                    <div className="col-md-4  text-center">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/3.jpg" alt="CEO" className="rounded-circle mb-3" />
                        <h5>John Doe</h5>
                        <p className="text-muted">CEO, ABC Corp.</p>
                        <p>"Amazing service and great products! Highly recommend."</p>
                        <div className="review-stars">
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="col-md-4 text-center">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/1.jpg" alt="Manager" className="rounded-circle mb-3" />
                        <h5>Jane Smith</h5>
                        <p className="text-muted">Manager, XYZ Ltd.</p>
                        <p>"Very satisfied with the quality and delivery time."</p>
                        <div className="review-stars">
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star-half-alt checked"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="col-md-4 text-center">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/2.jpg" alt="Developer" className="rounded-circle mb-3" />
                        <h5>Mark Johnson</h5>
                        <p className="text-muted">Developer, Tech Inc.</p>
                        <p>"Good experience overall, but could improve on packaging."</p>
                        <div className="review-stars">
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>

                {/* Counter Section */}
                <div className="counter-section text-center my-5">
                    <h3>Total Reviews: <span className="counter">157</span></h3>
                </div>
            </div>
        </>
    )
}

export default Review
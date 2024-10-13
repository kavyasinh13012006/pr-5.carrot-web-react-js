import React from 'react';

const Banner = () => {
    return (
        <section className="banner">
            {/* Floating background items */}
            <div className="floating-item item1" style={{ backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwSNkcgMr6yM19S3ONPcnX2C0hHsqx37TCgaBP8bmboc0mK5O"})` }}></div>
            <div className="floating-item item2" style={{ backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwSNkcgMr6yM19S3ONPcnX2C0hHsqx37TCgaBP8bmboc0mK5O"})` }}></div>
            <div className="floating-item item3" style={{ backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwSNkcgMr6yM19S3ONPcnX2C0hHsqx37TCgaBP8bmboc0mK5O"})` }}></div>

            <div className="container-sm">
                <div className="banner-content">
                    <h5><span className="highlight">100%</span> Organic Fruits</h5>
                    <h1>Explore fresh & juicy fruits.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                    <button className="shop-now-btn">Shop Now</button>
                </div>
            </div>
        </section>
    );
}

export default Banner;

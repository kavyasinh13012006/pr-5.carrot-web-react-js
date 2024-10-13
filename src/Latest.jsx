import React from 'react';

function Latest() {
    return (
        <div className="container-sm mt-5">
            <h2 className="text-center mb-4" style={{ color: '#000' }}>Latest News</h2>
            <p className="text-center mb-5" style={{ color: '#000' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
            </p>
            <div className="row">
                {/* Card 1 */}
                <div className="col-4 mb-4">
                    <div className="card shadow-sm overflow-hidden">
                        
                        <div className="card-body">
                            <h5 className="card-title">By Admin | Snacks</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iure?</p>
                            <h6 className="text-success">Read More <i className="fa-solid fa-arrow-right"></i></h6>
                        </div>
                        <img 
                            src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg" 
                            className="card-img-top img-hover" 
                            alt="Snacks" 
                        />
                        <h2 className="position-absolute" style={{ bottom: '10px', right: '10px', fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>22 Sep</h2>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col-4 mb-4">
                    <div className="card shadow-sm overflow-hidden">
                        
                        <div className="card-body">
                            <h5 className="card-title">By Admin | Vegetables</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iure?</p>
                            <h6 className="text-success">Read More <i className="fa-solid fa-arrow-right"></i></h6>
                        </div>
                        <img 
                            src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg" 
                            className="card-img-top img-hover" 
                            alt="Vegetables" 
                        />
                        <h2 className="position-absolute" style={{ bottom: '10px', right: '10px', fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>11 Oct</h2>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col-4 mb-4">
                    <div className="card shadow-sm overflow-hidden">
                       
                        <div className="card-body">
                            <h5 className="card-title">By Admin | Snacks</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iure?</p>
                            <h6 className="text-success">Read More <i className="fa-solid fa-arrow-right"></i></h6>
                        </div>
                        <img 
                            src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/1.jpg" 
                            className="card-img-top img-hover" 
                            alt="Snacks" 
                        />
                        <h2 className="position-absolute" style={{ bottom: '10px', right: '10px', fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>2 Nov</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Latest;

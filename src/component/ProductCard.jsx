import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure you have this CSS file

const ProductCard = () => {
    return (
        <div className="container mt-1 mb-1">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row">
                {/* Product Card 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/cj6.jpg`}className="card-img-top" alt="Product 1" />
                        <div className="card-body">
                            <h5 className="card-title">Lustrous Chains</h5>
                            <p className="card-text">Weight: 10g</p>
                            <button className="btn btn-outline-primary me-2">Add to Favorites</button>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Product Card 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/cj8.jpg`} className="card-img-top" alt="Product 2" />
                        <div className="card-body">
                            <h5 className="card-title">Classic Chokers</h5>
                            <p className="card-text">Weight: 47g</p>
                            <button className="btn btn-outline-primary me-2">Add to Favorites</button>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Product Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p1.jpg`} className="card-img-top" alt="Product 3" />
                        <div className="card-body">
                            <h5 className="card-title">Opulent Necklaces</h5>
                            <p className="card-text">Weight: 32g</p>
                            <button className="btn btn-outline-primary me-2">Add to Favorites</button>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Product Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/cj1.jpg`} className="card-img-top" alt="Product 3" />
                        <div className="card-body">
                            <h5 className="card-title">Refined Cuffs</h5>
                            <p className="card-text">Weight: 24g</p>
                            <button className="btn btn-outline-primary me-2">Add to Favorites</button>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Product Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p8.jpg`} className="card-img-top" alt="Product 3" />
                        <div className="card-body">
                            <h5 className="card-title">Vintage Elegance</h5>
                            <p className="card-text">Weight:16g</p>
                            <button className="btn btn-outline-primary me-2">Add to Favorites</button>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Product Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/h5.jpg`} className="card-img-top" alt="Product 3" />
                        <div className="card-body">
                            <h5 className="card-title">Dazzling Bangles</h5>
                            <p className="card-text">Weight: 48</p>
                            <button className="btn btn-outline-primary me-2">Add to Favorites</button>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Product Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p9.jpg`} className="card-img-top" alt="Product 3" />
                        <div className="card-body">
                            <h5 className="card-title">Chic Huggies</h5>
                            <p className="card-text">Weight: 15g</p>
                            <button className="btn btn-outline-primary me-2">Add to Favorites</button>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Product Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p4.jpg`} className="card-img-top" alt="Product 3" />
                        <div className="card-body">
                            <h5 className="card-title">Radiant Hoops</h5>
                            <p className="card-text">Weight: 16g</p>
                            <button className="btn btn-outline-primary me-2">Add to Favorites</button>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Product Card 3 */}
                <div className="col-md-4 mb-1">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/p6.jpg`} className="card-img-top" alt="Product 3" />
                        <div className="card-body">
                            <h5 className="card-title">Classic Chokers</h5>
                            <p className="card-text">Weight:26g</p>
                            <button className="btn btn-outline-primary me-2">Add to Favorites</button>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                
                {/* Add more product cards as needed */}
            </div>
        </div>
    );
};

export default ProductCard;

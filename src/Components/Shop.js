import React from 'react'
import './App.css'

export default function Shop() {
    return (
        <div>
            <div className="shopdiv" id="shop">
                <h1 className="hvr-underline-from-left">BestSellers</h1>
                <div className="shop-plots">
                    <div className="plots-top">
                        <div className="plot">
                            <i className="far fa-heart"></i>
                            <img src="gucci.png" alt="gucci" className="hvr-pop"/>
                            <h4>Favourable sweet Jasmine</h4>
                            <h2>Gucci</h2>
                            <div className="tags">
                                
                                <p className="price"><span>1500$</span></p>
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <button className="buy hvr-sweep-to-right">Buy Now</button>
                        </div>
                        <div className="plot">
                            <i className="far fa-heart"></i>
                            <img src="versace.png" alt="versace" className="hvr-pop"/>
                            <div className="plot-written">
                            <h4>Favourable sweet Jasmine</h4>
                            <h2>Versace</h2></div>
                            <div className="tags">
                              
                                <p className="price"><span>1500$</span></p>
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                                <button className="buy hvr-sweep-to-right">Buy Now</button>
                            
                        </div>
                        <div className="plot">
                            <i className="far fa-heart"></i>
                            <img src="ghostsweet.png" alt="ghostsweet" className="hvr-pop"/>
                            <h4>Exclusively for Your parties.</h4>
                            <h2>Ghost Sweetheat</h2>
                            <div className="tags">
                                
                                <p className="price"><span>1500$</span></p>
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <button className="buy hvr-sweep-to-right">Buy Now</button>
                        </div>
                    </div>
                    <div className="plots-bottom">
                        <div className="plot">
                            <i className="far fa-heart"></i>
                            <img src="guess.png" alt="guess" className="hvr-pop"/>
                            <h4>Melodius tunner</h4>
                            <h2>Guess</h2>
                            <div className="tags">
                               
                                <p className="price"><span>1500$</span></p>
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <button className="buy hvr-sweep-to-right">Buy Now</button>
                        </div>
                        <div className="plot">
                            <i className="far fa-heart"></i>
                            <img src="lanvin.png" alt="lanvin" className="hvr-pop"/>
                            <h4>Exclusively for Your parties.</h4>
                            <h2>Lanvin</h2>
                            <div className="tags">
                               
                                <p className="price"><span>1500$</span></p>
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <button className="buy hvr-sweep-to-right">Buy Now</button>
                        </div>
                        <div className="plot">
                            <i className="far fa-heart"></i>
                            
                            <img src="rimmel.png" alt="rimmel" className="hvr-pop"/>
                            <h4>Sweet jasmine</h4>
                            <h2>Rimmel</h2>
                            <div className="tags">
                             
                                <p className="price"><span>1500$</span></p>
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <button className="buy hvr-sweep-to-right">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

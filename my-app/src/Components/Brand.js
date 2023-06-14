import React from 'react'

export default function Brand() {
    return (
        <div>
              <div className="process" id="blog">
                <div className="process-left">
                    <h2 className="hvr-underline-from-left">Be The First To Know</h2>
                    <p>To stay upto date with all news in the world of perfume subscribe to our newsletter and get 10%
                        discount on your first order.</p>
                    <div className="subscribe-box">
                        <div className="text">
                            <input type="text" placeholder="Enter your E-Mail Address" className="subscribe-text"/>
                        </div>
                        <div className="submit">
                            <input type="button" value="Subscribe" className="subscribe-text"/>
                        </div>
                    </div>
                </div>
                <img src="brand.jpg" className="img-first"/>
                <img src="perfume.jpg" className="img-second"/>
            </div>
        </div>
    )
}

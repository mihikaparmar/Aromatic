import React from 'react'

export default function Services() {
    return (
        <div>
            <div className="services">
                <div className="premium card">
                    <i className="fas fa-suitcase fa-2x"></i>
                    <h3>Premium Customer Care</h3>
                    <p>A team of pharmacists and experts in beauty and customer care informs,clarifies and advises you
                        via website,email.</p>
                </div>
                <div className="starreview card">
                    <i className="far fa-star fa-2x"></i>
                    <h3>4.8/5 Stars Customer Reviews</h3>
                    <p>Find out what more than 5000 real customers have to say about care to beauty in here.</p>
                </div>
                <div className="genuine card">
                    <i className="fas fa-shopping-bag fa-2x"></i>
                    <h3>100% Genuine Products In Stock</h3>
                    <p>We only sell original products purchased directly from the manufacturer,stocked on our shelves
                        and ready to be shipped.</p>
                </div>
            </div>
            <div className="column">
                <h3 className="clavin-h3">Calvin Klein</h3>
                <h3 className="guess-h3">GUESS</h3>
                <h3 className="naurica-h3">NAURICA</h3>
                <h3 className="lanvin-h3">Lanvin</h3>
                <h3 className="rimmel-h3">Rimmel</h3>
            </div>
        </div>
    )
}

import React from 'react';
import './productListingAll.styles.css';

import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { tshirtData } from '../../../util/tshirtData';

const ProductListingAll = () => {
    return (
        <section className="product-listing-all-container">
            <div className="container">

                <div className="grid-container">
                    {tshirtData.map((tshirt) => {
                        return (
                            <div key={tshirt.id} className="grid-item">
                                <ProductListingCard tshirtData={tshirt} />
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default ProductListingAll;
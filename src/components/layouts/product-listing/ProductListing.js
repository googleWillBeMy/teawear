import React from 'react';
import './productListing.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { tshirtData } from '../../../util/tshirtData';

const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <div className="container">
                <h2>Here are some <span className="text-primary">tshirt</span> that you might like</h2>

                <div className="listing-container">
                    {tshirtData.slice(0,4).map((tshirt) => (
                         <ProductListingCard key={tshirt.id} tshirtData={tshirt} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProductListing;

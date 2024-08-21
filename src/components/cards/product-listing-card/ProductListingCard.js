import React from "react";
import './productListingCard.styles.css';
import { Link } from 'react-router-dom';


const ProductListingCard = ({ tshirtData }) => {
    return (
        <div className="product-listing-card">
            <div className="product-listing-img-container">
                <img src={tshirtData.tshirt_url} alt="product-listing" className="product-listing-image" />
            </div>
            <div className="product-listing-details-container">
                <h3>{tshirtData.tshirt_name}</h3>
                <p className="tshirt-type">{tshirtData.tshirt_type}</p>
                <p className='pricing'>&#8377;{tshirtData.price}</p>
            </div>
            <div className="card-btn-container">
                <Link to={`/tshirt-details/${tshirtData.id}`} className="product-listing-button">Add To Cart</Link>
            </div>
        </div>
    )
}

export default ProductListingCard;
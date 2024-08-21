import React from 'react';
import { Link } from 'react-router-dom';
import './searchresultcard.styles.css';

const SearchResultCard = ({ tshirtData }) => {
    return (
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={tshirtData.tshirt_url} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <h2>{tshirtData.tshirt_name}</h2>
                <p>{tshirtData.tshirt_type}</p>
                
                <Link to={`/tshirt-details/${tshirtData.id}`} className="button-primary">Product Details</Link>
            </div>
        </section>
    )
}

export default SearchResultCard;
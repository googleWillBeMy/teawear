import React from "react";
import './tshirtPage.styles.css';
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from '../../components/forms/searchInputForm/SearchInputForm';
import ProductListingAll from "../../components/layouts/product-listing-all/ProductListingAll";
import Footer from '../../components/layouts/footer/Footer';

const TshirtPage = () => {
    return (
        <section>
            <Navbar darkTheme={ true } />

            <div className="search-container">
                <h2>Find the <span className="text-primary">Tshirt</span> that you want</h2>
                <SearchInputForm darkTheme={ false } />
            </div>

            <ProductListingAll />
            <Footer />
        </section>
    )
}

export default TshirtPage;
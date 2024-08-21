import React, { useState, useEffect, useContext } from 'react';
import './detailsSection.styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { tshirtData as allTshirtData } from '../../../util/tshirtData'; // Renamed to avoid collision
import { UserContext, CartContext } from '../../../App';

const DetailsSection = () => {
    const { id } = useParams();
    const [tshirtData, setTshirtData] = useState({});

    const user = useContext(UserContext);
    const { cartItems, setCartItems } = useContext(CartContext);

    const navigate = useNavigate();

    useEffect(() => {
        let newData = allTshirtData.filter((tshirt) => tshirt.id === parseInt(id));
        setTshirtData(newData[0]);
    }, [id]);

    const handleAddToCart = () => {
        if (user) {
            // Add to cart
            setCartItems([...cartItems, tshirtData]);
            alert(`The t-shirt ${tshirtData.tshirt_name} has been added to the cart.`);

            // Navigate to cart page
            navigate('/cart');  // Redirect to the cart page
        } else {
            navigate('/login');
            alert("Please log in or sign up first.");
        }
    };

    return (
        <section className="detail-section-container">
            <div className="container">
                <div className="flex-container">
                    <div className="tshirt-img-container">
                        <img src={tshirtData.tshirt_url} alt={tshirtData.tshirt_name} />
                    </div>

                    <div className="tshirt-detail-container">
                        <h2>{tshirtData.tshirt_name}</h2>
                        <p className="text-primary">{tshirtData.tshirt_type}</p>
                        <p className="tshirt-description">{tshirtData.tshirt_description}</p>
                        <p><b>Currency</b>: {tshirtData.currency}</p>
                        <p><b>Tshirt Quantity</b>: {tshirtData.quantity}</p>

                        <h3>&#8377;{tshirtData.price}</h3>

                        <button onClick={handleAddToCart} className="button-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailsSection;


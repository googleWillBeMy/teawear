import React, { useContext } from 'react';
import './cart-item-card.styles.css';
import { CartContext } from '../../../App';

const CartItemCard = ({ tshirtData }) => {

    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemove = () => {
        console.log(tshirtData.id);
        setCartItems(cartItems.filter((item) => item.id !== tshirtData.id));
    }

    return (
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={tshirtData.tshirt_url} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <h2>{tshirtData.tshirt_name}</h2>
                <p>{tshirtData.tshirt_type}</p>
                <h3 className="cart-item-price">&#8377;{tshirtData.price}</h3>

                <button onClick={handleRemove} className='delete_btn'>Remove from Cart</button>
            </div>
        </section>
    )
}

export default CartItemCard;
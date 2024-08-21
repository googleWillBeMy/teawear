import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from 'react-router-dom';
import app from "./firebase/Firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import HomePage from "./pages/homepage/HomePage";
import TshirtPage from "./pages/tshirtpage/TshirtPage";
import CartPage from "./pages/cartpage/CartPage";
import TshirtDetails from "./pages/tshirtdetailspage/TshirtDetails";
import Login from "./pages/loginpage/Login";
import SignUp from "./pages/signup-page/Signup";
import ScrollToTop from "./components/util/ScrollToTop";
import SearchPage from "./pages/searchpage/SearchPage";

export const UserContext = createContext(null);
export const CartContext = createContext({
    cartItems: [],
    totalAmount: 0,
    setCartItems: () => { }
});

const App = () => {
    const auth = getAuth(app);

    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticatedUser(user);
            } else {
                setAuthenticatedUser(null);
            }
        });

        // Clean up the subscription on component unmount
        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        let total = cartItems.reduce((acc, item) => acc + parseInt(item.price, 10), 0);
        setTotalAmount(total);
    }, [cartItems]);

    return (
        <ScrollToTop>
            <UserContext.Provider value={authenticatedUser}>
                <CartContext.Provider value={{ cartItems, totalAmount, setCartItems }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/tshirt" element={<TshirtPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/tshirtdetails/:id" element={<TshirtDetails />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </CartContext.Provider>
            </UserContext.Provider>
        </ScrollToTop>
    );
}

export default App;

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [cart, setCart] = useState([]);
    const tshirts = useLoaderData();

    const handelAddToCart = tshirt =>{
        // console.log(tshirt);
        const exist = cart.find(ts => ts._id === tshirt._id);
        if(exist){
            alert('T-shirt already added')
        }
        else{
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }
    
    const handelRemoveItem = tshirt =>{
        // console.log(tshirt)
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }


    return (
        <div className='shop-container'>
           <div className='product-container'>
                {
                    tshirts.map(tshirt => <TShirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handelAddToCart={handelAddToCart}
                    ></TShirt>)
                }
           </div>
            <div className='cart-container'>
                <Cart 
                    handelRemoveItem={handelRemoveItem}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
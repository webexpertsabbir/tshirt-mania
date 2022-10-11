import React from 'react';
import './Cart.css'

const Cart = ({cart, handelRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please select one item</p>
    } 
    else{
        message = <p>Thanks for bying</p>
    }
    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : `blue`}>Product Cart</h2>
            <h3>Order Quantity: {cart.length}</h3>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handelRemoveItem(tshirt)}>X</button>
                </p>)
            }
            <p>{message}</p>
            {
                cart.length === 3 ? <p>Tin jonke gift diba </p> : <p>kino kino</p>
            }
            {
                cart.length === 2 && <h2>dubble item</h2>
            }
            {
                cart.length === 4 || <h2>Carta item na</h2>
            }
        </div>
    );
};

export default Cart;
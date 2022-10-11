import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt, handelAddToCart}) => {
    const {name, price, picture} = tshirt;
    return (
        <div className="singel-product">
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() =>handelAddToCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;
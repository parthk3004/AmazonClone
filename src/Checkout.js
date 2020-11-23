import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";
function Checkout() {
    // to take selected product on checkout page
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
         <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        
        {basket?.length === 0 ? (
            <div> <h2>
                Your Shopping Basket is empty
            </h2>
            <p> 
                You have no items in your basket. To buy one or add Click "Add to basket" next to the item.
             </p>
            </div>
        ) : (
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title"> Your Shopping Basket</h2>
                {/* list out all thee checkout products */}

                {basket.map(item => (

                    <CheckoutProducts
                    item ={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}

                    />
                ))}
                </div>
                )
        }
        </div>
                 {basket.length >0 && ( 
                    <div className="checkout__right">
                    <Subtotal />
                 </div>
                )}
                </div>
    );
}

export default Checkout;

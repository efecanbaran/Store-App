import React, { useState } from 'react'
import BasketList from './BasketList';

const Basket = ({ newBasketList }) => {

    const [show, setShow] = useState(false);

    const handleShowBasket = () => {
        setShow(!show);
    }

    const hiddenBasket = () => {
        setShow(false);
    }
    return (
        <>
            {
                show ?
                    <BasketList newBasketList={newBasketList} hiddenBasket={hiddenBasket} />
                    : null
            }
            <div className="basket" onClick={handleShowBasket}>
                <div>
                    <button onClick={handleShowBasket}><i className="fas fa-shopping-basket"></i></button>
                </div>
            </div>
            <div className="basket-container">

                <div className="basket-products">
                    <p>Sepet: Boş</p>
                </div>
                <div className="basket-price">
                    Toplam: 0$
                </div>
            </div>
        </>

    )
}

export default Basket;

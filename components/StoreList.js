import React, { useState } from 'react'


import Details from './Details';

const StoreList = ({ categoryList, addBasketList }) => {
    const [show, setShow] = useState(false);
    const [productDetails, setProductDetails] = useState();

    const showModal = (product) => {
        setShow(true);
        setProductDetails({
            title: product.title,
            price: product.price,
            image: product.image,
            category: product.category,
            description: product.description
        })
    }

    const closeModal = () => {
        setShow(false)
    }

    return (
        <>
            {
                categoryList.map((product) => (
                    <li className="card-item" key={product.id}>

                        <div className="img">
                            <img onClick={() => showModal(product)} src={product.image} alt="product img"></img>
                        </div>
                        <p>{product.title}</p>
                        <h3>{product.price}$</h3>
                        <button onClick={() => showModal(product)} className="btn1">Detaylar</button>
                        <button onClick={() => addBasketList(product)} className="btn2">Sepete Ekle</button>

                    </li>
                ))
            }
            {
                show ?
                    <Details closeModal={closeModal} productDetails={productDetails} />
                    : null
            }

        </>
    )
}

export default StoreList;
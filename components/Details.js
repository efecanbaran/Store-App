import React from 'react'

const Details = ({ closeModal, productDetails }) => {
    return (
        <div className="details-container">
            <ul>
                <li>
                    <div className="details-img">
                        <img src={productDetails.image} alt="product img"></img>
                    </div>
                </li>
                <li className="details-right">
                    <p className="title-p">{productDetails.title}</p>
                    <div className="brrr"></div>
                    <p className="description">{productDetails.description}</p>
                    <h1>{productDetails.price}$</h1>
                </li>
            </ul>
            <span className="exit" onClick={closeModal}>
                <i className="fas fa-times"></i>
            </span>
            <button className="close-btn" onClick={closeModal}>Kapat</button>
            <button className="add-basket-btn">Sepete Ekle</button>
        </div>
    )
}

export default Details;

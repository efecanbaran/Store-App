import React, { useState } from 'react'

const BasketList = ({ hiddenBasket, newBasketList }) => {
    const [addNewBasketList] = useState(newBasketList);

    return (
        <div className="basket-list">
            <span className="exit">
                <i onClick={hiddenBasket} className="fas fa-times"></i>
            </span>
            <table>
                <thead>
                    <tr>
                        <th>Ürün başlık</th>
                        <th>Kategori</th>
                        <th>Fiyat</th>
                    </tr>
                </thead>
                {
                    addNewBasketList.map((data) =>
                    (
                        <tbody key={data.id}>
                            <tr>
                                <td>{data.title}</td>
                                <td>{data.category}</td>
                                <td>{data.price}</td>
                            </tr>
                        </tbody>
                    )
                    )
                }
            </table>

        </div>
    )
}

export default BasketList;

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    const [products, setProduct] = useState([]);
    const [newBasketList, setNewBasketList] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const datas = await axios.get('https://fakestoreapi.com/products')
                .catch(err => console.log(err))
            setProduct(datas.data)
        }
        getProduct();

    }, [newBasketList])


    const addBasketList = (product) => {
        setNewBasketList([...newBasketList, {
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            adet: 1
        }])
    }


    return (
        <div>
            <StoreContext.Provider value={{ products, addBasketList, newBasketList }}>
                {props.children}
            </StoreContext.Provider>
        </div>
    )
}

export default StoreContextProvider;
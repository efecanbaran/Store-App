import React, { useState, useEffect } from 'react'
import Basket from './Basket';
import Header from './Header';
import StoreList from './StoreList';
import FilterList from './FilterList';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContextProvider';

const Store = () => {
    const storeContext = useContext(StoreContext);
    const products = storeContext.products
    const addBasketList = storeContext.addBasketList;
    const newBasketList = storeContext.newBasketList;


    const [category, setCategory] = useState();
    const [categoryList, setcategoryList] = useState([]);

    useEffect(() => {
        const newList = (data) => {
            switch (data) {
                case "men's clothing":
                    setcategoryList(products.filter((item) => item.category === data))
                    break;
                case "jewelery":
                    setcategoryList(products.filter((item) => item.category === data))
                    break;
                case "electronics":

                    setcategoryList(products.filter((item) => item.category === data))
                    break;
                case "women's clothing":
                    setcategoryList(products.filter((item) => item.category === data))
                    break;
                default:
                    setcategoryList(products)
                    break;
            }
        }



        newList(category);
    }, [category, products])


    const newPriceList = (mn, mx) => {
        
        if (mn !== 'undefined' && mx !== 'undefined') {
            setcategoryList(products.filter((item)=> item.price > mn && item.price < mx))
        }
        else{
            setcategoryList(products)
        }
        
    }
    return (
        <div>
            <Header />
            <div className="body-container clearfix">
                <div className="left-side">
                    <FilterList newPriceList={newPriceList} setCategory={setCategory} />
                </div>
                <ul className="card-container">
                    <StoreList addBasketList={addBasketList} categoryList={categoryList} />
                </ul>


            </div>

            <Basket newBasketList={newBasketList}/>
        </div>
    )
}

export default Store;

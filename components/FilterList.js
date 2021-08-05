import React, { useState } from 'react'

const FilterList = ({ setCategory, newPriceList }) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100000);

    const submitHandler = (e) => {
        e.preventDefault();
        newPriceList(min, max)
    }

    return (
        <>
            <h3>Filtrele</h3>
            <ul>
                <li>
                    <p>Kategoriye göre</p>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option>all</option>
                        <option>men's clothing</option>
                        <option>jewelery</option>
                        <option>electronics</option>
                        <option>women's clothing</option>
                    </select>
                </li>
                <div className="brr"></div>
                <li>
                    <p>Fiyata göre</p>
                    <form onSubmit={submitHandler}>
                        <input type="text" defaultValue={min} onChange={(e) => setMin(e.target.value)} placeholder="Min"></input>
                        <input type="text" defaultValue={max} onChange={(e) => setMax(e.target.value)} placeholder="Max"></input>
                        <button onClick={submitHandler} type="submit">Filtrele</button>
                    </form>

                </li>
            </ul>
        </>
    )
}

export default FilterList;

import React, { useEffect, useState } from 'react';
import styles from "./Landing.module.css"
// API 
import { getCoin } from '../services/api';

//components

import Coin from './Coin';


const Landing = () => {
    //states
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        const fetchApi = async () => {
            setCoins(await getCoin())
        }
        fetchApi()
    }, [])

    const changeHandler = (event) => {
        setSearch(event.target.value)
    }
    const filterCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))


    return (

        <>
            <input className={styles.input} type="text" placeholder='Search' value={search} onChange={changeHandler} />
            
                    <div className={styles.coinContainer}>
                        {
                            filterCoins.map(item =>
                                <Coin
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    symbol={item.symbol}
                                    price={item.current_price}
                                    priceChange={item.market_cap_change_percentage_24h}
                                    marketCap={item.market_cap}
                                />)
                        }
                    </div>
                   
            
        </>

    );
};

export default Landing;
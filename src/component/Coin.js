import React from 'react';
import styles from "./Coin.module.css"
const Coin = (props) => {
    const { name, image, symbol, price, priceChange, marketCap } = props

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="name" />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {price.toLocaleString() }  </span>
            <span className={ priceChange < 0 ? styles.redPriceChange : styles.greenPriceChange }>{priceChange} %</span>
            <span className={styles.marketCapp}>{marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
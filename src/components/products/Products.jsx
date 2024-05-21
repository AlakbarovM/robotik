import React from 'react'
import Button from '../btns/Button'
import styles from './Products.module.scss'
const Products = ({item, addToBasket, addToWishlist}) => {
  return (
    <div className={styles.proBox}>
        <div className={styles.proBoxImg}>
            <img src={item.thumbnail} alt="" />
        </div>
        <div className={styles.proBoxText}>
            <h1>{item.title}</h1>
            <p>{item.price}</p>
        </div>
        <div className={styles.proBoxBtn}>
            <Button text='addToBasket' onClick={addToBasket}/>
            <Button text='addToWishlist' onClick={addToWishlist}/>
        </div>
    </div>
  )
}

export default Products
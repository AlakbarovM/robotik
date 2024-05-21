import React from 'react'
import styles from './Products.module.scss'
import Button from '../btns/Button'
const ProductsCardWishlist = ({item, sil}) => {
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
        <Button text='sil' onClick={sil}/>
       
    </div>
</div>
  )
}

export default ProductsCardWishlist
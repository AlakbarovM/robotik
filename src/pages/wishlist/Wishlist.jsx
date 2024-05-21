import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import SomeFeatures from '../../components/someFeatures/SomeFeatures'
import ProductsCardBasket from '../../components/products/ProductsCardBasket'
import axios from 'axios'
import styles from '../home/Home.module.scss'
import ProductsCardWishlist from '../../components/products/ProductsCardWishlist'
import Footor from '../../components/footor/Footor'
const Wishlist = () => {
    const [data, setData] = useState([]);
    const getData = () => {
      axios.get("https://664c91bb35bbda109880eeec.mockapi.io/basket")
      .then((res) => {
        setData(res.data);
      });
    };
    useEffect(() => {
      getData();
    }, []);
   
  const remove = (id) => {
      axios.delete(`https://664c91bb35bbda109880eeec.mockapi.io/baske/${id}`)
      setTimeout(() => {
          getData()
      }, 500);
    }
  return (
    <div>
      <Header />
      <SomeFeatures />
      <div className={styles.proBoxMain}>
        <div className={styles.container}>
          {data && data.map((item) => <ProductsCardWishlist item={item} sil={() => remove(item.id)} />)}
        </div>
      </div>
      <Footor />
    </div>
  )
}

export default Wishlist
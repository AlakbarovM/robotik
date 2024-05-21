import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header';
import Footor from '../../components/footor/Footor';
import styles from '../home/Home.module.scss'
import ProductsCardBasket from '../../components/products/ProductsCardBasket';
const Basket = () => {
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
    axios.delete(`https://664c91bb35bbda109880eeec.mockapi.io/basket/${id}`)
    setTimeout(() => {
        getData()
    }, 2000);
}

  return (
    <div>
      <Header />
      <div className={styles.proBoxMain}>
        <div className={styles.container}>
          {data && data.map((item) => <ProductsCardBasket item={item} sil={() => remove(item.id)} />)}
        </div>
      </div>
      <Footor />
    </div>
  )
}

export default Basket
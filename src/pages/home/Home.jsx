import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SomeFeatures from "../../components/someFeatures/SomeFeatures";
import Footor from "../../components/footor/Footor";
import axios from "axios";
import Products from "../../components/products/Products";
import styles from "./Home.module.scss";
const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const addToBasket = (product) => {
    axios.post("https://664c91bb35bbda109880eeec.mockapi.io/basket",product)
  }
  const addToWishlist = (product) => {
    axios.post("https://664c91bb35bbda109880eeec.mockapi.io/basket",product)
  }

  return (
    <div>
      <Header />
      <SomeFeatures />
      <div className={styles.proBoxMain}>
        <div className={styles.container}>
          {data && data.map((item) => <Products item={item} addToBasket={() => addToBasket(item)} addToWishlist={() => addToWishlist(item)}/>)}
        </div>
      </div>
      <Footor />
    </div>
  );
};

export default Home;

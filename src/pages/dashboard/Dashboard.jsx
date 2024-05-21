import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "./DashBoard.module.scss";
import axios from "axios";
import DashBoardCard from "./DashBoardCard";
import Footor from "../../components/footor/Footor";
import { useFormik } from "formik";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const [filterdata, setFilterdata] = useState([])
  const ser = (e) => {
    setSearch(e.target.value)
    const md = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    setFilterdata(md)
  }
  const getData = () => {
    axios
      .get("https://664c91bb35bbda109880eeec.mockapi.io/basket")
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const remove = (id) => {
    axios.delete(`https://664c91bb35bbda109880eeec.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 500);
  };


  const formik = useFormik({
    initialValues: {
      thumbnail: '',
      title: '',
      price: '',
    },
    onSubmit: values => {
        axios.post('https://664c91bb35bbda109880eeec.mockapi.io/basket',values)
        setTimeout(() => {
            getData()
        }, 500);
    },
  });
  return (
    <div>
      <Header />

      <div className={styles.proBoxMainD}>
        <div>
          <input value={search} onChange={(e) => setSearch(e.target.value) } type="text" />
          <button onClick={ser} >TAP</button>
          {filterdata && filterdata.map(item => <p>{item.title}</p> )}
        </div>
        <div>
        <form onSubmit={formik.handleSubmit}>
       <input
         id="thumbnail"
         onChange={formik.handleChange}
         value={formik.values.thumbnail}
       />
       <input
         id="title"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <input
         id="price"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <button type="submit">Submit</button>
     </form>
        </div>
        <div className={styles.container}>
          {data &&
            data.map((item) => (
              <DashBoardCard item={item} sil={() => remove(item.id)} />
            ))}
        </div>
      </div>
      <Footor />
    </div>
  );
};

export default Dashboard;

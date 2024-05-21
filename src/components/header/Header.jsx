import React from "react";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  const goGome = () => {
    navigate('/')
  }
  const goBome = () => {
    navigate('/basket')
  }
  const goDome = () => {
    navigate('/wishlist')
  }
  const goTome = () => {
    navigate('/dashboard')
  }
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLogo}>
            <img
              src="https://preview.colorlib.com/theme/robotics/img/logo.png"
              alt=""
            />
          </div>
          <nav className={styles.headerTopNav}>
            <ul>
              <li>
                <a onClick={goGome} href>Home</a>
              </li>
              <li>
                <a onClick={goBome} href >Basket</a>
              </li>
              <li>
                <a onClick={goDome}  href>Wishlist</a>
              </li>
              <li>
                <a onClick={goTome} href>DashBoard</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <div className={styles.hamburger}>
            <GiHamburgerMenu />
            </div>
          </nav>
        </div>
        <div className={styles.headerBottom}>
          <div className={styles.headerBottomText}>
            <h1>Improved Production level with Robotics</h1>
            <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
            <button>VIEW DETAILS</button>
          </div>
          <div className={styles.headerBottomLogo}>
            <img
              src="https://preview.colorlib.com/theme/robotics/img/banner-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

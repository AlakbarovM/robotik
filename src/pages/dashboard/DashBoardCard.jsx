import React from 'react'
import Button from '../../components/btns/Button'
import styles from './DashBoard.module.scss'
const DashBoardCard = ({item, sil}) => {
  return (
    <div className={styles.proBoxD}>
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

export default DashBoardCard
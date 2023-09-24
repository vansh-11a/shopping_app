import React from 'react'
import styles from './styles.module.css';
import truck from '../../Assets/Truck.png'
import facebook from '../../Assets/facebook.png'
import insta from '../../Assets/insta.jpg'
import twitter from '../../Assets/twitter.png'
import linkdin from '../../Assets/linkdin.png'

function TopBar() {
  return (
    <div className={styles.container}>
        <div className={styles.left_top}>
            <img src={truck} alt='truck'/>
            <p className={styles.free_delivery}>Free delivery</p>
            <p className={styles.free_delivery}>|</p>
            <p className={styles.free_delivery}>   Return Policy</p>
        </div>
        <div  className={styles.social_media}>
            <p className={styles.free_delivery}>Login </p>
            <p className={styles.free_delivery}>Follow US</p>
            <img src={facebook} alt='facebook'/>
            <img src={linkdin} alt='linkdin'/>
            <img src={twitter} alt='twitter'/>
            <img src={insta} alt='instagram'/>
        </div>
    </div>
  )
}

export default TopBar
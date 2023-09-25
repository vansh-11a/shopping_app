import React from 'react'
import styles from './styles.module.css';
import Line from './Line';
import NavBar from './Navbar';
import banda from '../../Assets/banda.png'
import bigStar from '../../Assets/bigStar.png'
import mediumStar from '../../Assets/Star_4.png'
import SeeMore from './SeeMore';
import num  from '../../Assets/2022.png'
import look from '../../Assets/look.png'
import fresh from '../../Assets/fresh.png'
import smallStar from '../../Assets/smallStar.png'


function HeaderSection({data , setCategories ,categories }) {
  const X_VALUE =0;
  const Y_VALUE =0;
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
          <h2 style={{fontSize:42}}>ShopKart</h2>
          <div className={styles.wishlist}>
            <div>WISHLIST ({X_VALUE})</div>
            <div>BAG ({Y_VALUE})</div>
          </div>
        </div>
        <Line/>
        <NavBar data={data} setCategories={setCategories} categories={categories}/>
        <div style={{backgroundColor:'#F07E15' , height:345 ,width:'70%' , position:'absolute' ,top:300, right:0}}>
          <img src={bigStar} alt='big star' style={{ position:'relative' ,top:-420 , left:520 , zIndex:90 ,height: 370 , width:370 }}/>
          <img src={banda} alt='banda' style={{ position:'relative' ,top:-161 , left:70 , zIndex:100 , height:631}}/>
        </div>
        <div>
        <img src={fresh} alt='fresh' style={{  zIndex:300 , position:'relative' , top:0}}/>
        <img src={num} alt='2022' style={{position:'relative' , fontWeight:'900' , zIndex:210 , top:120 , left:-310}}/>
        <img src={look} alt='look' style={{position:'relative' , zIndex:300 , top:130 , left:80}}/>
        </div>
        <Line left='-80' right='340' position='relative' top='180px' />
        <img src={mediumStar} alt='medium star' className={styles.medium_star}/>
        <SeeMore/>
        <img src={smallStar} alt='small star' className={styles.small_star}/>
        <span className={styles.orange_jacket}>OREGON JACKET</span>
        <span className={styles.price}>$124</span>
      </div>
    </div>
  )
}

export default HeaderSection
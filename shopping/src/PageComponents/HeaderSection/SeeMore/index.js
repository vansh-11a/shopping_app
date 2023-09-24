import React from 'react'
import styles from './styles.module.css'
import vector from '../../../Assets/Vector.png'

function SeeMore() {
  return (
    <div className={styles.see_more} style={{display:'flex' , width:80 , top:80 , gap :9 , left:30}}>
        <p>See more</p>
        <img style={{height:10 , marginTop:5}} src={vector} alt='arrow'/>
    </div>
  )
}

export default SeeMore
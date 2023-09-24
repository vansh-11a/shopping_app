import React from 'react'
import styles  from './styles.module.css'
function LoadingCat() {
  return (
    <>
    {[...Array(4)].map((item)=>
      <div className={styles.card}>
        <div className={styles.card__content}>
          <p className={styles.para}></p>
        </div>
      </div>
    )}
    </>
  )
}

export default LoadingCat
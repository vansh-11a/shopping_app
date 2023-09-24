import React from 'react'
import styles from './styles.module.css'

function LoadingBox() {
  return (
    <>
    {[...Array(4)].map((item)=>
      <div className={styles.card}>
        <div className={styles.card__image}></div>
        <div className={styles.card__content}>
          <h2 className={styles.header}/>
          <p className={styles.para}/>
        </div>
      </div>
    )}
    </>
  )
}

export default LoadingBox
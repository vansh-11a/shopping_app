import styles from './styles.module.css'
import arrowImag from '../../../Assets/arrow.png'
import { useState } from 'react';

function ImageBox ({item={} , setCurrentProd , setShow , show}){

    const [hover, setHover] = useState(false);
    console.log(hover , show,'hover')
    const {title='', description='',image='',price=''}=item||{};
    function handleClick () {
        if(!show){
            setCurrentProd(item);
            setShow(true);
        }
    }

    const handleHover = () => {
        if (!show && hover) {
          return styles.hovered;
        }
        return '';
      };

    return (

        <div 
        className={`${styles.box} ${handleHover()}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{cursor : show? 'default' : 'pointer'}}
         onClick={handleClick}>
            <div className={`${styles.container} ${show && styles.modal_container}`}>
                 <img src={image} alt='' className={`${styles.image_container} ${show && styles.modal_img}`}/>
                 {!show && <img src={arrowImag} alt='' className={styles.arrow}/>}
            </div>
            <div className={styles.content}>
               <div className={styles.heading}>
                  {title}
               </div>
               <div className={styles.details}>
                  {description}
               </div>
               <div className={styles.heading}>
                  ${price}
               </div>
            </div>
        </div>
    )
}
export default ImageBox
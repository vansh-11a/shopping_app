import styles from './styles.module.css';
import get from '../../../Assets/Get.png'
import { useRef, useState } from 'react';

function NewsLetter () {
    const [submit , setSubmit] = useState(false);
    const [touched , setTouched] = useState(false);
    const input1Ref = useRef();
    const input2Ref = useRef();
    const input3Ref = useRef();
    function handleClick () {
        setTouched(true);
        if(input1Ref.current.value && input2Ref.current.value && input3Ref.current.value){
            setSubmit(true);
            input1Ref.current.value='';
            input2Ref.current.value='';
            input3Ref.current.value='';
        }
    }



    return (
        <div className={styles.newsletter_container}>
            <div className={styles.upper_container}>
                <div className={styles.upper_left_container}>
                    <div className={styles.newsletter_heading}>Newsletter</div>
                    <div className={styles.newsletter_content}>Get news about articles and updates in your inbox.</div>
                </div>
                <div className={styles.upper_right_container}>
                    {!submit && touched && <label style={{color:'red' , fontSize:16}}>Enter valid input</label>}
                    <input ref={input1Ref} className={styles.input_container} type="text" placeholder="NAME"/>
                    <input ref={input2Ref} className={styles.input_container} type="text" placeholder="EMAIL"/>
                    <input ref={input3Ref} className={styles.input_container} type="text" placeholder="MESSAGE"/>
                </div>
            </div>
            <div className={styles.lower_container}>
                <img style={{zIndex:100}} src={get} alt='get in touch'/>
                <button  onClick={handleClick} className={`${styles.submit_button} ${submit && styles.sumited}`}>{submit ? 'SENT' : 'SEND'}</button>
                <circle></circle>
            </div>
        </div>
    )
}

export default NewsLetter;
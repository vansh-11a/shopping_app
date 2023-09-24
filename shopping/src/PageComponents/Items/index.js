import styles from './styles.module.css'
import starImage from '../../Assets/star.png';
import ImageBox from './ImageBox';
import { useState, useEffect } from 'react';
import arrowLeft from '../../Assets/arrow_left.png'
import arrowRight from '../../Assets/arrow_right.png'
import useFakeStoreAPI from '../../Hooks/useFakeStoreAPI';
import LoadingBox from '../LoadingBox';
import LoadingCat from '../LoadingCat';
import Modal from '../Modal';


function Items ({categories , setCategories}){
    const {data:list_data , loading : prodLoading}=useFakeStoreAPI('/products');
    const {data:cat , loading : catLoading} = useFakeStoreAPI('/products/categories');

    const [orignalData , setOrignalData] = useState(null);
    const [currentProd , setCurrentProd] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [showData , setShowData] = useState(null);
    const [show , setShow] = useState(false);
    const [showRight , setShowRight] = useState(true);
    const [showLeft , setShowLeft] = useState(false);

    function handleRight () {
        setShowLeft(true);
        const newArray = [...showData];
        const lastItemInCurrentData = showData[showData.length - 1];
        const indexOfLastItemInOriginalData = filteredData.findIndex(
          (item) => item.id === lastItemInCurrentData.id
        );
        if (indexOfLastItemInOriginalData !== -1) {
            const nextItem = filteredData[indexOfLastItemInOriginalData + 1];
            if (nextItem) {
            newArray.push(nextItem);
                setShowRight(true);
            }
            else setShowRight(false)
        }
        if (newArray.length > 4) {
            newArray.shift();
        }
          setShowData(newArray);
    }
    
    function handleLeft () {
        const newArray = [...showData];
        const lastItemInCurrentData = showData[0];
        const indexOFirstItemInOriginalData = filteredData.findIndex(
          (item) => item.id === lastItemInCurrentData.id
        );
        if ( indexOFirstItemInOriginalData === 0) {
            setShowLeft(false);
            setShowRight(true);
        }
        if (indexOFirstItemInOriginalData>0) {
            setShowLeft(true);
            const nextItem = filteredData[indexOFirstItemInOriginalData -1];
            if (nextItem) {
                newArray.unshift(nextItem);
            }
        }
         
        if (newArray.length > 4) {
            newArray.pop();
        }
          setShowData(newArray);
    }

    function handleCat (item) {
        setCategories(item)
    }

    useEffect(()=>{
        setOrignalData(list_data)
        setShowData((filteredData || []).slice(0, 4))
    },[filteredData, list_data])

    useEffect(()=>{
        if (categories ) {
            const filteredData = orignalData?.filter(item => item.category === categories);
            setFilteredData(filteredData);
        } else {
            setFilteredData(orignalData);
        }
    },[categories, orignalData])

    return (
        <>
        {show && <Modal onClose={()=>setShow(false)} > 
            <ImageBox item={currentProd} show={show}/>
        </Modal>}
        <div className={styles.box}>
            <div className={styles.heading}>
                <div>
                    <div className={styles.heading_text}>
                        New products
                    </div>
                    <div className={styles.line_div}>
                        <img src={starImage} alt='' width={20} height={20}/>
                        <div className={styles.line}/>
                    </div>
                </div>
                <div className={styles.arrow_box}>
                    <div className={styles.slide} onClick={handleLeft}>
                        <img src={arrowLeft} alt='' width={80} height={20} style={{opacity: showLeft ? '1':'0.2',
                        cursor: showLeft ? 'pointer' : 'not-allowed'
                    }}/>
                    </div>
                    <div className={`${styles.slide} ${styles.right}`} onClick={handleRight}>
                        <img src={arrowRight} alt='' width={80} height={20} style={{opacity: showRight ? '1':'0.2',
                        cursor: showRight ? 'pointer' : 'not-allowed'
                    }}
                        />
                    </div>
                </div>
               
            </div>
            <div className={styles.content}>
                  <div className={styles.side_bar}>
                    {catLoading &&  <LoadingCat/>}
                    {!catLoading && cat?.map((item,ind)=>{
                        return (
                            <div key={ind} 
                                className={`${styles.items} `}
                                style={{fontSize : categories === item ? '26px' : '',
                                        fontWeight : categories === item ? '600' : ''
                                }}
                                onClick={()=>handleCat(item)} >
                            {item}
                        </div>
                        )
                    }
                        
                    )}
                  </div>
                  <div className={styles.image_section}> 
                  {prodLoading && <LoadingBox/>}
                     {!prodLoading&& (showData?.map((item,ind)=>{
                           return (
                            <ImageBox item={item} setCurrentProd={setCurrentProd} setShow={setShow}/>
                          );
                     }
                       ))
                     }
                  </div>
            </div>
        </div>
        </>
    )
}
export default Items
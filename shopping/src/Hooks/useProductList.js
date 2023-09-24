import { useEffect, useState, useCallback} from "react";

function useProductList(){
    const [data , setData] = useState(null);
    const getProduct=useCallback(async()=>{
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log(error,'error');
        }
    },[])

    useEffect(()=>{
        getProduct();
    },[getProduct])

    return { data };
}
export default useProductList
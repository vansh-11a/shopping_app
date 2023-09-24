import { useState, useEffect } from 'react';

function useFakeStoreAPI(endpoint) {
  const [data, setData] = useState(null);
  const [loading , setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com${endpoint}`);
        const categories = await response.json();
        setData(categories);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [endpoint]);
console.log(data,'data123')

  return {data , loading};
}

export default useFakeStoreAPI;

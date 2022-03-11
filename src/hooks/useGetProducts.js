import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    setProducts(response.data.filter(onlyUnique));
  }, []);

  return products;
};

export { useGetProducts };
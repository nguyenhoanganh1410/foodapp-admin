import { IProduct } from '@/utils/types';
import { useCallback, useEffect, useState } from 'react';

const data: IProduct[] = [
  {
    id: '1',
    name: 'Pzza A',
    status: 'active',
    price: '1234567',
    category: 'FOOD',
    desc: '',
  },
];
const useProductHook = () => {
  const [products, setProducts] = useState<IProduct[]>(data);
  const [showModelAdd, setShowModelAdd] = useState<boolean>(false);

  const onOpenModelAdd = useCallback(() => {
    setShowModelAdd(true);
  }, []);

  const onCloseModelAdd = useCallback(() => {
    setShowModelAdd(false);
  }, []);

  useEffect(() => {
    //TODO: GET PRODUCTS
  }, []);

  return { products, showModelAdd, onOpenModelAdd, onCloseModelAdd };
};

export default useProductHook;

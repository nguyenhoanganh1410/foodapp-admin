import { Container, LoadingPage } from '@/components';
import withAuth from '@/components/AuthHOC';
import { NextPage } from 'next';
import Sidebar from '../home/components/SideBar';
import Header from '../home/components/Header';
import Button from '@mui/material/Button';
import TableProducts from './components/TableProducts';
import useProductHook from './hook';
import ModelAddProduct from './components/ModelAddProduct';
import { addProduct } from '@/queries/products';

const ProductsPage: NextPage = () => {
  const { products, showModelAdd, onOpenModelAdd, onCloseModelAdd } =
    useProductHook();

  // const handleaAdd = async () => {
  //   console.log('ok');
  //   const res = await fetch(`https://food-menus-api.vercel.app/pizzas`, { cache: 'no-store' });
  //   const data = await res.json();
  //   const values: any = data.slice(0, 25).map((item: any) => {
  //     return {
  //       name: item.name,
  //       price: item.price * 1000,
  //       status: 'active',
  //       category: 'pizzas',
  //       desc: item.dsc,
  //       images: [item.img]
  //     }
  //   })
  //   const promises = values.map((v: any) => addProduct(v));
  //   console.log(values);
  //   Promise.all(promises);
  //   console.log('done');
  // }
  return (
    <Container headTitle='Settings Page'>
      {/* {loading && <LoadingPage />} */}
      <div className='no-input'>
        <div className='flex h-screen overflow-hidden'>
          <Sidebar sidebarOpen={true} setSidebarOpen={() => { }} />
          <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
            <Header sidebarOpen={true} setSidebarOpen={() => { }} />
            <main className='bg-[#F9F9F9] h-full p-8 2xl:p-16'>
              <div className='flex justify-between w-full'>
                <div className='text-gray-800 text-xl 2xl:text-3xl font-bold font-Inter'>
                  Sản Phẩm
                </div>
                <Button onClick={onOpenModelAdd} variant='contained'>
                  Thêm Sản Phẩm
                </Button>
              </div>
              <div className='flex flex-col mt-8'>
                <TableProducts products={products} />
              </div>
            </main>
          </div>
        </div>
      </div>
      {showModelAdd && (
        <ModelAddProduct open={showModelAdd} onClose={onCloseModelAdd} />
      )}
    </Container>
  );
};

export default withAuth(ProductsPage, 'all');

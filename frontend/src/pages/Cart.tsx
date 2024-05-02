import { useEffect, useState } from 'react';

import { AppState } from '../context/AppContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo prev.png';

const Cart = () => {

  const { cartState: { cart }, cartDispatch } = AppState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartTotal = cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.qty), 0);
    setTotal(cartTotal);
  }, [cart]);

  return (
    <>
      <header className="flex justify-center md:px-4">
        <Link to="/" className="p-4">
          <img src={logo} className="h-8 mx-auto" />
        </Link>
      </header>
      <div className="flex flex-col">
        <section className="text-center border-b border-gray-300 mx-4 md:px-8 lg:px-24 pb-2">
          <h2 className='md:text-2xl'>Cart <span className='text-gray-500'>({cart.length})</span></h2>
          <p className='mt-1 mb-4'>Total: ${total}</p>
          <div className='w-52s text-center'>
            <button className='py-1 '>Proceed to Check Out</button>
          </div>
        </section>
        <section className="mx-4 my-4">
          {cart.length === 0 && <h1 className='text-3xl text-center'>Yout Cart is Empty...</h1>}
          {cart.length > 0 &&
            <ul className="w-full text-xs md:text-base text-gray-900 rounded-lg">
              {cart.map(product => (
                <CartItem
                  key={product._id}
                  product={product}
                  cartDispatch={cartDispatch}
                />
              ))}
            </ul>
          }
        </section>
        <div className='text-center'>
          <Link to='/' className='max-w-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Back to Store
          </Link>
        </div>
      </div>
    </>
  );
};
export default Cart;
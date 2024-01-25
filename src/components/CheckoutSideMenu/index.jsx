import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import './styles.css';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(item => item.id !== id);
    context.setCartProducts(filteredProducts);
    context.setCounter(context.counter - 1);
  }

  const handleCheckout = () => {
    if (context.cartProducts.length === 0) {
      return;
    }

    const orderToAdd = {
      date: new Date(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCounter(0);
    context.closeCheckoutSideMenu();
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} overflow-y-scroll product-detail flex-col fixed right-0 border bg-white border-black rounded-lg`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div
          className='cursor-pointer'
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      <div className='flex-1'>
        {
          context.cartProducts.map((product) => {
            return <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              handleDelete={handleDelete}
            />
          })
        }
      </div>

      <div className='p-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu;

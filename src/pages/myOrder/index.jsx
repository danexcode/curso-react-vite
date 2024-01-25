import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import OrderCard from '../../components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const endpoint = currentPath.slice(11, currentPath.length + 1);
  let index;
  if(endpoint === 'last'){
    index = context.order.length - 1;
  } else {
    index = Number(endpoint);
  }

  return (
    <div>
      <div className="flex justify-center items-center relative mb-6">
        <Link to={'/my-orders'} className="absolute left-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1>MyOrder</h1>
      </div>

      <div className='flex flex-col'>
        {
          context.order[index].products.map((product) => {
            return <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.images[0]}
              price={product.price}
            />
          })
        }
      </div>
    </div>
  )
}

export default MyOrder

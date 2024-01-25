import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import './styles.css';
import { addProductsToCart } from '../../utils';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  const renderButton = (id) => {
    const isInCart = context.cartProducts.filter((product) => product.id === id).length > 0;

    if(isInCart){
      return (
        <div
          className='w-full p-6 bg-white text-slate-400 rounded-lg border border-black/50 text-center'
        >
          Added
        </div>
      )
    } else {
      return (
        <button
          className='w-full p-6 bg-black text-white rounded-lg'
          onClick={(event) => addProductsToCart(event, context.productToShow, context, false)}
        >
          Add To Cart
        </button>
      )
    }
  }

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} overflow-y-scroll product-detail flex-col fixed right-0 border bg-white border-black rounded-lg p-6`}>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div
          className='cursor-pointer'
          onClick={() => context.closeProductDetail()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      <figure className='mb-4'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.images[0]}
          alt={context.productToShow.title}
        />
      </figure>

      <p className='flex flex-col mb-4'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-lg text-sm'>{context.productToShow.description}</span>
      </p>

      {renderButton(context.productToShow.id)}
    </aside>
  )
}

export default ProductDetail;

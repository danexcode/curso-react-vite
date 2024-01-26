import { useContext } from 'react'

import Card from '../../components/card';
import ProductDetail from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';
import { checkLocalStorage } from '../../utils';

import './styles.css';

function Home() {
  const context = useContext(ShoppingCartContext);

  checkLocalStorage();

  const renderView = () => {
    if (context.searchByTitle || context.searchByCategory) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map((item) => <Card key={item.id} data={item}/>)
        )
      } else {
        return (
          <div>We dont have anything</div>
        )
      }
    } else {
      return context.items?.map((item) => <Card key={item.id} data={item}/>)
    }
  }


  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="flex justify-center items-center mb-6 relative">
        <h1>Home</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product...'
        className='rounded-lg border border-black/50 w-96 p-3 mb-4 focus:outline-none'
        onChange={(event) => {
          context.setSearchByTitle(event.target.value);
        }}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </div>
  )
}

export default Home

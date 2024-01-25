import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.any
  }

  // Shopping Cart counter
  const [counter, setCounter] = useState(0);

  // Product Detail - Open / Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu - Open / Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({
    title: '',
    price: '',
    description: '',
    images: [],
  });

  // Shopping Cart - Added Products
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Get Products
  const [items, setItems] = useState(null);

  useEffect(() => {
    let response = fetch('https://api.escuelajs.co/api/v1/products', {
      method: 'GET',
      headers: {
        'content': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => setItems(data))
    .catch((e) => e);

    console.log(response)
  }, []);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState('');

  const [filteredItems, setFiteredItems] = useState([]);

  const [searchByCategory, setSearchByCategory] = useState('');

  const filterItemsByCategory = (items, category) => {
    return items?.filter(item => item.category.name.toLowerCase() === category)
  }

  const filterItemsByTitle = (items, title) => {
    return items?.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) {
      setFiteredItems(filterItemsByTitle(items, searchByTitle))
    }

    if (searchByCategory) {
      setFiteredItems(filterItemsByCategory(items, searchByCategory))
    }
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider value={{
      counter,
      setCounter,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory,
    }}>
      { children }
    </ShoppingCartContext.Provider>
  );
};

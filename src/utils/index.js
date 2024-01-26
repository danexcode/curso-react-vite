/**
 * This function calculates total price of a new order
 * @param {Object[Product]} products
 * @returns {number} total sum of products prices
*/
export const totalPrice = (products) => {
  const total = products.reduce((acum, product) => acum + product.price, 0);
  return total;
}

/**
 *
 * @param {event} event
 * @param {Object} productInfo
 * @param {useContext} context
 */
export const addProductsToCart = (event, productInfo, context, closeDetail = true) => {
  event.stopPropagation();
  context.setCounter(context.counter + 1);
  context.setCartProducts([...context.cartProducts, productInfo]);
  if(closeDetail){
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  }
};

export const checkLocalStorage = () => {
  const signin = localStorage.getItem('sign-in');
  if(signin === null) {
    localStorage.setItem('sign-in', false);
  }

  const account = localStorage.getItem('account');
  const user = {
    name: '',
    email: '',
    password: '',
  }
  if(account === null) {
    localStorage.setItem('account', JSON.stringify(user));
  }
}

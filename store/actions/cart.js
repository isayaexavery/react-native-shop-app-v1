export const ADD_TO_CART = 'ADD_TO_CART';
export const REOMVE_FROM_CART = 'REOMVE_FROM_CART';

export const addToCart = product => {
  return { type: ADD_TO_CART, product: product };
};

export const removeFromCart = productId => {
  return { type: REOMVE_FROM_CART, pid: productId };
};

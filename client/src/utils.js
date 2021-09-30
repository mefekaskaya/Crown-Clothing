export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
  const cartItemBeRemoved = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToRemove.id
  );

  if (cartItemBeRemoved.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemBeRemoved.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemBeRemoved.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

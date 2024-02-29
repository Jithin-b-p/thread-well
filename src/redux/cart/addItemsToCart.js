export const addItemToCart = (cartItems, newItem) => {
  const itemAlreadyExist = cartItems.find((item) => item.id === newItem.id);
  if (itemAlreadyExist) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

export const removeItemFromTheCart = (cartItems, removeItem) => {
  return cartItems.filter((item) => item.id !== removeItem.id);
};

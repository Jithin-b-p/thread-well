export const reduceItemsFromTheCart = (cartItems, removeItem) => {
  const itemNeedsTobeRemoved = cartItems.find(
    (item) => item.id === removeItem.id
  );

  if (itemNeedsTobeRemoved.quantity === 1) {
    return cartItems.filter((item) => item.id !== removeItem.id);
  }

  return cartItems.map((item) =>
    item.id === removeItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

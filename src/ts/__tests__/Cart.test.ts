import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Price without discount must return sum of prices', () => {
  const cart = new Cart();

  cart.add({price: 2000, name: 'One', id: 10, isMultiple: true});
  cart.add({price: 1000, name: 'Two', id: 11, isMultiple: true});

  const countedPrice = cart.getCartPrice();

  expect(countedPrice).toBe(3000);
});

test('Price with discount must return sum of prices with discount', () => {
  const cart = new Cart();

  cart.add({price: 2000, name: 'One', id: 10, isMultiple: true});
  cart.add({price: 1000, name: 'Two', id: 11, isMultiple: true});

  const countedPrice = cart.getCartPrice(10);

  expect(countedPrice).toBe(2700);
});

test('List of items shold be length of 1', () => {
  const cart = new Cart();

  cart.add({price: 2000, name: 'One', id: 10, isMultiple: true});
  cart.add({price: 1000, name: 'Two', id: 11, isMultiple: true});

  cart.removeItem(10);

  expect(cart.items.length).toBe(1);
});

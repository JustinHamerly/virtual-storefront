let initialState= {
  products: [
    { name: 'mint', category: 'classic', description: 'mint', price: 10, inventory: 180 },
    { name: 'banana', category: 'classic', description: 'banana', price: 10, inventory: 206 },
    { name: 'cherry', category: 'classic', description: 'cherry', price: 10, inventory: 160 },
    { name: 'strawberry', category: 'classic', description: 'strawberry', price: 10, inventory: 201 },
    { name: 'grape', category: 'classic', description: 'grape', price: 10, inventory: 162 },
    { name: 'sea salt', category: 'unique', description: 'sea salt', price: 10, inventory: 42 },
    { name: 'fried chicken', category: 'unique', description: 'fried chicken', price: 10, inventory: 30 },
    { name: 'durian', category: 'unique', description: 'durian', price: 10, inventory: 47 },
    { name: 'matcha', category: 'unique', description: 'matcha', price: 10, inventory: 22 },
    { name: 'quesadilla', category: 'unique', description: 'quesadilla', price: 10, inventory: 68 },
    { name: 'gingerbread', category: 'seasonal', description: 'gingerbread', price: 12, inventory: 90 },
    { name: 'peppermint bark', category: 'seasonal', description: 'chestnut', price: 12, inventory: 32 },
    { name: 'pumpkin spice', category: 'seasonal', description: 'pumpkin spice', price: 12, inventory: 126 },
    { name: 'T-Shirt', category: 'apparel', description: 'T-Shirt', price: 20, inventory: 36 },
    { name: 'Hat', category: 'apparel', description: 'Hat', price: 20, inventory: 15 },
    { name: 'Sticker', category: 'apparel', description: 'Sticker', price: 2, inventory: 425 },
  ],
  displayedProducts: [
    { name: 'mint', category: 'classic', description: 'mint', price: 10, inventory: 180 },
    { name: 'banana', category: 'classic', description: 'banana', price: 10, inventory: 206 },
    { name: 'cherry', category: 'classic', description: 'cherry', price: 10, inventory: 160 },
    { name: 'strawberry', category: 'classic', description: 'strawberry', price: 10, inventory: 201 },
    { name: 'grape', category: 'classic', description: 'grape', price: 10, inventory: 162 },
  ],
  active: 'classic',
};

function productReducer(state = initialState, action){

  let { type, payload } = action;

  switch(type) {
    case 'CHANGE_PRODUCTS':
      let activeCategory = payload;
      let products = state.products;
      let displayedProducts = state.products.filter(product => product.category === payload);

      console.log(products);

      return { products, displayedProducts, activeCategory }

    default:
      return state;
  }
}

export default productReducer;
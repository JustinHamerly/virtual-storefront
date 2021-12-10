let initialState= {
  products: [
    { name: 'mint', category: 'classic', description: 'for the freshest breath', price: 10, inventory: 180 },
    { name: 'banana', category: 'classic', description: 'this shit is bananas', price: 10, inventory: 206 },
    { name: 'cherry', category: 'classic', description: 'ch-ch-ch-ch-ch-ch-ch-ch cherry bomb!', price: 10, inventory: 160 },
    { name: 'strawberry', category: 'classic', description: 'but it doesn\'t taste like straw...', price: 10, inventory: 201 },
    { name: 'grape', category: 'classic', description: 'it isn\'t great. it\'s GRAPE', price: 10, inventory: 162 },
    { name: 'sea salt', category: 'unique', description: 'so salty bro', price: 10, inventory: 42 },
    { name: 'fried chicken', category: 'unique', description: 'don\'t buy this one. it tastes bad', price: 10, inventory: 30 },
    { name: 'durian', category: 'unique', description: 'mother of sweet garbage', price: 10, inventory: 47 },
    { name: 'matcha', category: 'unique', description: 'not ceremonial grade', price: 10, inventory: 22 },
    { name: 'quesadilla', category: 'unique', description: 'bread and cheese flavor', price: 10, inventory: 68 },
    { name: 'gingerbread', category: 'seasonal', description: 'made from only the heads of gingerbread men', price: 12, inventory: 90 },
    { name: 'peppermint bark', category: 'seasonal', description: 'you know... that stuff that comes in a tin at christmas', price: 12, inventory: 32 },
    { name: 'pumpkin spice', category: 'seasonal', description: 'the closest we will ever get to cinnamon', price: 12, inventory: 126 },
    { name: 'T-Shirt', category: 'apparel', description: 'comes in many colors', price: 20, inventory: 36 },
    { name: 'Hat', category: 'apparel', description: 'beanie with logo', price: 20, inventory: 15 },
    { name: 'Sticker', category: 'apparel', description: 'bubble logo', price: 2, inventory: 425 },
  ],
  displayedProducts: [
    { name: 'mint', category: 'classic', description: 'for the freshest breath', price: 10, inventory: 180 },
    { name: 'banana', category: 'classic', description: 'this shit is bananas', price: 10, inventory: 206 },
    { name: 'cherry', category: 'classic', description: 'ch-ch-ch-ch-ch-ch-ch-ch cherry bomb!', price: 10, inventory: 160 },
    { name: 'strawberry', category: 'classic', description: 'but it doesn\'t taste like straw...', price: 10, inventory: 201 },
    { name: 'grape', category: 'classic', description: 'it isn\'t great... its grape', price: 10, inventory: 162 },
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
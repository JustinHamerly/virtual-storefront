let initialState= {
  products: [
    { name: 'mint', categories: ['allgum', 'classic'], description: 'mint', price: 10, inventory: 180 },
    { name: 'banana', categories: ['allgum', 'classic'], description: 'banana', price: 10, inventory: 206 },
    { name: 'cherry', categories: ['allgum', 'classic'], description: 'cherry', price: 10, inventory: 160 },
    { name: 'strawberry', categories: ['allgum', 'classic'], description: 'strawberry', price: 10, inventory: 201 },
    { name: 'grape', categories: ['allgum', 'classic'], description: 'grape', price: 10, inventory: 162 },
    { name: 'sea salt', categories: ['allgum', 'unique'], description: 'sea salt', price: 10, inventory: 42 },
    { name: 'fried chicken', categories: ['allgum', 'unique'], description: 'fried chicken', price: 10, inventory: 30 },
    { name: 'durian', categories: ['allgum', 'unique'], description: 'durian', price: 10, inventory: 47 },
    { name: 'matcha', categories: ['allgum', 'unique'], description: 'matcha', price: 10, inventory: 22 },
    { name: 'quesadilla', categories: ['allgum', 'unique'], description: 'quesadilla', price: 10, inventory: 68 },
    { name: 'gingerbread', categories: ['allgum', 'seasonal'], description: 'gingerbread', price: 12, inventory: 90 },
    { name: 'peppermint bark', categories: ['allgum', 'seasonal'], description: 'chestnut', price: 12, inventory: 32 },
    { name: 'pumpkin spice', categories: ['allgum', 'seasonal'], description: 'pumpkin spice', price: 12, inventory: 126 },
    { name: 'T-Shirt', categories: ['apparel'], description: 'T-Shirt', price: 20, inventory: 36 },
    { name: 'Hat', categories: ['apparel'], description: 'Hat', price: 20, inventory: 15 },
    { name: 'Sticker', categories: ['apparel'], description: 'Sticker', price: 2, inventory: 425 },
  ],
  active: 'allgum',
};

function productReducer(state = initialState, action){

  let { type, payload } = action;

  switch(type) {
    case 'CHANGE_PRODUCTS':
      let activeCategory = payload;
      let products = state.products.map(product => {
        let categories = product.categories;
        for(let category of categories){
          if (category === payload){
            return {...product}
          }
        }
      });

      return { products, activeCategory }

    default:
      return state;
  }
}

export default productReducer;
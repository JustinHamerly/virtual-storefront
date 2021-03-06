let initialState= {
  categories: [
    { normalized: 'classic', name: 'The Classics', description: 'the most classic of flavors', active: true},
    { normalized: 'unique', name: 'Unique Chews', description: 'flavors for the brave and adventurous', active: false},
    { normalized: 'seasonal', name: 'Seasonal', description: 'limited run and seasonal flavors', active:false},
    { normalized: 'apparel', name: 'Apparel', description: 'Bubblegum Merch', active:false},
  ],
  active: 'classic',
};

function categoryReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'CHANGE_CATEGORY':
      
      let activeCategory = state.active;
      let categories = state.categories.map(category => {
        if(category.normalized === payload){
          activeCategory = category.normalized;
          return {...category, active: true}
        }else{
          return {...category, active: false}
        }
      });
      
      return { categories, activeCategory }

    default:
      return state;
  }
}

export default categoryReducer;
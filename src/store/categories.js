let initialState= {
  categories: [
    { normalized: 'classic', name: 'All the Classics', description: 'the most classic of flavors', active: true},
    { normalized: 'unique', name: 'Strange Chews', description: 'flavors for the brave and adventurous', active: false},
    { normalized: 'seasonal', name: 'Seasonal', description: 'limited run and seasonal flavors', active:false},
  ],
  active: 'classic',
};

function categoryReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'CHANGE_CATEGORY':

      let categories = state.categories.map(category => {
        if(category.normalized === payload){
          return {...category, active: true}
        }else{
          return {...category, active: false}
        }
      });
      let activeCategory = state.active;
      
      return { categories, activeCategory }

    case 'RESET_CATEGORY':
      return initialState;
    default:
      return state;
  }
}

export default categoryReducer;
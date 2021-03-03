import { ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, SELECT_CATEGORY } from "./actions";

function updateCategoriesData(categories) {
  localStorage.setItem('categories', JSON.stringify(categories)); 
}
updateCategoriesData([{ id: 1, name: "Category1" }, {id: 2, name: "Category2" }, {id: 3, name: "Category3" }]);

const initialState = {
  categories: JSON.parse(localStorage.getItem('categories')),
  selectedCategory: null
};
var localCategories = {};


function rootReducer(state = initialState, action) {
    switch (action.type) {    
      case GET_CATEGORIES:    
          return {    
              ...state    
          };    
      case ADD_CATEGORY:
        localCategories = state.categories.concat(action.payload);
        updateCategoriesData(localCategories);    
          return {    
              ...state,    
              categories: localCategories  
          };    
      case EDIT_CATEGORY:
        localCategories =  state.categories.map(    
          (category, i) => category.id === action.payload.category.id ? {...category, name : action.payload.category.name }    
                                  : category);
          updateCategoriesData(localCategories);      
          return {    
              ...state,    
              categories: localCategories
          };    
      case DELETE_CATEGORY:
        localCategories =  state.categories.filter(category => category.id !== action.payload.id);
        localCategories.forEach((cat, index) => {
          cat.id = index + 1;
        });
        updateCategoriesData(localCategories); 
          return {    
              ...state,    
              categories: localCategories
          };   
      case SELECT_CATEGORY:    
      return {    
          ...state,    
          selectedCategory: action.payload.id
      };  
      default:    
          return state;    
  }    

}

export default rootReducer;
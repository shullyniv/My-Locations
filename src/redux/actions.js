export const ADD_CATEGORY = "ADD_CATEGORY";
// export const READ = "fetch all items";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SELECT_CATEGORY = "SELECT_CATEGORY";

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload:  category 
})

export const editCategory = (category) => ({
  type: EDIT_CATEGORY,
  payload: {category }
})

export const deleteCategory = (id) => ({
  type : DELETE_CATEGORY,
  payload : { id }
})

export const getCategories = () => ({
    type : GET_CATEGORIES
  })

  export const selectCategory = (id) => ({
    type : SELECT_CATEGORY,
    payload : { id }
  })
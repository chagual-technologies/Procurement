import axios from 'axios'

//  ACTION TYPES //

const GET_PRODUCTS = 'GET_PRODUCTS'
const LOADING_PRODS = 'LOADING_PRODS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'

// Action Creators

const loadingProduct = () => ({
  type: LOADING_PRODS
})

const getProducts = products => ({
  type: GET_PRODUCTS,
  products
})

const addProduct = () => ({
  type: ADD_PRODUCT
})

const updateProduct = () => ({
  type: EDIT_PRODUCT
})
//THUNK

export const allProducts = () => async dispatch => {
  try {
    dispatch(loadingProduct())
    const res = await axios.get('/api/products/')
    dispatch(getProducts(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const addNewProduct = postData => async dispatch => {
  try {
    const {data} = await axios.post('/api/products/', postData)
    dispatch(addProduct(data))
  } catch (error) {
    console.error(error)
  }
}

export const editProduct = (postData, id) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/products/${id}`, postData)
    dispatch(updateProduct(data))
  } catch (error) {
    console.error(error)
  }
}

// INITIAL STATE //

const initialState = {
  products: [],
  loading: false
}

// REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_PRODS:
      return {...state, loadingProduct: true}
    case GET_PRODUCTS:
      return {...state, loadingProduct: false, products: action.products}
    case ADD_PRODUCT:
      return {...state, products: [action.product, ...state.products]}
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.product.id) {
            return action.post
          }
          return product
        })
      }
    default:
      return state
  }
}

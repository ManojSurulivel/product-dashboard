const initialState = {
  products: [],
  filter: '',
  searchTerm: '',
  sortOrder: 'asc',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_SORT_ORDER':
      return {
        ...state,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

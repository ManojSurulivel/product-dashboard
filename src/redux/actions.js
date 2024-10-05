export const fetchProductsSuccess = (products) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products,
  };
};

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: filter,
  };
};

export const setSearchTerm = (searchTerm) => {
  return {
    type: 'SET_SEARCH_TERM',
    payload: searchTerm,
  };
};

export const setSortOrder = (order) => {
  return {
    type: 'SET_SORT_ORDER',
    payload: order,
  };
};

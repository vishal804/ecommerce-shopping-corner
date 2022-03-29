const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  filters: {
    sortBy: "",
    sortByBrand: [],
    sortByCategory: [],
    sortBySize: [],
    sortByIdealFor: [],
  },
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          sortBy: "",
          sortByBrand: [],
          sortByCategory: [],
          sortBySize: [],
          sortByIdealFor: [],
        },
      };
    case "HIGH_TO_LOW":
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.payload,
        },
      };

    case "LOW_TO_HIGH":
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.payload,
        },
      };
    case "SORT_BY_BRAND":
      return state.filters.sortByBrand.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortByBrand: state.filters.sortByBrand.filter(
                (brand) => brand !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortByBrand: state.filters.sortByBrand.concat(action.payload),
            },
          };

    case "SORT_BY_CATEGORY":
      return state.filters.sortByCategory.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortByCategory: state.filters.sortByCategory.filter(
                (category) => category !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortByCategory: state.filters.sortByCategory.concat(
                action.payload
              ),
            },
          };
    case "SORT_BY_IDEALFOR":
      return state.filters.sortByIdealFor.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortByIdealFor: state.filters.sortByIdealFor.filter(
                (idealFor) => idealFor !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortByIdealFor: state.filters.sortByIdealFor.concat(
                action.payload
              ),
            },
          };
  }
};

export { initialState, dataReducer };

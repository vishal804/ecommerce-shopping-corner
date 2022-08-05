const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  filters: {
    priceRange: 5000,
    sortBy: "",
    sortByBrand: [],
    sortByRating: null,
    sortByCategory: [],
    sortBySize: [],
    sortByIdealFor: [],
  },
  addresses: {
    address: [],
    selectedAddress: {},
    showAddressModal: false,
  },
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_USER_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "SET_USER_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          priceRange: 5000,
          sortBy: "",
          sortByBrand: [],
          sortByRating: null,
          sortByCategory: [],
          sortBySize: [],
          sortByIdealFor: [],
        },
      };

    case "SORT_BY_PRICERANGE":
      return {
        ...state,
        filters: {
          ...state.filters,
          priceRange: action.payload,
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

    case "SORT_BY_RATING":
      return {
        ...state,
        filters: {
          ...state.filters,
          sortByRating: action.payload,
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

    case "SORT_BY_SIZE":
      return state.filters.sortBySize.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortBySize: state.filters.sortBySize.filter(
                (size) => size !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortBySize: state.filters.sortBySize.concat(action.payload),
            },
          };

    case "SET_ADDRESS":
      return {
        ...state,
        addresses: { ...state.addresses, address: action.payload },
      };
    case "SET_SELECTED_ADDRESS":
      return {
        ...state,
        addresses: { ...state.addresses, selectedAddress: action.payload },
      };

    case "SHOW_ADDRESS_MODAL":
      return {
        ...state,
        addresses: { ...state.addresses, showAddressModal: action.payload },
      };

    default:
      return state;
  }
};

export { initialState, dataReducer };

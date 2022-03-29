import { createContext, useContext, useReducer } from "react";
import { dataReducer, initialState } from "../reducer/dataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const sortData = (data) => {
    if (state.filters.sortBy === "HIGH_TO_LOW") {
      return [...data].sort(
        (a, b) => b.priceAfterDiscount - a.priceAfterDiscount
      );
    }
    if (state.filters.sortBy === "LOW_TO_HIGH") {
      return [...data].sort(
        (a, b) => a.priceAfterDiscount - b.priceAfterDiscount
      );
    }

    return data;
  };

  const filterData = (data) => {
    if (data) {
      let filteredData = [...data];

      if (state.filters.sortByBrand.length !== 0) {
        filteredData = filteredData.filter((product) =>
          state.filters.sortByBrand.includes(product.brand)
        );
      }

      if (state.filters.sortByCategory.length !== 0) {
        filteredData = filteredData.filter((product) =>
          state.filters.sortByCategory.includes(product.category)
        );
      }

      if (state.filters.sortByIdealFor.length !== 0) {
        filteredData = filteredData.filter((product) =>
          product.idealFor.some((element) =>
            state.filters.sortByIdealFor.includes(element)
          )
        );
      }
      return filteredData;
    }
    return [];
  };

  const sortedData = sortData(state.products);
  const filteredData = filterData(sortedData);

  return (
    <DataContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };

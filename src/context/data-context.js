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

const filterData = () => {}

const sortedData = sortData(state.products)
const filteredData = filterData(sortedData) 

  return (
    <DataContext.Provider value={{ state, dispatch, filteredData:sortedData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };

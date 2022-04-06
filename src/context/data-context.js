import React, { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { dataReducer, initialState } from "../reducer/dataReducer";
import axios from "axios";
import { filterData, sortData } from "../utility";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        dispatch({ type: "SET_PRODUCTS", payload: response.data.products });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const sortedData = sortData(state, state.products);
  const filteredData = filterData(state, sortedData);

  return (
    <DataContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };

export const filterData = (state, data) => {
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

    if (state.filters.sortBySize.length !== 0) {
      filteredData = filteredData.filter((prod) =>
        prod.sizeAvailable.some((ele) => state.filters.sortBySize.includes(ele))
      );
    }
    if (state.filters.priceRange.length !== 0)
      filteredData = filteredData.filter(
        (product) => product.priceAfterDiscount <= state.filters.priceRange
      );

    if (state.filters.sortByRating !== null)
      filteredData = filteredData.filter(
        (product) => product.rating >= state.filters.sortByRating
      );

    return filteredData;
  }
  return [];
};

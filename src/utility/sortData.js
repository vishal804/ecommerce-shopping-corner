export const sortData = (state, data) => {
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

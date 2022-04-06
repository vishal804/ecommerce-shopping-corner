import axios from "axios";
const encodedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4NDA1MjA4MS1hNjAwLTQ2YmQtYTNhZS0yZDljNTU2YTQ0NzgiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.gaqvCVkY0hv54te82TnyI8W3iLXNbRScUytBNaTE3GM";

export const addToCart = async (product, dispatch) => {
  console.log("product", product);
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: { authorization: encodedToken },
      }
    );

    dispatch({ type: "SET_USER_CART", payload: response.data.cart });
  } catch (err) {
    console.log(err);
  }
};

export const removeFromCart = async (id, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: encodedToken },
    });

    dispatch({ type: "SET_USER_CART", payload: response.data.cart });
  } catch (err) {
    console.log(err);
  }
};

export const updateQuantity = async (id, dispatch, updateType) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: updateType,
        },
      },
      {
        headers: { authorization: encodedToken },
      }
    );
    dispatch({ type: "SET_USER_CART", payload: response.data.cart });
  } catch (err) {
    console.log(err);
  }
};

export const addToWishlist = async (product, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: encodedToken },
      }
    );
    dispatch({ type: "SET_USER_WISHLIST", payload: response.data.wishlist });
  } catch (err) {
    console.log(err);
  }
};

export const removeFromWishlist = async (id, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: encodedToken },
    });
    dispatch({ type: "SET_USER_WISHLIST", payload: response.data.wishlist });
  } catch (err) {
    console.log(err);
  }
};

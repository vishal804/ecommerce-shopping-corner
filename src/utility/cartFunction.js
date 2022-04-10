import axios from "axios";

export const addToCart = async (product, dispatch, token, navigate) => {
  if (token) {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: { authorization: token },
        }
      );

      dispatch({ type: "SET_USER_CART", payload: response.data.cart });
    } catch (err) {
      console.log(err);
    }
  } else {
    navigate("/signin");
  }
};

export const removeFromCart = async (id, dispatch, token) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });

    dispatch({ type: "SET_USER_CART", payload: response.data.cart });
  } catch (err) {
    console.log(err);
  }
};

export const updateQuantity = async (id, dispatch, updateType, token) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: updateType,
        },
      },
      {
        headers: { authorization: token },
      }
    );
    dispatch({ type: "SET_USER_CART", payload: response.data.cart });
  } catch (err) {
    console.log(err);
  }
};

export const addToWishlist = async (product, dispatch, token, navigate) => {
  if (token) {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: { authorization: token },
        }
      );
      dispatch({ type: "SET_USER_WISHLIST", payload: response.data.wishlist });
    } catch (err) {
      console.log(err);
    }
  } else {
    navigate("/signin");
  }
};

export const removeFromWishlist = async (id, dispatch, token) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    dispatch({ type: "SET_USER_WISHLIST", payload: response.data.wishlist });
  } catch (err) {
    console.log(err);
  }
};

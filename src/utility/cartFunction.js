import axios from "axios";
import { ErrorToast, InfoToast } from "../component";

export const addToCart = async (
  product,
  dispatch,
  token,
  navigate,
  location
) => {
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
      InfoToast("Product added to cart");
    } catch (error) {
      ErrorToast("seems to be error", error);
    }
  } else {
    navigate("/signin", { state: { from: location.pathname } });
  }
};

export const removeFromCart = async (id, dispatch, token) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });

    dispatch({ type: "SET_USER_CART", payload: response.data.cart });
    InfoToast("Product removed from cart");
  } catch (error) {
    ErrorToast("seems to be error", error);
  }
};

export const updateProductQuantity = (id, updateType, token) => {
  return axios.post(
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
};

export const updateQuantity = async (id, dispatch, updateType, token, qty) => {
  try {
    if (updateType === "increment") {
      const response = await updateProductQuantity(id, updateType, token);
      dispatch({ type: "SET_USER_CART", payload: response.data.cart });
    } else if (updateType === "decrement" && qty - 1 !== 0) {
      const response = await updateProductQuantity(id, updateType, token);
      dispatch({ type: "SET_USER_CART", payload: response.data.cart });
    } else {
      removeFromCart(id, dispatch, token);
    }
  } catch (error) {
    ErrorToast("seems to be error", error);
  }
};

export const addToWishlist = async (
  product,
  dispatch,
  token,
  navigate,
  location
) => {
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
      InfoToast("Product added to wishlist");
    } catch (error) {
      ErrorToast("seems to be error", error);
    }
  } else {
    navigate("/signin", { state: { from: location.pathname } });
  }
};

export const removeFromWishlist = async (id, dispatch, token) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    dispatch({ type: "SET_USER_WISHLIST", payload: response.data.wishlist });
    InfoToast("Product removed from wishlist");
  } catch (error) {
    ErrorToast("seems to be error", error);
  }
};

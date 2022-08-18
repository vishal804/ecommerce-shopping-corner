import axios from "axios";
import { SuccessToast, ErrorToast } from "../component";

export const getAddress = async (dispatch, token) => {
  try {
    const response = await axios.get("/api/user/address", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      dispatch({
        type: "SET_ADDRESS",
        payload: response.data.addressList,
      });
    }
  } catch (error) {
    ErrorToast("Seems to be error", error);
  }
};

export const addAddressHandler = async (address, token, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/address",
      {
        address,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      dispatch({
        type: "SET_ADDRESS",
        payload: response.data.addressList,
      });
      dispatch({ type: "SHOW_ADDRESS_MODAL", payload: false });
      SuccessToast("Address Added");
    }
  } catch (error) {
    ErrorToast("Seems to be error", error);
  }
};

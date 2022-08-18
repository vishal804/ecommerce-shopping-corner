import React, { useState } from "react";
import "./addressModal.css";
import { useAuth } from "../../context/auth-context";
import { useData } from "../../context/data-context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addAddressHandler } from "../../utility/addressFunction";

const AddressModal = () => {
  const {
    authState: { token },
  } = useAuth();
  const { dispatch } = useData();

  const [dummyData, setDummyData] = useState(null);

  const initialValues = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    phone: "",
  };

  const dummyFiledData = {
    name: "Steve Roger",
    street: "Avenger Office",
    city: "New City",
    state: "Maharashtra",
    country: "India",
    phone: "999977999",
  };

  return (
    <>
      <div className="address-modal">
        <div className="address-modal-container">
          <Formik
            onSubmit={(values) => {
              addAddressHandler(values, token, dispatch);
            }}
            initialValues={dummyData || initialValues}
            validate={(values) => {
              const errors = {};
              if (!values.name.trim()) {
                errors.name = "Required";
              }
              if (!values.street.trim()) {
                errors.street = "Required";
              }
              if (!values.city.trim()) {
                errors.city = "Required";
              }
              if (!values.state.trim()) {
                errors.state = "Required";
              }
              if (!values.country.trim()) {
                errors.country = "Required";
              }

              return errors;
            }}
            enableReinitialize
          >
            {() => (
              <Form className="form-address">
                <div
                  className="close-btn"
                  onClick={() =>
                    dispatch({ type: "SHOW_ADDRESS_MODAL", payload: false })
                  }
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="input-field">
                  <Field
                    className="input"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="name"
                    component="div"
                  />
                </div>

                <div className="input-field">
                  <Field
                    className="input"
                    type="text"
                    placeholder="Enter House/street Number"
                    name="street"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="street"
                    component="div"
                  />
                </div>

                <div className="input-field">
                  <Field
                    className="input"
                    type="text"
                    placeholder="Enter city"
                    name="city"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="city"
                    component="div"
                  />
                </div>

                <div className="input-field">
                  <Field
                    className="input"
                    type="text"
                    placeholder="Enter state"
                    name="state"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="state"
                    component="div"
                  />
                </div>

                <div className="input-field">
                  <Field
                    className="input"
                    type="text"
                    placeholder="Enter country"
                    name="country"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="country"
                    component="div"
                  />
                </div>

                <div className="input-field">
                  <Field
                    className="input"
                    type="number"
                    placeholder="Enter phone"
                    name="phone"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="phone"
                    component="div"
                  />
                </div>

                <div className="form-btn mangement">
                  <button className="btn btn-primary btn-lg" type="submit">
                    Save Address
                  </button>

                  <button
                    className="btn btn-primary btn-lg"
                    type="button"
                    onClick={() => setDummyData(dummyFiledData)}
                  >
                    Fill Dummy Address
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export { AddressModal };

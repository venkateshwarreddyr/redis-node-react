import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import reduxPromise from "redux-promise";

const Root = ({ initialState = {}, children }) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;

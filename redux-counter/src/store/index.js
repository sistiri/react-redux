// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

// const store = createStore(counterReducer);

const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

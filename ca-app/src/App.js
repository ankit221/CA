import React from "react";
import Frame from "./components/frame/Frame";
import { Provider } from "react-redux";
import {configureStore, history } from './store/configStore/ConfigureStore'

export const { store } = configureStore();

const App = () => {
  return (
    <>
<Provider store={store}>
<Frame />
</Provider>
    </>
  );
};

export default App;

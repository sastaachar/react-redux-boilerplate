import React from "react";
import { Provider } from "react-redux";

import "./App.css";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">Init</div>
    </Provider>
  );
}

export default App;

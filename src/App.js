import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import NameComponent from "./Name";
import rootReducer from "./redux/rootReducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NameComponent />
      </Provider>
    );
  }
}

export default App;

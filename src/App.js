import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HeadlinesList from "./components/HeadlinesList/HeadlinesList";
import ListContent from "./components/ListContent/ListContent";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" strict exact component={HeadlinesList} />
          <Route path="/content" component={ListContent} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

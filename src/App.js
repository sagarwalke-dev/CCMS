import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Checker from "./components/Checker";
import Header from "./components/Header";
import Home from "./components/Home";

import Maker from "./components/Maker";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/marker' component={Maker} />
        <Route exact path='/checker' component={Checker} />
      </BrowserRouter>
    </>
  );
}

export default App;

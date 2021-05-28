import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Checker from "./components/Checker";
import CheckerHome from "./components/CheckerHome";
import Header from "./components/Header";

import Maker from "./components/Maker";
import MakerHome from "./components/MakerHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/checkerHome" component={CheckerHome} />
        <Route exact path="/makerHome" component={MakerHome} />
        <Route exact path="/marker" component={Maker} />
        <Route exact path="/checker" component={Checker} />
      </BrowserRouter>
    </>
  );
}

export default App;

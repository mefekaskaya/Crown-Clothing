import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage.jsx";
import ShopPage from "./pages/shop/Shop.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import LoginAndRegister from "./pages/loginAndRegister/LoginAndRegister.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";

import Header from "./components/header/Header.jsx";

import { selectCurrentUser } from "./redux/selectors/user";
import { checkUserSession } from './redux/actions/user';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/login"
          render={() =>
            currentUser ? <Redirect to="/" /> : <LoginAndRegister />
          }
        />
      </Switch>
    </div>
  );
}

export default App;

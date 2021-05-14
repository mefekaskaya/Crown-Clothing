import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage.jsx";
import ShopPage from "./pages/shop/Shop.jsx";
import LoginAndRegisterPage from "./pages/loginAndRegisterPage/LoginAndRegisterPage.jsx";
import Header from "./components/header/Header.jsx";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    console.log(currentUser);
    return () => {
      unsubscribeFromAuth();
    };
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginAndRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;

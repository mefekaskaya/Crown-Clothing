import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage.jsx";
import ShopPage from "./pages/shop/Shop.jsx";
import LoginAndRegisterPage from "./pages/loginAndRegisterPage/LoginAndRegisterPage.jsx";
import Header from "./components/header/Header.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/actions/user";

function App() {
  const dispatch = useDispatch();

  const changeCurrentUser = (user) => dispatch(setCurrentUser(user));

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          changeCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        changeCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginAndRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;

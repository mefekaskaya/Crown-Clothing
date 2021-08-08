import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Spinner from './components/spinner/Spinner.jsx';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.jsx';

import Header from "./components/header/Header.jsx";

import { selectCurrentUser } from "./redux/selectors/user";
import { checkUserSession } from './redux/actions/user';

const Home = lazy(() => import("./pages/home/Home.jsx"));
const Shop = lazy(() => import("./pages/shop/Shop.jsx"));
const LoginAndRegister = lazy(() => import("./pages/loginAndRegister/LoginAndRegister.jsx"));
const Checkout = lazy(() => import("./pages/checkout/Checkout.jsx"));

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;

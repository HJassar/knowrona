import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Splash from "./Splash/Splash";
import Home from "./Home/Home";
import QuizSession from "./QuizSession/QuizSession";
// import Dashboard from './Dashboard/Dashboard';
// import Pages from './Pages/Pages';

import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

//Eventually add logic for JWT storage so that if user refreshes page, they stay logged in.  Reference for implementation: https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/home" component={Home} />
            {/* <Route path='/dashboard' component={Dashboard} /> */}
            <Route path="/quiz" component={QuizSession} />
            {/* <Route path='/' component={Pages} /> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forget-password" component={ForgetPassword} />
            <Route
              render={() => {
                return <h1>404 page</h1>;
              }}
            />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

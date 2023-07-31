import React from "react"
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/home';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/privacy-prolicy';

const App = () => {
  return (
    <>
      {/*<Router>*/}
      {/*  <Header />*/}
      {/*  <Switch>*/}
      {/*    <Route exact path='/'>*/}
      {/*      <Home />*/}
      {/*    </Route>*/}
      {/*    <Route exact path='/privacy-policy'>*/}
      {/*      <PrivacyPolicy />*/}
      {/*    </Route>*/}
      {/*  </Switch>*/}
      {/*  <Footer />*/}
      {/*</Router>*/}
    </>
  )
}

export default App;

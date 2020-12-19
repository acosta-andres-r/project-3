import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductDB from "./container/ProductDB";
import Chat from "./container/Chat";
import Admin from "./container/Admin"
import Buy from "./pages/Buy"
import Search from "./pages/Search"
import Add from "./pages/Add"

import Alert from './components/SnackBar/SnackBar'

import AppBar from './components/AppBar/AppBar'

function App() {

  return (
    <Router>
      <AppBar />
      <div className={'Container'}>
        <Switch>
          <Route exact path={"/"}>
            <Buy />
          </Route>
          <Route exact path={"/search/:id"}>
            <Search />
          </Route>
          <Route exact path={"/sell"}>
            {/* <Sell /> */}
            <ProductDB />
          </Route>
          <Route exact path={"/sell/add"}>
            {/* <Sell /> */}
            <Add />
          </Route>
          <Route exact path={"/offers"}>
            <Alert />
          </Route>
          {/* <Route>
      <NoMatch />
    </Route> */}
        </Switch>
      </div>
    </Router >
  );
}

export default App;



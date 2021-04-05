import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Notebooks from "../pages/Notebooks";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notes" component={Notes} />
            <Route path="/notebooks" component={Notebooks} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

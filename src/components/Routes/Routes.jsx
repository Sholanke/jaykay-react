import React, { Component } from "react";
import { Switch, Route, Router, withRouter } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import { createHashHistory } from "history";
import Header from "../common/Header";
import MessageJK from "../common/MessageJK";
import FooterSection from "../common/Footer";

export default class Routes extends Component {
  render() {
    return (
      <Router history={createHashHistory()}>
        <WithRoutes />
      </Router>
    );
  }
}

const WithRoutes = withRouter(
  class WithRoutes extends Component {

    componentDidMount() {
      this.unlisten = this.props.history.listen((location) => {
        window.scrollTo(0, 0);
      });
    }

    render() {
      return (
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
          </Switch>
          <MessageJK />
          <FooterSection />
        </>
      );
    }
  }
);

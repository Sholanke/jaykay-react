import React, { Component } from "react";
import { Switch, Route, Router, withRouter } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import { createHashHistory } from "history";
import Header from "../common/Header";
import MessageJK from "../common/MessageJK";
import FooterSection from "../common/Footer";
import notFound from "../assets/img/404.gif"
import JKLink from "../common/JKLink";

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
            <Route component={NotFound} />
          </Switch>
          <MessageJK />
          <FooterSection />
        </>
      );
    }
  }
);

function NotFound() {
  return (
    <div className="wrapper">
      <div className="max_width not_found_page">
        <div className="image">
          <img src={notFound} alt="" srcset=""/>
        </div>
        <div className="text">
          <h1 className="section-heading">404</h1>
          <p>How'd you even get here?</p>{" "}
          <br/>
          <JKLink to="/">Go Home</JKLink>
        </div>
      </div>
    </div>
  );
}

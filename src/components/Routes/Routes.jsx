import React, { Component } from "react";
import { Switch, Route, Router, withRouter } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import { createHashHistory } from "history";
import Header from "../common/Header";
import MessageJK from "../common/MessageJK";
import FooterSection from "../common/Footer";
import notFound from "../assets/img/404.gif";
import JKLink from "../common/JKLink";
import Eyowo from "../Eyowo/Eyowo";
import ARM from "../ARM/index";
import Shots from "../Shots/Shots";

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
    state = {
      hamBurgerIsActive: false,
    };
    componentDidMount() {
      this.unlisten = this.props.history.listen((location) => {
        window.scrollTo(0, 0);
        this.setState({ hamBurgerIsActive: false });
      });
    }

    render() {
      return (
        <>
          <Header
            useHamBurgerIsActive={() => [
              this.state.hamBurgerIsActive,
              (bool) => this.setState({ hamBurgerIsActive: bool }),
            ]}
          />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/about"
              exact
              component={() => <AboutPage left={true} />}
            />
            <Route path="/eyowo" exact component={Eyowo} />
            <Route path="/arm" exact component={ARM} />
            <Route path="/shots" exact component={Shots} />
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
          <img src={notFound} alt="" srcset="" />
        </div>
        <div className="text">
          <h1 className="section-heading">404</h1>
          <p>How'd you even get here?</p> <br />
          <JKLink to="/">Go Home</JKLink>
        </div>
      </div>
    </div>
  );
}

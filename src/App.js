import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./ReactMenu/home";
import Services from "./ReactMenu/services";
import About from "./ReactMenu/about";
import Contact from "./ReactMenu/Contact";
import Navbar from "./ReactMenu/navbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <>
      <Navbar />
      <Route
        render={({ location }) => (
          <div>
            <TransitionGroup>
              <CSSTransition timeout={300} classNames="item" key={location.key}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/contact" component={Contact} />
                  <Redirect to="/" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      />
    </>
  );
}

export default App;

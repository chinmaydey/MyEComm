import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ErrorScreen from "./screens/ErrorScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>
          <Switch>
            <Route path="/" exact>
              <HomeScreen></HomeScreen>
            </Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="*">
              <ErrorScreen></ErrorScreen>
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;

import Navi from "../Navi/Navi";
import { Container, Row } from "reactstrap";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartSummary from "../Cart/CartSummary";
import NotFound from "../Common/NotFound";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/product" component={Dashboard} />
          <Route exact path="/cart" component={CartSummary} />
          <Route exact component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import CategoryList from "../Category/CategoryList";
import ProductList from "../Product/ProductList";
import { Row, Col } from "reactstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md="3">
            <CategoryList />
          </Col>
          <Col md="9">
            <ProductList />
          </Col>
        </Row>
      </div>
    );
  }
}

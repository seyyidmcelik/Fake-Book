import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../../Redux/action/cartActions";
import { getProducts } from "../../Redux/action/getProducts";
import alertify from "alertifyjs";
import "./ProductList.css";
import { Button, Input } from "reactstrap";

class ProductList extends Component {
  state = { filtered: "" };
  componentDidMount() {
    this.props.actions.getProducts();
  }
  selectedItem = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " added.");
  };
  onChangeHandle = (event) => {
    this.setState({ filtered: event.target.value });
  };
  showFilterInfo = () => {
    return (
      <small>
        Searching <strong>{this.state.filtered}</strong>
      </small>
    );
  };
  hideFilterInfo = () => {
    return <small></small>;
  };
  render() {
    let filteredProduct = this.props.products.filter((c) => {
      return (
        c.productName
          .toLowerCase()
          .indexOf(this.state.filtered.toLowerCase()) !== -1 ||
        c.author.toLowerCase().indexOf(this.state.filtered.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <h4>
          <em>Filter Books</em>
        </h4>
        <Input
          type="text"
          onChange={this.onChangeHandle}
        />

        {this.state.filtered.length > 0
          ? this.showFilterInfo()
          : this.hideFilterInfo()}

        <div className="d-flex" style={{ flexWrap: "wrap", margin: "0 auto" }}>
          {filteredProduct.map((product) => (
            <div
              key={product.id}
              style={{ margin: "0 auto", border: "none" }}
              className="card mt-4"
            >
              <div className="cardHeader">
                <img
                  alt={product.productName}
                  style={{
                    minWidth: "230px",
                    maxWidth: "230px",
                    minHeight: "350px",
                    maxHeight: "350px",
                  }}
                  src={product.picture}
                />
              </div>
              <div className="cardBody">
                <h6
                  style={{
                    width: "230px",
                    height: "25px",
                    textAlign: "center",
                  }}
                >
                  {product.productName}
                </h6>
                <Button
                  onClick={() => this.selectedItem(product)}
                  className="w-100 mb-5 mt-3"
                  color="success"
                >
                  Get
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.getProductsReducer,
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(getProducts, dispatch),
      addToCart: bindActionCreators(addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

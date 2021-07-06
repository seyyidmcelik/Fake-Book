import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { removeFromCart } from "../../Redux/action/cartActions";
import alertify from "alertifyjs";

class CartSummary extends Component {
  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " removed");
  };
  showCart() {
    return (
      <div>
        <Alert color="success">
          <h3>Your Cart</h3>
        </Alert>
        <div className="d-flex" style={{ flexWrap: "wrap", margin: "0 auto" }}>
          {this.props.carts.map((cartItem) => (
            <div
              style={{ margin: "0 auto", border: "none" }}
              className="card mt-4"
            >
              <div className="cardHeader">
                <img
                  alt={cartItem.product.productName}
                  style={{
                    minWidth: "230px",
                    maxWidth: "230px",
                    minHeight: "350px",
                    maxHeight: "350px",
                  }}
                  src={cartItem.product.picture}
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
                  {cartItem.product.productName}
                </h6>
              </div>
              <div className="cardFooter">
                <h6>Price : {cartItem.product.price}</h6>
                <h6>Quantity : {cartItem.quantity}</h6>
                <h6>
                  Total Price : &#8378;
                  {cartItem.product.price * cartItem.quantity}{" "}
                </h6>
                <Button
                  color="danger"
                  onClick={() => this.removeFromCart(cartItem.product)}
                  className="w-100"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  emptyCart = () => {
    return (
      <Alert color="danger">
        {" "}
        <h1>Empty Cart</h1> <hr /> Add new item to continue shoping{" "}
      </Alert>
    );
  };
  render() {
    return (
      <div className="p-3">
        {this.props.carts.length > 0 ? this.showCart() : this.emptyCart()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    carts: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);

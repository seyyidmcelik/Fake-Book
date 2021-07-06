import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Badge,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar className="mb-5 px-5" color="dark" dark expand="md">
          <NavbarBrand >
            <Link to="/" style={{color:"gray",textDecoration:"none"}}>Fake Book</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <NavbarText></NavbarText>
          <Collapse
            style={{ display: "flex", justifyContent: "flex-end" }}
            isOpen={this.state.isOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="fas fa-shopping-cart"></i> {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                  {this.props.cart.map((cartItem) => (
                    <DropdownItem>
                      {cartItem.product.productName}{" "}
                      <Badge className="bg-success">{cartItem.quantity}</Badge>
                    </DropdownItem>
                  ))}
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link style={{textDecoration:"none"}} to="/cart">Go to cart <i className="fas fa-shopping-cart"></i></Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps)(Navi);

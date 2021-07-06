import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import {
  changeCategory,
  getCategories,
} from "../../Redux/action/getCategories";
import { getProducts } from "../../Redux/action/getProducts";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectedItem(category) {
    this.props.actions.getProducts(category.id);
    this.props.actions.changeCategory(category);
  }
  render() {
    return (
      <ListGroup className="mb-3">
        {this.props.categories.map((category) => (
          <ListGroupItem
            active={category.id === this.props.currentCategory.id}
            onClick={() => this.selectedItem(category)}
            key={category.id}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.getCategoriesReducer,
    currentCategory: state.changeCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(getCategories, dispatch),
      getProducts: bindActionCreators(getProducts, dispatch),
      changeCategory: bindActionCreators(changeCategory, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

import React, { Component } from "react";
import { Alert } from "reactstrap";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Alert color="danger">
          Page is not founded. Please check your web path and try again.
        </Alert>
      </div>
    );
  }
}

export default NotFound;

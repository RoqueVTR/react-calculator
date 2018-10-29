import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className="btn" onClick={this.props.onBtnClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;

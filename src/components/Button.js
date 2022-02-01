import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className="btn btn-outline-secondary"
        style={{
          backgroundColor: this.props.isSelected ? "blue" : "transparent",
        }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;

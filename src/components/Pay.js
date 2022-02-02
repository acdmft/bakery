import React from "react";

class Pay extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>Pay {this.props.totalSum}</div>;
  }
}

export default Pay;

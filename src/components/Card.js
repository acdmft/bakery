import React from "react";

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      image: "../../public/images/item.png",
    };
  }
  render() {
    return (
      <div className="card mx-auto mt-3" style={{ width: "18rem" }}>
        <div class="card-body text-center">
          <h1 style={{ fontSize: "5rem" }}>{this.props.productName}</h1>
          <h5 className="card-title">Price: {this.props.price}</h5>
        </div>
        <button
          onClick={() => {
            this.props.onClick(this.props.productName, this.props.price);
          }}
        >
          <img src={this.state.url}></img>
        </button>
      </div>
    );
  }
}

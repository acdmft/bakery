import React from "react";

class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      productName: "",
      price: 1,
    };
    this.updatePrice = this.updatePrice.bind(this);
    this.updateProductName = this.updateProductName.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  updateProductName(e) {
    this.setState({ productName: e.target.value });
  }
  updatePrice(e) {
    this.setState({ price: e.target.value });
  }
  addItem(e) {
    e.preventDefault();
    e.target.querySelector('input[type=text]').value = "";
    this.setState({price: 1});
  }

  render() {
    return (
      <div className="my-1">
        <form onSubmit={this.addItem}>
          <div>
            <input type="text" onChange={this.updateProductName}></input>
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="10"
              onChange={this.updatePrice}
              value={this.state.price}
            ></input>
            <br></br>
            <span>{this.state.price} $</span>
          </div>
          <button
            className="btn btn-outline-primary"
            onClick={() =>
              this.props.onClick(this.state.productName, this.state.price)
            }
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Add;

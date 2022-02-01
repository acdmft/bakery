import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: "Add",
      items: [],
      productName: "",
      price: 1,
    };
    this.renderActiveTab = this.renderActiveTab.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.updateProductName = this.updateProductName.bind(this);
  }
  renderActiveTab() {
    switch (this.state.activeTab) {
      case "Add":
        return <Add></Add>;
        break;
      case "List":
        return <List></List>;
        break;
      case "Pay":
        return <Pay></Pay>;
        break;
    }
  }
  handleClick(e) {
    this.setState({ activeTab: e.target.innerText });
  }
  selectAdd() {
    this.setState({ activeTab: "Add" });
  }
  selectList() {
    this.setState({ activeTab: "List" });
  }
  selectPay() {
    this.setState({ activeTab: "Pay" });
  }
  updateProductName(e) {
    this.setState({ productName: e.target.value });
    console.log(this.state.productName)
  }
  updatePrice(e) {
    this.setState({ price: e.target.value });
    console.log(this.state.price)
  }
  addItem(name, price) {
    this.setState({
      items: this.state.items.push({ name: name, price: price }),
    });
    console.log(this.state.items);
  }
  render() {
    return (
      <div>
        <h1>Bakery</h1>
        <Button onClick={this.selectAdd} children={"Add"} isSelected={this.state.activeTab === 'Add'}></Button>
        <Button onClick={this.selectList} children={"List"} isSelected={this.state.activeTab === 'List'}></Button>
        <Button onClick={this.selectPay} children={"Pay"} isSelected={this.state.activeTab === 'Pay'}></Button>
        <h2>{this.state.activeTab}</h2>
        <form>
          <div>
            <input type="text" onChange={this.updateProductName}></input>
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="10"
              onChange={this.updatePrice}
            ></input>
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default App;

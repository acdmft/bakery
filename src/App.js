import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: "add",
      items: [],
    };
    this.renderActiveTab = this.renderActiveTab.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  renderActiveTab() {
    switch (this.state.activeTab) {
      case "Add":
        return (<Add></Add>);
        break;
      case "List":
        return (<List></List>);
        break;
      case "Pay":
        return (<Pay></Pay>);
        break;
    }
  };
  handleClick(e) {
    this.setState({activeTab: e.target.innerText});
    console.log(this.state.activeTab);
  };
  render() {
    return (
      <div>
        <h1>Bakery</h1>
        <Button onClick={this.handleClick} children={"Add"}></Button>
        <Button onClick={this.handleClick} children={"List"}></Button>
        <Button onClick={this.handleClick} children={"Pay"}></Button>
        <h2>{this.state.activeTab}</h2>

      </div>
    )
  }
}

export default App;

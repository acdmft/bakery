import React from "react";

class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<ul>
      {this.props.items.map((item)=>{
        return (
          <li key={item.name}>Product name: {item.name}<br></br>
          Product price: {item.price}</li>
        );
      })}
    </ul>);
  }
}
export default List;

import React from "react";

class Add extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mt-2">
        <form>
          <div>
            <input type="text" onChange={this.props.onChangeText}></input>
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="10"
              onChange={this.props.onChangeRange}
            ></input>
          </div>
        </form>
        <button
          className="btn btn-outline-primary"
          onClick={this.props.onClick}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Add;

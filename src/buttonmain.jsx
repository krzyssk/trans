import React, { Component } from "react";


class ButtonMain extends Component {
  render() {
    let item = ["d", "dd"];
    return (

      <Buttonh value={item} ></Buttonh>
    )
  }
}

class Buttonh extends React.Component {
  render() {
    return (
      <button className="button">
        {this.props.value}
      </button>
    )
  }
}

export default ButtonMain;







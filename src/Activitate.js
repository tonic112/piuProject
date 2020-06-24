import React, { Component } from "react";

class Activitate extends Component {
  render() {
    const stilActiv = {
      border: "1px solid grey",
      borderRadius: "5px",
      padding: "2px",
      marginTop: "10px",
      marginLeft: "50px",
      marginRight: "50px",
      backgroundColor: "#ebebe0"
    };

    const { mesaj } = this.props;
    return <div style={stilActiv}>{mesaj}</div>;
  }
}
export default Activitate;

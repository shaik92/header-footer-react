import React from "react";
class Checking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.check = this.check.bind(this);
  }
  check(s) {
    this.setState({ data: s.target.value });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.data} onChange={this.check} />
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}
export default Checking;

import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: false
    };
  }
  handleClick = ele => {
    ele.stopPropagation();
    this.setState({
      isFave: !this.state.isFave
    });
    console.log("handling Fave click!");
  };
  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div className={`film-row-fave ${this.state.isFave? 'remove_from_queue' : ''}`} onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    );
  }
}

import React from "react";

export default class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleText(e) {
    this.setState({
      text: e
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder="place some text here to post"
          value={this.state.value}
          onChange={e => this.handleText(e.target.value)}
        />
        <button onClick={() => this.props.handlePost(this.state.text)}>
          Post
        </button>
      </div>
    );
  }
}

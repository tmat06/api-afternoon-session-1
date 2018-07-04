import React from "react";

export default class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  render() {
    console.log("this.props", this.props);
    let { name, handlePost } = this.props;

    return (
      <div>
        <input
          placeholder="place some text here to post"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <button onClick={() => handlePost(this.state.text)}>Post</button>
        <p>{name}</p>
      </div>
    );
  }
}

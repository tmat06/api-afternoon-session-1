import React from "react";
import axios from "axios";

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChange(e) {
    this.setState({ text: e });
  }

  handleClick(id) {
    let text = this.state.text;
    axios
      .put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, { text })
      .then(results => {
        this.props.updatePost(results.data);
      });
  }

  render() {
    return (
      <div style={{ border: "solid 2px black" }}>
        <h3>This is a Post</h3>
        <p>This is the id: {this.props.id ? this.props.id : ""}</p>
        <p>This is the text: {this.props.text ? this.props.text : ""}</p>
        <input
          placeholder="Edit text here!"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button onClick={() => this.handleClick(this.props.id)}>Edit</button>
        <button onClick={() => this.handleDelete()}>Delete</button>
      </div>
    );
  }
}

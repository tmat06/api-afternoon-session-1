import React, { Component } from "react";
import axios from "axios";
import Post from "./components/Post";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.updatePost = this.updatePost.bind(this);
  }

  componentDidMount() {
    let promise = axios.get("https://practiceapi.devmountain.com/api/posts");
    promise.then(results => {
      this.setState({ posts: [...results.data] });
    });
  }

  updatePost(posts) {
    this.setState({ posts });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        <h1>AXIOS CALLS</h1>
        {this.state.posts.map((val, i) => {
          return (
            <Post
              id={val.id}
              text={val.text}
              key={val.id}
              updatePost={this.updatePost}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

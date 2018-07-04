import React, { Component } from "react";
import axios from "axios";
import Post from "./components/Post";
import Compose from "./components/Compose";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.updatePost = this.updatePost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);
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

  handleDelete(id) {
    axios
      .delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
      .then(posts => {
        this.setState({ posts: [...posts.data] });
      });
  }

  handlePost(text) {
    axios
      .post(`https://practiceapi.devmountain.com/api/posts`, { text })
      .then(results => {
        this.setState({
          posts: results.data
        });
      });
  }

  render() {
    // console.log(this.state.posts);
    return (
      <div className="App">
        <h1>AXIOS CALLS</h1>
        <Compose
          handlePost={this.handlePost}
          name="Timbo"
          age="26"
          hobby="spikeball"
          love="Cafe Rio"
        />
        {this.state.posts.map((val, i) => {
          return (
            <Post
              id={val.id}
              text={val.text}
              key={val.id}
              updatePost={this.updatePost}
              handleDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

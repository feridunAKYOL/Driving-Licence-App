import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import CommentList from "./ListComment";
import CommentForm from "./formComment";

//import CommentApp from "./components/comment/CommentApp";

class CommentApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false,
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("/api/comment/")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          comments: res,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments],
    });
  }
  render() {
    return (
      <div className="App container bg-light shadow">
        <header className="App-header">
          <h2 className="App-title">Comments</h2>
        </header>

        <div className="row">
          <div className="col-11  pt-3 ">
            <h6>Leave your comment or feedback here</h6>
            <CommentForm addComment={this.addComment} />

            <div className="col-20  pt-5 bg-white">
              <CommentList
                loading={this.state.loading}
                comments={this.state.comments}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentApp;

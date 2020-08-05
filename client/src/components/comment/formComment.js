import React, { Component } from "react";

export default class formComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      comment: {
        name: "",
        message: "",
        type: "",
      },
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value,
      },
    });
  };

  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    this.setState({ error: "", loading: true });

    let { comment } = this.state;
    fetch("/api/comment/", {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((response) => {
        return response;
      })
      .then((res) => {
        if (res.error) {
          this.setState({ loading: false, error: res.error });
        } else {
          comment.time = res.time;

          this.props.addComment(comment);

          // clear the message box
          this.setState({
            loading: false,
            comment: { ...comment, message: "" },
          });
        }
      })

      .catch((err) => {
        this.setState({
          error: "Something went wrong while submitting form.",
          loading: false,
        });
      });
  }
  isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.message !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              className="form-control"
              placeholder="Your Name"
              name="name"
              type="text"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.type}
              className="form-control"
              placeholder="Type"
              name="type"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="Your Comment"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-success">
              Comment &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

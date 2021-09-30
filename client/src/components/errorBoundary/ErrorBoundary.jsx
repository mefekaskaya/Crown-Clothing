import React, { Component } from "react";

import './ErrorBoundary.scss';

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log("error: ", error);
    console.log("info: ", info);
  }

  render() {
    if (this.state.hasErrored) return (
        <div className="image-overlay">
            <div className="image-container" />
            <h2 className="imageText">This Page is Lost in Space</h2>
        </div>
    )
    else return this.props.children;
  }
}

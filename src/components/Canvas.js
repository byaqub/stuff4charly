import React, { Component } from 'react';
import RootObject from './RootObject';

class Canvas extends Component {
  render() {
    return (
      <div id="canvas">
        <RootObject />
      </div>
    )
  }
}

export default Canvas
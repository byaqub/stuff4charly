import React, { Component } from 'react'
import Mit from './Mit'
import Ohne from './Ohne'

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <Ohne />
        </div>
        <div className="col">
          <Mit />
        </div>
      </div>
    )
  }
}

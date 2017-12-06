import React, { Component } from 'react';
import ChildObject from './ChildObject';

class RootObject extends Component {

  constructor(props) {
    super(props)

    this.state = {
      childs: [],
      key: 1
    }
  }

  renderChildObjects(num) {
    let childs = [];

    for (let i = 0; i < num; i++) {
      childs = [...childs, <ChildObject name="yo" key={this.state.key}/>];
      this.setState({ key: this.state.key + 1})
    }
    this.setState({ childs })
  }

  renderChilds() {
    const { childs } = this.state;
    return childs.map(child => child)
  }


  render() {
    return (
      <div>
        <div
          key="rootObject"
          id="rootObject"
          onClick={() => this.renderChildObjects(4)}
        >
        </div>
        {this.renderChilds()}
      </div>

    )
  }
}

export default RootObject
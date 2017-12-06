import React, { Component } from 'react'
import Paragraph from './Paragraph'

export default class Mit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: 'Change my Value with the button below',
      styled: ''
    }
  }

  changeText() {
    console.log('called');
    this.setState({
      text: this.state.text === 'Change my Value with the button below' ? 'My text was changed!' : 'Change my Value with the button below'
    })
  }

  switchStyles() {
    console.log('bla');
    this.setState({
      styled: this.state.styled === '' ? 'styled' : ''
    })
  }


  render() {
    const { text, styled } = this.state;
    return (
      <div className={styled}>
        <p>{text}</p>
        <button onClick={this.changeText.bind(this)}>Change!</button>
        <Paragraph heading="Cool story bro"/>
        <Paragraph heading="Interesting..."/>
        <Paragraph heading="What the f***"/>
        <Paragraph heading="Let's get started"/>
      </div>
    )
  }
}
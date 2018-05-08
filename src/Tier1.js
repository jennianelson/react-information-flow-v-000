import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleClick = () => {
    // debugger
    // let newColor = getRandomColor()
    this.setState({
      color: getRandomColor(),
      // childColor: getReducedColor(newColor)
    })
  };

  render() {
    return (
      <div onClick={this.handleClick}  className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={getReducedColor(this.state.color)} />
        <Tier2 color={this.state.color} />
      </div>
    )
  }
}

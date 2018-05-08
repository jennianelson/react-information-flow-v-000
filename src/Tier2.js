import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
    }
  }

  // handleClick = () => {
  //   this.setState ({
  //     color: getRandomColor(),
  //   })
  // }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={()=>{this.setState({color: getRandomColor()})}} className="tier2" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier3 color={this.state.childColor} />
        <Tier3 color={this.state.childColor} />
      </div>
    )
  }
}

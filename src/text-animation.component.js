import * as React from 'react'

import animations from './animations.css'

class TextAnimation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: this.props.text,
      duration: 1,
      offset: 10,
      size: 10,
    }
  }

  componentDidMount() {
    this.update()
  }

  update() {
    setTimeout(() => {
      let duration = Math.floor(Math.random() * 15) + 1
      let offset = Math.floor(Math.random() * (30 - duration * 2)) + 3
      let size = 10 + (15 - duration)
      this.setState({duration, offset, size}, this.update)
    }, this.state.duration * 1000)
  }

  render() {
    let style = {
      'right': this.state.offset,
      'font-size': `${this.state.size}px`,
      'animation-duration': `${this.state.duration}s`,
    }

    return (
      <div className={animations[this.props.animation]} style={style}>
        <span>{this.state.text}</span>
      </div>
    )
  }
}

TextAnimation.defaultProps = {
  text: 'abcdefghijklmnopqrstuvwxyz',
  animation: 'floatUp',
}

export default TextAnimation

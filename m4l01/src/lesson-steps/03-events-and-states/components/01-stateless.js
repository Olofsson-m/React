import React, { Component } from 'react'

export function TextCounterFunc01(props) {
  const text = props.text || 'Count me as I type';

  return (
    <>
      <h1>TextCounterFunc01</h1>
      <div>
      <textarea defaultValue={text} />
      <h3>{text.length}</h3>
      <p>{text}</p>
      </div>
    </>
  )
}


export class TextCounterClass01 extends Component {
  render() {
    const text = this.props.text;

    return (
    <>
      <h1>TextCounterClass01</h1>
      <div>
      <textarea defaultValue={text} />
      <h3>{text.length}</h3>
      <p>{text}</p>
      </div>
    </>
    )
  }
}

TextCounterClass01.defaultProps = {
    text: 'Count me as I type',
  };
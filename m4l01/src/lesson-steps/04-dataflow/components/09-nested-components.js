import React from 'react'
import { uniqueId, seedGenerator } from '../../../services/seido-helpers';

export function NestedComponent(props) {
  return (
    <>
    <div>hello world says: {props.greeting}</div>
    </>
  )
}


export function WrapperComponent(props) {

  //use React.Children.map to add props to children of a component
  //use React.cloneElement to clone the child and add props to it
  const nestedChildren = React.Children.map(props.children, child =>
    React.cloneElement(child, { greeting: props.greeting }));

  return (
    <>
    <h1>Header</h1>

    {nestedChildren}

    <h1>Footer</h1>

    </>
  )
}




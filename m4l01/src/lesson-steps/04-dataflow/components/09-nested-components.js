import React from "react";
import { uniqueId, seedGenerator } from "../../../services/seido-helpers";

export function NestedComponent(props) {
  const clickHandler = (e) => {
    console.log(`NestedComponent clicked: ${e.target}`);

    if (props.onClick) props.onClick(e);
  };

  return (
    <>
      <div>hello world says: {props.greeting}</div>
    </>
  );
}

export function WrapperComponent(props) {
  const clickHandler = (e) => {
    console.log(`WrapperComponent clicked: ${e.target}`);
  };
  //use React.Children.map to add props to children of a component
  //use React.cloneElement to clone the child and add props to it
  const nestedChildren = React.Children.map(props.children, (child) =>
    React.cloneElement(child, {
      greeting: props.greeting,
      onClick: clickHandler,
    }),
  );

  return (
    <>
      <h1>Header</h1>

      {nestedChildren}

      <h1>Footer</h1>
    </>
  );
}

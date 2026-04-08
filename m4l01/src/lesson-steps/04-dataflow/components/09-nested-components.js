import React from "react";
import { uniqueId, seedGenerator } from "../../../services/seido-helpers";

export function NestedComponent(props) {
  const clickHandler = (e) => {
    console.log("Hello from NestedComponent");

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <>
      <div onClick={clickHandler}>hello world says: {props.greeting}</div>
    </>
  );
}

export function WrapperComponent(props) {
  const clickHandler = (e) => {
    console.log("Hello from WrapperComponent");
  };

  //use React.Children.map to add props to children of a component
  //use React.cloneElement to clone the child and add props to it
  const nestedChildren = React.Children.map(props.children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, {}) : child,
  );

  return (
    <>
      <h1>Header</h1>

      {nestedChildren}

      <h1>Footer</h1>
    </>
  );
}

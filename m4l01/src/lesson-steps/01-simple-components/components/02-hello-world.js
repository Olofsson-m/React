import React from "react";
import { uniqueId, seedGenerator } from "../../../services/seido-helpers";

//Making Hello World into a component
function HelloWorld02() {
  const Greeting = "Good morning";
  const address = { city: "Oslo", country: "Norway" };
  const paragraph = <p>My special paragraph</p>;

  const _seeder = new seedGenerator();
  const q = _seeder.quote;

  return (
    <div>
      <h1>{_seeder.latinSentence} A function component</h1>
      <h1 id="my-heading">
        text before span tag:&nbsp;
        <span>
          hello&nbsp;<em>Wonderful&nbsp;</em>World
        </span>
        &nbsp;:text after span tag
      </h1>
      <p>
        I live in {address.city} which is in {address.country}
      </p>
      {paragraph}
      <p>{q.quote}</p>
    </div>

    /*
    React.createElement(
    'h1',
     {id: 'my-heading'}, 'text before span tag: ',
     React.createElement(
       'span',
       null,
       'Hello ',
       React.createElement('em', null, 'Wonderful'),
       ' World'
     ),
     ' :text after span tag',
   )
   */
  );
}

export default HelloWorld02;

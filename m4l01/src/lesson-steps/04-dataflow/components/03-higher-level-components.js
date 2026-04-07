import React, { Component } from 'react'
import { GreetingsFunc01, GreetingsClass01 } from './01-greetings';
import { QuoteListClass02, QuoteListFunc02 } from './02-quote-lists';

export function GreetQuoteFunc03() {
    return (
    <>
    <GreetingsFunc01/>
    <QuoteListFunc02/>
    </>
  )
}

export class GreetQuoteClass03 extends Component {
  
  render() {
    return (
    <>
    <GreetingsClass01/>
    <QuoteListClass02/>
    </>
    ) }
}

/* Exercise:
  In your own project break out the card rendering part of Cards into a separate component. 
  Then use that component in Cards to render the cards. 
  Cards is now a higher order component that uses the card component to render the cards.
*/


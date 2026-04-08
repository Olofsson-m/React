import '../css/flexbox_5.css'

import { GreetingsFunc01, GreetingsClass01 } from '../lesson-steps/04-dataflow/components/01-greetings';
import { GreetingsFunc01a, GreetingsClass01a } from '../lesson-steps/04-dataflow/components/01a-greetings-event';
import { QuoteListFunc02, QuoteListClass02  } from '../lesson-steps/04-dataflow/components/02-quote-lists';
import { QuoteListFunc02a  } from '../lesson-steps/04-dataflow/components/02a-quote-lists-event';
import { GreetQuoteFunc03, GreetQuoteClass03 } from '../lesson-steps/04-dataflow/components/03-higher-level-components';
import { GreetQuoteFunc04, GreetQuoteClass04 } from '../lesson-steps/04-dataflow/components/04-higher-level-props';
import { GreetQuoteFunc05, GreetQuoteClass05 } from '../lesson-steps/04-dataflow/components/05-event-lifting';
import { GreetQuoteFunc06, GreetQuoteClass06 } from '../lesson-steps/04-dataflow/components/06-state-lifting';
import { GreetQuoteFunc07, GreetQuoteClass07 } from '../lesson-steps/04-dataflow/components/07-events-change-state';
import { GreetQuoteFunc08, GreetQuoteClass08 } from '../lesson-steps/04-dataflow/components/08-events-change-state-exAnsw';
import { WrapperComponent, NestedComponent } from '../lesson-steps/04-dataflow/components/09-nested-components';

//Using simple components
export function App04_01() {
  return (
    <>
      <GreetingsFunc01 timeOfDay="hello"/>
      <GreetingsFunc01a name="Martin"/>
    </>
    );}

export function App04_02() {
  return (
    <>
      <QuoteListFunc02a title="God Morning" quotes={[{quote: "Hello World", author: "Martin"}, {quote: "Goodbye", author: "Martin"}]}/>
    </>
    );}
    
//Using the higher level components
export function App04_03() {
  return (
    <>
    <GreetQuoteFunc03/>
    <GreetQuoteFunc03 name="Gustav" quotes={[{quote: "Hello World", author: "Martin"}, {quote: "Goodbye", author: "Martin"}]}/>
    <GreetQuoteFunc03 name="Elin" />
    </>
    );}

//Using the higher level components with properties
export function App04_04() {
  return (
  <>
  <GreetQuoteFunc04/>
  </>
    );}


//Using the higher level components with EVENT lifting
//Event lifting is about bubbling events upwards in the component hierachy by the usage of
//eventhandlers and properties.
//Child component after handling the events calls a parents eventhandler, if any, 
//that is passed to the child as a property
export function App04_05() {
  return (
    <>
    <GreetQuoteFunc05/>
    </>
    );}

//Using the higher level components with STATE lifting
//STATE lifting is about keeping the states as high in the component hierachy as possible by the usage of
//properties. States are kept and updated in a parent and passed to the child as properties.
//When a state is updated all depending children are updated by React.
export function App04_06() {
  return (
    <>
    <GreetQuoteFunc06 timeOfDay="afternoon"/>
    </>
    );}

//Dataflow. Events upwards will change the states which will update the children through props
//Exercise
export function App04_07() {
  return (
    <>
    <GreetQuoteFunc07/>
    </>
    );}

//Exercise answer
export function App04_08() {
  return (
    <>
    <GreetQuoteFunc08/>
    </>
    );}


export function App04_09() {

  return (
    <>
    <WrapperComponent greeting="Hello from App04_09">
        <NestedComponent/>
        <NestedComponent/>
    </WrapperComponent>
    </>
  );}
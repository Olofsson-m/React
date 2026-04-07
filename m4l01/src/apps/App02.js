import '../css/flexbox_5.css'

import { PropsClass01, PropsFunc01, Greetings  } from '../lesson-steps/02-properties/components/01-props';
import { PropsFunc02, PropsClass02a, PropsClass02b} from '../lesson-steps/02-properties/components/02-props-default';
import { ColorBoxes01, ColorBoxes02, ColorBoxes03 } from '../lesson-steps/02-properties/components/03a-colors-exAnsw';
import { ColorBoxes04 } from '../lesson-steps/02-properties/components/04-props-type';

//Using Props
export function App02_01() {
  return (
    <>
    {//In a function component use props as as parameter
    }
    <PropsFunc01 name="Hemronie" friend="Sara"/>
    </>
    );}

//Undefined props
export function App02_02() {
  return (
    <>
    <PropsFunc01 name="Hemronie" friend="Sara"/>
    <PropsClass01/>
    </>
    );}

//Default props
export function App02_03() {
  return (
    <>
    <PropsFunc02 name="Martin"/>
    <PropsClass02a friend="Idefix"/>
    <PropsClass02b name="Idefix"/>
    </>
    );}


//Color exercise props and default props
export function App02_04() {
  return (
    <>
    <ColorBoxes01/>
    <ColorBoxes02 color="red" />
    <ColorBoxes03 color={["orange", "green", "blue"]}  />
    </>
    );}

//PropTypes
export function App02_05() {
  return (
    <>
    <ColorBoxes04 />
    <ColorBoxes04 number="30"/>
    <ColorBoxes04 color={["orange", "green", "blue"]} number={15} title="Hello wonderful world" />
    <ColorBoxes04 number={30} title="Hello wonderful world" />
    </>
    );}

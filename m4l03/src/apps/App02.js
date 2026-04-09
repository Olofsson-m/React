import {UseFormInPage01} from '../lesson-steps/02-form-inpage-modal/components/01-use-form-in-page';
import {UseBootstrapModal02} from '../lesson-steps/02-form-inpage-modal/components/02-bootstrap-modal';
import {UseFormInModal03a} from '../lesson-steps/02-form-inpage-modal/components/03a-use-form-in-modal';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App02_01() {
  return (
    <>
      <UseFormInPage01/>
    </>
  );}

export function App02_02() {
  return (
    <>
      <UseBootstrapModal02/>
    </>
  );}
  
export function App02_03() {
  return (
    <>
      <UseFormInModal03a/>
    </>
  );}
  

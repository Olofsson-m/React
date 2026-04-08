import React, {useState, useEffect} from 'react'

import '../../../css/grid.css';

import { seedGenerator } from '../../../services/seido-helpers';
import Person from '../../../models/person';

const tableHeaders = ["first name", "last name", "city", "country"];
const _seeder = new seedGenerator();

//Show how session storage can be used to not generate new randoms at every refresh
// if (!sessionStorage.persons)
//     sessionStorage.persons = JSON.stringify(new Person().seedMany(_seeder,1000));

const _persons = new Person().seedMany(_seeder,1000);// JSON.parse(sessionStorage.persons);


export function UsingTableTemplate06(props) {

  const _pSize = props.pageSize || 5;

  const [pageSize, setPageSize] = useState(_pSize);
  const [currentPageNr, setCurrentPageNr] = useState(0);
  const [maxPageNr, setMaxPageNr] = useState(Math.ceil(_persons.length/_pSize));
  const [dataPage, setDataPage] = useState([]);

  useEffect(
    () => {

      const d = [..._persons.slice(currentPageNr * pageSize, currentPageNr * pageSize + pageSize)];
      setDataPage(d)
    
    }, [pageSize, currentPageNr, maxPageNr]);


  const onClickHeader = (e) => 
    {
      console.log(`onClickHeader`);
    }

  const onClickRow = (e) => 
    {
      console.log(`onClickRow rowitemid: ${e.rowid}`);
    }

  const onClickPrev = (e) => 
    {
      console.log(`onClickPrev`);

      if (currentPageNr > 0) {
         setCurrentPageNr(currentPageNr - 1);
      }
    }

  const onClickNext = (e) => 
    {
      console.log(`onClickNext`);

      if (currentPageNr < maxPageNr-1) {
        setCurrentPageNr(currentPageNr + 1);
      }
    }

    return (
    <>
      <h1>Using TableTemplate</h1>
      <h2>Adding States</h2>
      <TableTemplate06 headers={tableHeaders} initialData={dataPage} 
            onClickHeader={onClickHeader} onClickRow={onClickRow}
            onClickPrev={onClickPrev} onClickNext={onClickNext}/>
    </>
  );}

export function TableTemplate06(props) {
  const onClickHeader = (e) => 
    {
      console.log("onClickHeader executed");
      if (props?.onClickHeader) props?.onClickHeader(e);
    }
  
    const onClickRow = (e) => 
      {
        console.log("onClickRow executed");

        //pass on the id in the event lifting
        e.rowid = e.currentTarget.dataset.rowid;
        if (props?.onClickHeader) props?.onClickRow(e);
      }

    const onClickPrev = (e) => 
      {
        console.log(`onClickPrev`);
        if (props?.onClickPrev) props?.onClickPrev(e);
      }
  
    const onClickNext = (e) => 
      {
        console.log(`onClickNext`);
        if (props?.onClickNext) props?.onClickNext(e);
      }
      
      
    return (
    <>
      <h1>Adding pagination</h1>

      <div className="row mb-2 text-center" onClick={onClickHeader}>
      { 
        props?.headers?.map((item, idx) => 
            <div key={idx} className="col-md-2 themed-grid-head-col">{item}</div>
          )
      }
      </div>
      {
          props?.initialData?.map((row, idx) => 
            <div key={row.id} data-rowid={row.id} className="row mb-2 text-center" onClick={onClickRow}>
              <div className="col-md-2 themed-grid-col">{row?.firstName}</div>
              <div className="col-md-2 themed-grid-col">{row?.lastName}</div>
              <div className="col-md-2 themed-grid-col">{row?.address?.city}</div>
              <div className="col-md-2 themed-grid-col">{row?.address?.country}</div>
            </div> )
      }

      <nav aria-label="List pagination">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" aria-label="Previous" onClick={onClickPrev}>
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" aria-label="Next" onClick={onClickNext}>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </>)}

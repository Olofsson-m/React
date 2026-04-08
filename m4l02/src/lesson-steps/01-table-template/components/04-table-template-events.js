import React from 'react'

export function TableTemplate04(props) {
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
        if (props?.onClickRow) props?.onClickRow(e);
      }
      
  return (
    <>
      <h1>Table template using bootstrap 02</h1>
      <h2>Adding click events</h2>

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
    </>)}

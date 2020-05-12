import React from 'react';

const GroupButton = props => {
  let list= props.list;
  return (
    <div className="jumbotron">
    <div class="container btn-group" role="group" aria-label="Basic example">
      {list.map( (button,i) => <button key={i} className="btn btn-dark" onClick={e=>props.handleButton(e)}>Tab{i+1}</button>)}
    </div>
    <div className="container d-flex">
    {list.map( (text,i) => 
      <textarea key={i} 
        cols="100" row={6} hidden={text.status} 
        value={text.details} 
        onChange={e=>text.change(e.target.value)}></textarea>
    )}
    </div>
    </div>
  )
}
export default GroupButton;
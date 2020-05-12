import React from 'react';

const GroupButton = props => {
  const list=props.list;
  return (
    <div className="jumbotron">
    <div className="container btn-group" role="group" aria-label="Basic example">
      {list.map( (button,i) => 
        <button 
          key={i} 
          className="btn btn-dark" 
          onClick={e=>props.handleButton(i)}
        >
          Tab{i+1}
        </button>
      )}
      <button className="btn btn-success" onClick={e=>props.addTabClicked(e)}>+</button>
    </div>
    <div className="container d-flex flex-column">
    {list.map( (text,i) => 
    <>
      <textarea key={i} 
        cols="100" row={6} hidden={text.status} 
        value={text.details} 
        onChange={e=>props.typingText(e.target.value,i)}></textarea>
      <p className="color-" hidden={text.status}> Editing Tab{i+1}</p>
    </>
    )}
    </div>
    </div>
  )
}
export default GroupButton;
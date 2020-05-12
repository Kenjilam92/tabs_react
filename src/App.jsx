import React, {useState} from 'react';
import GroupButton from './Components/groupButton';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [removeNumber,setRemovenumber]=useState(null);
  const [tabslist,setTablist]=useState([
    {status: false, details: ""},
    {status: true, details: ""},
    {status: true, details: ""}
  ])
  const addTab = () =>{
    const newTab = {status: true, details: ""};
    setTablist([...tabslist,newTab]);
  }
  const updateText = (v,i) => {
    const temp = [...tabslist]
    temp[i].details=v;
    setTablist(temp)
  }

  const switchTextbox = i => {
    const temp = [...tabslist]
    for (let j=0;j<temp.length;j++){
      temp[j].status=true;
    } 
      temp[i].status=false;
    setTablist(temp)
  }
  const remove = (e) =>{
    e.preventDefault()
    if (removeNumber >=0){
      const temp = [...tabslist]
      const tempNum= removeNumber-1;
      temp.splice(tempNum,1);
      setTablist(temp)
    }
    setRemovenumber(null);
  }

  return (
  <div className="container">
    <GroupButton list={tabslist} handleButton={switchTextbox} addTabClicked={addTab} typingText={updateText}/>
    <form className="contanner jumbotron d-flex flex-column" onSubmit={e=>remove(e)}> 
      <label htmlFor="remove">Which tab do you want to remove?</label>
      <input type="number" value={removeNumber} onChange={e=>setRemovenumber(e.target.value)}/>
      <button className="btn btn-danger" type="submit" >Remove</button>
    </form>
  </div>
  );
}

export default App;
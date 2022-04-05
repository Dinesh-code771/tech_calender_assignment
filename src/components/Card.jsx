import React, { useState } from 'react';
import Calendar from 'react-calendar';
import data from '../data';
import Table from './Table';
import 'react-calendar/dist/Calendar.css';
 function Card() {
 const [inputForm,setInputform] = useState(false);
  const [value, onChange] = useState(new Date());
  const[bool , setBool] = useState(false);
  const [inputVal,setInputval] = useState({
      event:"",
      time:"",
      date:"",
      day:"",
      month:"",
      year:""
  })
  const handleClick = (e)=>{

        let array = String(e).split(" ");
        console.log(array)
        let obj = {

        }
        obj.date = array[2]
        obj.month = array[1];
        obj.day = array[0];
        obj.year = array[3];
        setInputval({
          ...inputVal,
          ...obj
        })
        setInputform(!inputForm);
        
  }
  const handleOnchange = (e)=>{
     let obj = {
     }
    obj[e.target.name] = e.target.value;
    setInputval({
        ...inputVal,
        ...obj,
    })
 
  }
  const handleSubmit = ()=>{
    data.push(inputVal)
    setBool(!bool)

   }
  return (
    <div>
      <Calendar onClickDay={(e)=>handleClick(e)} onChange={onChange} value={value} />
      {
          inputForm && <div>
              <input type="text" name="event" onChange={(e)=>{handleOnchange(e)}} placeholder='enter the event'></input>
              <input type="text" name="time" onChange={(e)=>{handleOnchange(e)}} placeholder ="enter the time"></input>
              <button onClick={()=>handleSubmit()}>Submit</button>
          </div>
          
      }
    <Table data={data}/>
    </div>
  );
}
export default Card;
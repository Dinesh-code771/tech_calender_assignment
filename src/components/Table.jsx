import {React,useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Table = ({data}) => {
    const [value,setvalue] = useState(data);
    useEffect(()=>{

         setvalue(data);
    })
  console.log(data);
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Event</th>
            <th scope="col">Date</th>
            <th scope="col">Day</th>
            <th scope="col">year</th>
            <th scope="col">Time</th>
            <th scope="col">Month</th>
          </tr>
        </thead>
        <tbody>
          {value.map((ele,index) => {
            return (
            
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{ele.event}</td>
                  <td>{ele.date}</td>
                  <td>{ele.day}</td>
                  <td>{ele.year}</td>
                  <td>{ele.time}</td>
                  <td>{ele.month}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

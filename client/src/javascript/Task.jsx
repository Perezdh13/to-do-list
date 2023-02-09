import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
import { Table } from "reactstrap"
import edit from "../img/edit.png"


function Task() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || []

  const [data, setData] = useState([...tasks])


  let navigate = useNavigate()
  useEffect(() => {
    window.onload = function () {
      navigate("/")
    };
  }, [navigate]);

  const handleUpdateDescription = (index, newDescription) => {
    const updatedData = [...data];
    updatedData[index].Description = newDescription;
    setData(updatedData);
    localStorage.setItem("tasks", JSON.stringify(updatedData));
  };

  return (
    <div className='task-page'>
      <h1>List of Task</h1>
      <div className='task-page-box'>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Day</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Day}</td>
                <td>
                  <input
                  
                    value={item.Description}
                    onChange={(event) => handleUpdateDescription(index, event.target.value)}
                  />
                </td>
                <td>
                  <img src={edit} alt='edit' onClick={() => handleUpdateDescription(index, item.Description)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )

}

export default Task

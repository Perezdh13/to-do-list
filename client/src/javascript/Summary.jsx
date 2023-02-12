import React, {} from 'react'
import avatar from '../img/avatar.png'
import addTask from '../img/newAddTask.png'
import calendar from '../img/newCalendar.png'
import deleteTask from '../img/newDeleteTask.png'
import task from '../img/newList.png'
import { Link } from 'react-router-dom';

function Summary() {

 

  return (
    <div className='main-summary-page'>
      <div className='summary-page-bar-top'>
        <h1>Reminder</h1>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='summary-page'>
        <div className='summary-page-calendar'>
          <Link to='/calendar'>
            <img className='' src={calendar} alt='calendar' />
          </Link>
        </div>
        <div className='summary-page-task'>
          <Link to='/task'>
            <img className='' src={task} alt='task' />
          </Link>
        </div>
        <div className='summary-page-addTask'>
          <Link to='/addTask'>
            <img className='' src={addTask} alt='add task' />
          </Link>
        </div>
        <div className='summary-page-deleteTask'>
          <Link to='/deleteTask'>
            <img className='' src={deleteTask} alt='delete task' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Summary
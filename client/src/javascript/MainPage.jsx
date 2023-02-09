import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../img/avatar.png'
import addTask from '../img/newAddTask.png'
import calendar from '../img/newCalendar.png'
import deleteTask from '../img/newDeleteTask.png'
import task from '../img/newList.png'

function MainPage() {
  return (
    <div className='mainPage'>
        <div className='mainPage-bar-top'>
            <h1>Reminder</h1>
        </div>
        <div className='mainPage-bar-botton'>
            <Link to='/'>
            <img className='mainPage-bar-botton-avatar' src={avatar} alt='avatar'/>
            </Link>
            <Link to='/calendar'>            
            <img className='mainPage-bar-botton-calendar' src={calendar} alt='calendar'/>
            </Link>
            <Link to='/addTask'>
            <img className='mainPage-bar-botton-addTask' src={addTask} alt='add task'/>
            </Link>
            <Link to='/deleteTask'>         
            <img className='mainPage-bar-botton-deleteTask' src={deleteTask} alt='delete task'/>
            </Link>   
            <Link to='/task'>
            <img className='mainPage-bar-botton-task' src={task} alt='task'/>
            </Link>
        </div>
        
    </div>
  )
}

export default MainPage
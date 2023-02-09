import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import febrero from '../img/febrero.png'
function Calenddar() {
  let navigate = useNavigate()
    useEffect(() => {
        window.onload = function () {
            navigate("/")
        };
    }, [navigate]);


  return (
    <div className='calendar-page'>
      <img src={febrero} alt='febrero'/>
      
    </div>
  )
}

export default Calenddar
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Calenddar() {
  const CLIENT_ID = "641123109388-sqco5lk6ge8a0375i2q4h7a64e8dguc4.apps.googleusercontent.com";
      const API_KEY = '<YOUR_API_KEY>'

  let api = `https://641123109388-sqco5lk6ge8a0375i2q4h7a64e8dguc4.apps.googleusercontent.com`;
  async function getData() {
    let response = await fetch(api)
    let data = await response.json()
  }
  console.log(api);

  let navigate = useNavigate()
    useEffect(() => {
        window.onload = function () {
            navigate("/")
        };
    }, [navigate]);

  return (
    <div>Calenddar</div>
  )
}

export default Calenddar
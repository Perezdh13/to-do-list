import MainPage from './MainPage';
import Calenddar from './Calenddar';
import Task from './Task';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';
import Summary from './Summary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import fondo from '../img/fondo.jpg'

import '../css/App.css';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <><Summary /></>
    },
    {
      path: "/calendar",
      element: <><MainPage /><Calenddar /></>
    },
    {
      path: "/task",
      element: <><MainPage /><Task /></>
    },
    {
      path: "/addTask",
      element: <><MainPage /><AddTask /></>
    },
    {
      path: "/deleteTask",
      element: <><MainPage /><DeleteTask /></>
    }
  ])



  return (
    <div className="App">
      <img className='fondo-app' alt='fondo' src={fondo}/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

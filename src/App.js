import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import User from './Pages/User/User';
import Admin from './Pages/Admin/Admin';
import Home from './Pages/User/Home/Home';
import Task from './Pages/User/Task/Task';
import Rank from './Pages/User/Rank/Rank';
import About from './Pages/User/About/About';
import Sign from './Pages/User/Sign/Sign';
import SingleTask from './Pages/User/SingleTask/SingleTask';
import Profile from './Pages/User/Profile/Profile';

const router = createBrowserRouter([
  {
    path:'/',
    element: <User/>,
    children: [
      {path:'/', element: <Home/>},
      {path:'/task', element: <Task/>},
      {path:'/rank', element: <Rank/>},
      {path:'/about', element: <About/>},
      {path:'/sign', element: <Sign/>},
      {path:'/detail', element: <SingleTask/>},
      {path: '/profile', element: <Profile/>}
    ]
  },
  {
    path: '/admin',
    element: <Admin/>
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

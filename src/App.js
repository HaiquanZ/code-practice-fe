import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import User from './Pages/User/User';
import Admin from './Pages/Admin/Admin';

const router = createBrowserRouter([
  {
    path:'/',
    element: <User/>
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

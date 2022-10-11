import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import About from './components/About/About';
import Order from './components/Order/Order';
import Home from './components/Home/Home';
import Grandpa from './components/Grandpa/Grandpa';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>
        },
        {
          path: '/about',
          element: <About></About>

        },
        {
          path: '/order',
          element: <Order></Order>
        }
      ]
    }
  ])
  

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

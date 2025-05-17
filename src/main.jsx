import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Mainlayout from './Layout/Mainlayout.jsx';
import Home from './Component/Home.jsx';
import Addcoffe from './Component/Addcoffe.jsx';
import CoffeeDetls from './Component/CoffeeDetls.jsx';
import Updatecoppy from './Component/Updatecoppy.jsx';
import NoteFound from './Component/NoteFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffe-house-server-beige.vercel.app/coffees'),
        element: <Home />,
      },
      {

        path: 'addcoffee',
        element: <Addcoffe />

      },
      {
        path: 'coffeedetls/:id',
        element: <CoffeeDetls />
      },
      {
        path:'updatecoffee/:id',
        loader:({params})=> fetch(`https://coffe-house-server-beige.vercel.app/coffees/${params.id}`),
        element:<Updatecoppy/>
      },
      {
        path:"*",
        element:<NoteFound/>
      }

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

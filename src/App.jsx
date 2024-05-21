import './App.css';
import React from 'react';
import { First_page } from './pages/first_page';
import { Second_page } from './pages/second_page';
import { Third_page } from './pages/third_page';
import { Fourth_page } from './pages/fourth_page';
import { Last_page } from './pages/last_page';
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <First_page/>,
      },
      {
        path: "/second_page",
        element: <Second_page />,
      },
      {
        path: "/third_page",
        element: <Third_page />,
      },
      {
        path: "/fourth_page",
        element: <Fourth_page/>,
      },
      {
        path: "/last_page",
        element: <Last_page />,
      },
    ],
  )
  return (
    <RouterProvider router={router}/>
  )
};

export default App;




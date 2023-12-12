import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import ContactMe from './pages/ContactMe.jsx'
import ResumeLink from './pages/ResumeLink.jsx'
import AboutMe from './pages/AboutMe.jsx'
import EduMentor360 from './Details/EduMentor360.jsx'
import EventsManagement from './Details/EventsManagement.jsx'
import FoodUnity from './Details/FoodUnity.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contactMe",
        element: <ContactMe />,
      },
      {
        path: "/resume",
        element: <ResumeLink />,
      },
      {
        path: "/skills",
        element: <Skills/>,
      },
      {
        path: "/aboutMe",
        element: <AboutMe />,
      },
      {
        path:"/eduMentor360",
        element:<EduMentor360 />,
      },
      {
        path:"/eventManagement",
        element:<EventsManagement />,
      },
      {
        path:"/foodUnity",
        element:<FoodUnity />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      }
    

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)

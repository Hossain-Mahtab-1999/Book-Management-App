
import React from 'react'

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Book from './pages/Book';
import AddBook from './pages/AddBook';
import About from './pages/About';
import Contact from './pages/Contact';
import UpdateBook from './pages/UpdateBook';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Home from './pages/Home';



const App = () => {

  const { currentUser } = useContext(AuthContext)





  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )

  }

  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return children
    } else {
      return <Navigate to='/login' />
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      
      children: [{
        path: "/",
        element: (
          <div>
            <Home />
          </div>
        ),
      },

      {
        path: "/book",
        element: (
          <div>
            <Book />
          </div>
        ),

      },
      {
        path: "/profile/:id",
        element:
          <div>
            <Profile />
          </div>

      },

      {
        path: "/addbook",
        element:
          <div>
            <AddBook />
          </div>,

      },
      {
        path: "/about",
        element:
          <div>
            <About />
          </div>,

      },
      {
        path: "/contact",
        element:
          <div>
            <Contact />
          </div>,

      },

      {
        path: "/update/:id",
        element:
          <div>
            < UpdateBook />
          </div>,

      },

      ]

    },


    {
      path: "/login",
      element: (
        <div>
          <Login />
        </div>
      ),
    },
    {
      path: "/register",
      element: (
        <div>
          <Register />
        </div>
      ),
    },


  ]);

  return (

    <div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>


  )
}

export default App
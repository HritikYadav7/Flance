import React from "react"
import "./App.scss"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./pages/home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Message from "./pages/message/message"
import Messages from "./pages/messages/messages"
import Gigs from "./pages/Gigs/Gigs"
import Gig from "./pages/Gig/Gig"
import Orders from "./pages/orders/orders"
import MyGigs from "./pages/MyGigs/myGigs"
import Add from "./pages/Add/Add"


function App() {
    const Layout = () => {
      return (
        <div className="app">
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
      )
    }
      const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout/>,
          children: [
            {
              path: "/",
              element: <Home/>
            },
            {
              path: "/gigs",
              element: <Gigs/>
            },
            {
              path: "/gig/:id",
              element: <Gig/>
            },
            {
              path: "/mygigs",
              element: <MyGigs/>
            },
            {
              path: "/add",
              element: <Add/>
            },
            {
              path: "/messages",
              element: <Messages/>
            },
            {
              path: "/message/:id",
              element: <Message/>
            },
            {
              path: "/orders",
              element: <Orders/>
            },
          ]
        },
      ]);
    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    )
  }

export default App;
import React from "react"
import "./App.scss"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home"
import Login from "./pages/login/login"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Message from "./pages/message/message"
import Messages from "./pages/messages/messages"
import Gigs from "./pages/gigs/Gigs"
import Gig from "./pages/Gig/Gig"
import Register from "./pages/register/register"
import Orders from "./pages/orders/orders"
import MyGigs from "./pages/MyGigs/myGigs"
import Add from "./pages/Add/Add"
import Pay from "./pages/pay/pay"
import Success from "./pages/success/Success"

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/pay/:id",
          element: <Pay />
        },
        {
          path: "/success",
          element: <Success />
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
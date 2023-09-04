import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import { UserContext } from "./service/UserContext";
import { bookingMockData, userMockData } from './mockData';

function App() {


  const router = createBrowserRouter([ // Alla routes
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/booking",
      element: <BookingPage/>,
    },
    {
      path: "/admin",
      element: <AdminPage/>,
    },
  ]);


  // Kolla om det finns data sparad i localStorage, om inte så spara mockData
  // Flytta ut detta till en annan fil sen?
  useEffect(() => { 
    let bookingData = localStorage.getItem("bookingData");
    let userData = localStorage.getItem("userData");

    if (bookingData !== null && userData !== null) {

      console.log(JSON.parse(userData))
      console.log(JSON.parse(bookingData))

      
    } else {
      console.log("missing localStorage data, setting mock data")

      localStorage.setItem("userData", JSON.stringify(userMockData))
      localStorage.setItem("bookingData", JSON.stringify(bookingMockData))
    }

    // setUser("asd")

  }, [])
  
  
  
  const [user, setUser] = useState("")
  
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}> 
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;

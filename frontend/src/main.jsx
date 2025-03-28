import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import Whyus from './components/whyus/Whyus.jsx'
import LoginNgo from './login/LoginNgo.jsx'
import SignupNgo from './signup/SignupNgo.jsx'
import SignupRestaurant from './signup/SignupRestaurant.jsx'
import NGODashBoard from './pages/NGODashBoard.jsx'
import RestaurantDashboard from './pages/RestaurantDashboard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path = "" element = {<Home/>}/>
      <Route path = "contact" element = {<Contact/>}/>
      <Route path = "whyus" element = {<Whyus/>}/>
      {/* <Route path = "login" element = {<LoginNgo/>}/> */}
      <Route path="loginngo" element={<LoginNgo/>} />
      <Route path = "SignupNgo" element={<SignupNgo/>}/>
      <Route path="SignupRestaurant" element={<SignupRestaurant/>}/>
      <Route path = "NGODashBoard" element={<NGODashBoard/>}/>
      <Route path = "RestaurantDashboard" element={<RestaurantDashboard/>}/>

    </Route>
  ))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import AboutUsPage from './Components/ContactUsPage.jsx'
import ContactUsPage from './Components/ContactUsPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>
    </>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

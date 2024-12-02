import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import ContactUsPage from './Components/ContactUsPage.jsx'
import ServiceDetailsPage from './Components/ServiceDetailsPage.jsx'
import BlogsPage from './Components/BlogsPage.jsx'
import AdminLogin from './Components/Admin/AdminLogin.jsx'
import AdminDashboard from './Components/Admin/AdminDashboard.jsx'
import { AuthProvider } from './Components/AuthContext.jsx'
import Blogs from './Components/Admin/Blogs.jsx'
import Admin from './Admin.jsx'
import CreateBlog from './Components/Admin/CreateBlog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/service-details" element={<ServiceDetailsPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<Admin />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/blogs" element={<Blogs />} />
          <Route path="/admin-dashboard/createblog" element={<CreateBlog />} />
        </Route>
      </Route>
    </>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

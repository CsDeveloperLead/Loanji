import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home.jsx";
import ContactUsPage from "./Components/ContactUsPage.jsx";
import ServiceDetailsPage from "./Components/ServiceDetailsPage.jsx";
import BlogsPage from "./Components/BlogsPage.jsx";
import AdminLogin from "./Components/Admin/AdminLogin.jsx";
import AdminDashboard from "./Components/Admin/AdminDashboard.jsx";
import { AuthProvider } from "./Components/AuthContext.jsx";
import Blogs from "./Components/Admin/Blogs.jsx";
import Admin from "./Admin.jsx";
import CreateBlog from "./Components/Admin/CreateBlog.jsx";
import SingleBlogPage from "./Components/SingleBlogPage.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Services from "./Components/Services.jsx";
import RepayLoan from "./Components/RepayLoan.jsx";
import EMICalculator from "./Components/EMICalculator.jsx";
import ApplyNow from "./Components/ApplyNow.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/repay-loan" element={<RepayLoan />} />
        <Route path="/services/:serviceName" element={<Services />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/single-blog/:id" element={<SingleBlogPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/service-details" element={<ServiceDetailsPage />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<Admin />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/blogs" element={<Blogs />} />
        <Route path="/admin-dashboard/createblog" element={<CreateBlog />} />
        </Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

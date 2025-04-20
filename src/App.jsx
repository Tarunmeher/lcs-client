import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import LayOut from "./components/LayOut/LayOut";
import Home from "./pages/Home/Home";
import LPSHome from "./pages/LPS/LPSHome";
import TillotammaHome from "./pages/Tillotamma/TillotammaHome";
import SummerCourseApply from "./pages/Home/Apply/SummerCourseApply";
import ViewStudentDetail from "./pages/Home/Apply/ViewStudentDetail";
import ContactUs from "./pages/contact/ContactUs";
import Gallery from "./pages/Home/Gallery/Gallery";
import AboutUs from "./pages/About/AboutUs";
import TeacherInfo from "./pages/About/TeacherInformation/TeacherInfo";
import StafDetails from "./pages/Home/StafDetails/StafDetails";
import Events from "./pages/Home/Gallery/Events";
import Notification from "./pages/Home/Notifications/Notification";
import LpsAbout from "./pages/LPS/LPSlayout/About";
import LpsLayOut from "./pages/LPS/LPSlayout/LpsLayOut";
import AdminLayout from "./pages/Admin/AdminLayOut/AdminLayOut";
import AdminDashBoard from "./pages/Admin/AdminDashboard/AdminDashBoard";
import ManageProfile from "./pages/Admin/ManageProfile/ManageProfile";
import ManageStaff from "./pages/Admin/ManageStaff/ManageStaff";
import ManageEvent from "./pages/Admin/ManageEvent/ManageEvent";
import ManageNewsAndNotification from "./pages/Admin/ManageNewsAndNotification/ManageNewsAndNotification";
import ManageGallery from "./pages/Admin/ManageGallery/ManageGallery";
import Login from "./pages/Admin/AdminLogin/Auth/Login";
import Help from "./pages/Admin/Help/Help";
import MyProfile from "./pages/Admin/MyProfile/MyProfile";

const App = () => {
  const location = useLocation();

  // Check if the current route is under LPS or Tillotamma
  const isLPSPage = location.pathname.startsWith("/lps");
  const isTillotammaPage = location.pathname.startsWith("/tillotamma");

  return (
    <div className="bg-multiple min-h-screen">
      <Routes>
        {/* Main Layout with Navbar */}
        {!isLPSPage && !isTillotammaPage && (
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="apply/applysummercourse" element={<SummerCourseApply />} />
            <Route path="apply/ViewStudentDetail" element={<ViewStudentDetail />} />
            <Route path="Gallery/lcs-gallery" element={<Gallery />} />
            <Route path="Gallery/lcs-events" element={<Events />} />
            <Route path="About/about-lcs" element={<AboutUs />} />
            <Route path="Academics/staff/staf-details" element={<StafDetails />} />
            <Route path="teacher/:id" element={<TeacherInfo />} />
            <Route path="Notification" element={<Notification />} />
          </Route>
        )}

        {/* LPS Layout */}
        {isLPSPage && (
          <>
            <Route path="/lps-home" element={<LPSHome />} />
            <Route path="/" element={<LpsLayOut />}>
              <Route path="/lps-about" element={<LpsAbout />} />
            </Route>
          </>
        )}

        {/* Tillotamma Pages */}
        {isTillotammaPage && (
          <Route path="/tillotamma-home" element={<TillotammaHome />} />
        )}

        {/* Admin Panel Routes under AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashBoard />} />
          <Route path="/admin/profile" element={<ManageProfile />} />
          <Route path="/admin/staff" element={<ManageStaff />} />
          <Route path="/admin/events" element={<ManageEvent />} />
          <Route path="/admin/notifications" element={<ManageNewsAndNotification />} />
          <Route path="/admin/gallery" element={<ManageGallery />} />
          <Route path="/admin/help" element={<Help />} />
          <Route path="/admin/my-profile" element={<MyProfile />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />
        {/* <Route path="/admin/signup" element={<SignUp />} /> */}


      </Routes>
    </div>
  );
};

export default App;

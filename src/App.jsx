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
            <Route path="/contact" element={<ContactUs />} />
            
            <Route path="apply/applysummercourse" element={<SummerCourseApply />} />
            <Route path="apply/ViewStudentDetail" element={<ViewStudentDetail />} />
            <Route path="Gallery/lcs-gallery" element={<Gallery />} />
            <Route path="Gallery/lcs-events" element={<Events />} />
            <Route path="About/about-lcs" element={<AboutUs />} />
            <Route path="Academics/faculty/staf-details" element={<StafDetails />} />
            <Route path="/teacher/:id" element={<TeacherInfo />} />
            <Route path="/Notification" element={<Notification />} />
          </Route>
        )}

        {/* LPS Pages with LPSNavbar Only */}
        {isLPSPage && <Route path="/lps-home" element={<LPSHome />} />}

        {/* Tillotamma Pages with TillotammaNavbar Only */}
        {isTillotammaPage && <Route path="/tillotamma-home" element={<TillotammaHome />} />}
      </Routes>
    </div>
  );
};

export default App;

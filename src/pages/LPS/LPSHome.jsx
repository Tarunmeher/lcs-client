import LPSFooter from "./LPSFooter";
import About from "./LPSlayout/About";
import AdmissionBanner from "./LPSlayout/AdmissionBanner";
import Gallery from "./LPSlayout/Gallery";
import Hero from "./LPSlayout/Hero";
import Information from "./LPSlayout/information";
import NewsAndNotifications from "./LPSlayout/NewsAndNotifications";
import WhyChooseUs from "./LPSlayout/WhyChooseUs";
import LPSNavbar from "./LPSNavbar";

const LPSHome = () => {
    return (
        <div>
            {/* <TopBar /> */}
            <LPSNavbar />
            <Hero />
            <About />
            <Information />
            <Gallery />
            <AdmissionBanner />
            <NewsAndNotifications/>
            {/* <WhyChooseUs /> */}
            <LPSFooter />
        </div>
    );
};

export default LPSHome;

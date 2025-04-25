import TillotammaFooter from "./Footer";
import HeroSlider from "./TillotammaLayout/Hero";
import TillotammaNavbar from "./Navbar";
import TillotammaTopBar from "./TopBar";
import WhyChooseUs from "./TillotammaLayout/WhyChooseUs";
import TillotammaAbout from "./TillotammaLayout/AboutUs";
import Gallery from "./TillotammaLayout/Gallery";
import NewsAndNotifications from "./TillotammaLayout/NewsAndNotification";
import FeatureCards from "./TillotammaLayout/FeatureCard";

const TillotammaHome = () => {
    return (
        <div>
            <TillotammaTopBar />
            <TillotammaNavbar />
            <HeroSlider />
            <FeatureCards />
            <TillotammaAbout />
            <Gallery />
            <NewsAndNotifications />
            <WhyChooseUs />
            <TillotammaFooter />
        </div>
    );
};

export default TillotammaHome;

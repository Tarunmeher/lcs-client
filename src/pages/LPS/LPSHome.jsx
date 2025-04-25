import About from "./LPSlayout/About";
import Hero from "./LPSlayout/Hero";
import WhyChooseUs from "./LPSlayout/WhyChooseUs";
import LPSNavbar from "./LPSNavbar";
import TopBar from "./LPSTopbar";

const LPSHome = () => {
    return (
        <div>
            <TopBar />
            <LPSNavbar />
            <Hero />
            <About />
            <WhyChooseUs />
        </div>
    );
};

export default LPSHome;

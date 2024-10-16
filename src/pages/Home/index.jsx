import HomeAbout from "../../components/HomeAbout";
import HomeFAQs from "../../components/HomeFAQ’s";
import HomeOneMain from "../../components/HomeOneMain";
import HomePortfolio from "../../components/HomePortfolio";
import HomeServices from "../../components/HomeServices";
import HomeTestimonials from "../../components/HomeTestimonials";
import StringRun from "../../components/StringRun";

const Home = () => {
    return (
        <main>
            <HomeOneMain />
            <StringRun />
            <HomeAbout />
            <HomeServices />
            <HomePortfolio />
            <HomeFAQs />
            <HomeTestimonials />
            
        </main>
    )
}
export default Home;
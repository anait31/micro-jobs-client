import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import HomeCategories from "../components/HomeCategories";
import HowWork from "../components/HowWork";
import TabCatefories from "../components/TabCatefories";

const Home = () => {
    const jobs = useLoaderData()
    // console.log(jobs)
    return (
        <div>
            <Hero></Hero>
            <HomeCategories></HomeCategories>
            <TabCatefories jobs={jobs}></TabCatefories>
            <HowWork></HowWork>
            
        </div>
    );
};

export default Home;
import { Link } from "react-router";
import work from '../assets/work.svg'
const HomeCategories = () => {
    return (
        <div className="py-16 bg-orange-50">
            <div className="max-w-7xl mx-auto">
                <div className="md:flex md:justify-between items-center">
                    <div className="flex items-center gap-3">
                        <h2 className="text-4xl font-medium">Most Demanding <br className="hidden md:block" /> Categories.</h2>
                        <div className="">
                            <img className="w-16 mb-4 " src={work} alt="" />
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-3">
                        <p className="text-xl">Together with useful notifications, collaboration, insights, and improvement tip lorem etc.</p>
                        <div>
                            <Link to={'/'}><button className="underline text-xl text-[#418366]">Explore all fields</button></Link>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default HomeCategories;
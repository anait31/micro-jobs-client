import { useLoaderData } from "react-router";
import AllJobsCard from "../components/AllJobsCard";

const Jobs = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div className="min-h-[calc(100vh-288px)] container mx-auto pb-12">
            <div className='grid grid-cols-4 gap-8'>
                {
                    jobs.map(job => <AllJobsCard key={job?._id} job={job}></AllJobsCard>)
                }
            </div>
        </div>
    );
};

export default Jobs;
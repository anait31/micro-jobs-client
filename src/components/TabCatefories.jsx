import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { Link } from 'react-router';
import work from '../assets/work.svg'
const TabCatefories = ({ jobs }) => {
    console.log(jobs)
    return (
        <Tabs>
            <div className='container mx-auto pb-16 pt-8'>
                <div className="mb-8">
                    <div className="flex items-center gap-3 justify-center">
                        <h2 className="text-3xl font-medium">Most Demanding Categories.</h2>
                        <div className="">
                            <img className="w-16 mb-4 " src={work} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <p className="text-xl text-center">Together with useful notifications, collaboration, insights, and improvement tip lorem etc.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center mb-12'>
                    <TabList>
                        <Tab>Image Annotation</Tab>
                        <Tab>Video Transcription</Tab>
                        <Tab>Address Validation</Tab>
                        <Tab>Collect Contact Information</Tab>
                        <Tab>Take a Survey Preference</Tab>
                        <Tab>Video Scoring</Tab>
                        <Tab>Dresses Classification</Tab>
                        <Tab>Audio Transcription</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            jobs.filter(j => j.category === "Image Annotation").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            jobs.filter(j => j.category === "Video Transcription").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            jobs.filter(j => j.category === "Address Validation").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            jobs.filter(j => j.category === "Collect Contact Information").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            jobs.filter(j => j.category === "Take a Survey Preference").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            jobs.filter(j => j.category === "Video Scoring").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            jobs.filter(j => j.category === "Dresses Classification").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            jobs.filter(j => j.category === "Audio Transcription").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCatefories;
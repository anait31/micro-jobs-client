import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
const TabCatefories = ({ jobs }) => {
    console.log(jobs)
    return (
        <Tabs>
            <div className='container mx-auto py-16'>
                <div className='flex justify-center items-center'>
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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
const TabCatefories = () => {
    return (
        <Tabs>
            <div className='container mx-auto py-16'>
                <div className='flex justify-center items-center'>
                    <TabList>
                        <Tab>Web Design</Tab>
                        <Tab>Merketing</Tab>
                        <Tab>Editing</Tab>
                        <Tab>App Development</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <JobCard></JobCard>
                </TabPanel>
                <TabPanel>
                    <JobCard></JobCard>
                </TabPanel>
                <TabPanel>
                    <JobCard></JobCard>
                </TabPanel>
                <TabPanel>
                    <JobCard></JobCard>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCatefories;
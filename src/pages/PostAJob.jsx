import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../prodivers/AuthProviders";
const PostAJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)


    const handleAddJob = e => {
        e.preventDefault()
        const form = e.target;
        const job_title = form.title.value;
        const buyer_email = form.email.value;
        const deadline = new Date(startDate).toDateString();
        const category = form.category.value;
        const price = form.price.value;
        const optionals = form.optional.value;
        const description = form.jobdetails.value;
        const postedJob = { job_title, buyer_email, deadline, category, price, optionals, description }

        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }


    return (
        <div className="flex justify-center items-center pb-16 ">
            <div className="w-1/2 bg-white mx-auto px-6 py-12 rounded-xl">
                <div>
                    <div>
                        <h2 className="text-2xl font-medium">Add New Job</h2>
                    </div>
                    <form onSubmit={handleAddJob}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Job Title</label>
                                <input id="title" name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                                <input id="emailAddress" name="email" disabled defaultValue={user?.email} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200 block">Deadline</label>
                                <DatePicker name="deadline" className="w-[440px] block px-4 py-2 mt-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Category</label>
                                <select name="category" defaultValue="Job Category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    <option>Job Category</option>
                                    <option>Image Annotation</option>
                                    <option>Video Transcription</option>
                                    <option>Address Validation</option>
                                    <option>Collect Contact Information</option>
                                    <option>Take a Survey Preferen</option>
                                    <option>Video Scoring</option>
                                    <option>Dresses Classification</option>
                                    <option>Audio Transcription</option>
                                    <option>Video Quality Rating</option>
                                    <option>Tweet Emotion</option>
                                    <option>Match Destinations</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Price</label>
                                <input type="number" name="price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Optionals</label>
                                <input type="text" name="optional" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Job Details</label>
                                <textarea placeholder="Description....." name="jobdetails" className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostAJob;
import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../prodivers/AuthProviders";
import axios from "axios";

const JobDetails = () => {
    const { user } = useContext(AuthContext)
    const job = useLoaderData()
    console.log(job)
    const { buyer_email, category, deadline, description, job_title, price, _id } = job;


    const handleBidFormSubmit = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const comment = form.comment.value;
        const status = "Pending"
        const jobId = _id

        const bidData = {
            jobId, price, deadline, comment, category, buyer_email, status, email
        }
        fetch('http://localhost:5000/bids', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidData)
        })
            .then((data) => {
                console.log(data)
            })
            .catch(error => {
                console.log("Erron on submit bids")
            })
    }

    return (
        <div className="flex gap-8 container mx-auto justify-between items-center p-16">
            <div>
                <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />

                    <div className="p-6 space-y-6">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</p>
                                <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Deadline: {deadline}</p>
                            </div>
                            <h2 className="text-2xl font-medium text-blue-600 uppercase dark:text-blue-400">{job_title}</h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                        </div>

                        <div className="mt-4">
                            <h3>Buyer Details</h3>
                            <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">Name: Example</p>
                            <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">Email: {buyer_email}</p>
                        </div>
                        <h3>Price: {price}</h3>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Place Bids</h2>
                <form onSubmit={handleBidFormSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Document URL</label>
                            <input type="text" name="docurl" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                            <input disabled name="email" defaultValue={user?.email} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Comment</label>
                            <input type="text" name="comment" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Deadline</label>
                            <input type="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobDetails;
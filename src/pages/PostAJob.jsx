import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PostAJob = () => {
    const [startDate, setStartDate] = useState(new Date());

    

    return (
        <div className="min-h-[calc(100vh-288px)] flex justify-center items-center">
            <div className="w-1/2 mx-auto border-2 p-8 rounded-xl">
                <div>
                    <div>
                        <h2 className="text-4xl font-medium pb-4">Add New Job</h2>
                    </div>
                    <form className="space-y-3">
                        <div className="md:flex md:gap-3">
                            <input type="text" placeholder="Job Title" className="input input-bordered w-full focus:outline-none" required />
                            <input type="text" placeholder="Job Title" className="input input-bordered w-full focus:outline-none" required />
                        </div>
                        <input
                            type="text"
                            placeholder="Write About the job in details"
                            className="input input-bordered input-lg w-full focus:outline-none" required />
                        <div className="md:flex md:gap-3">
                            <select className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Job Category</option>
                                <option>Image Annotation</option>
                                <option>Video Transcription</option>
                                <option>Address Validation</option>
                                <option>Collect Contact Inform</option>
                                <option>Take a Survey Preferen</option>
                                <option>Video Scoring</option>
                                <option>Dresses Classification</option>
                                <option>Collect Contact Inform</option>
                                <option>Audio Transcription</option>
                                <option>Video Quality Rating</option>
                                <option>Tweet Emotion</option>
                                <option>Match Destinations</option>
                            </select>
                            <input type="text" placeholder="Job Title" className="input input-bordered w-full focus:outline-none" required />
                        </div>
                        <div className="md:flex md:gap-3">
                            <input type="number" placeholder="Amount" name="amount" className="input w-1/2 input-bordered w-full focus:outline-none" required />
                            {/* <input type="text" placeholder="Job Title" name="" className="input input-bordered w-full focus:outline-none" required /> */}
                            <DatePicker className="w-full block" selected={startDate} onChange={(date) => setStartDate(date)}></DatePicker>
                        </div>
                        <button className="btn btn-block">Add Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostAJob;
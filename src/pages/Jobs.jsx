import { useLoaderData } from "react-router";
import AllJobsCard from "../components/AllJobsCard";
import { useEffect, useState } from "react";

const Jobs = () => {
    // const jobs = useLoaderData()
    const [jobs, setJobs] = useState([])
    const [totalProducts, setTotalProducts] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?page=${currentPage}&size=${itemsPerPage}`)
        .then(res=> res.json())
        .then(data => {
            setJobs(data)
        })
    }, [currentPage, itemsPerPage])

    useEffect(() => {
        fetch('http://localhost:5000/paginations')
            .then(res => res.json())
            .then(data => {
                setTotalProducts(data.count)
            })
    }, [])

    const numberOfPages = Math.ceil(totalProducts / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()]
    const handleItemPerPage = e => {
        const pageCount = parseInt(e.target.value);
        setItemsPerPage(pageCount)
        setCurrentPage(0)
    }
    // console.log(currentPage)
    const handlePreviousPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage -1)
        }
    }

    const handleNextPage = () => {
        if(currentPage < pages.length -1) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className="min-h-[calc(100vh-288px)] container mx-auto pb-12">
            <div className='grid grid-cols-4 gap-8'>
                {
                    jobs.map(job => <AllJobsCard key={job?._id} job={job}></AllJobsCard>)
                }
            </div>
            <div className="text-center pt-8">
                <button onClick={handlePreviousPage} className="btn mr-2">Prev</button>
                {
                    pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage === page ? 'bg-slate-600 btn mr-2' : 'btn mr-2'} key={page}>{page}</button>)
                }
                <button onClick={handleNextPage} className="btn">Next</button>
                <select onChange={handleItemPerPage} value={itemsPerPage} name="" id="" className="btn ml-2">
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
            </div>
        </div>
    );
};

export default Jobs;
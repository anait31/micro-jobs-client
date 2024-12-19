import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";
import Contact from "../pages/Contact";
import PostAJob from "../pages/PostAJob";
import JobDetails from "../pages/JobDetails";
import MyPostedJobs from "../pages/MyPostedJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/jobs')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/jobs',
                element: <Jobs></Jobs>,
                loader: () => fetch('http://localhost:5000/jobs/')
            },
            {
                path: '/jobs/:id',
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/job/${params?.id}`)
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/postajob',
                element: <PostAJob></PostAJob>
            },
            {
                path: '/mypostedjobs',
                element: <MyPostedJobs></MyPostedJobs>
            }
        ]
    },
]);



export default router;
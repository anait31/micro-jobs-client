import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../prodivers/AuthProviders";

const Header = () => {
    const { user, handleSSignOut } = useContext(AuthContext);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/jobs'}>Jobs</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>

    return (
        <div className="bg-[#244034] text-white px-4 md:px-12">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {/* <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl">SpareJobs</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">

                    {user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Dashboard</a></li>
                                <li><a>Settings</a></li>
                                <li><Link to={'/postajob'}>Add New Job</Link></li>
                                <li><Link to={'/mypostedjobs'}>My Posted Jobs</Link></li>
                                <li><button onClick={handleSSignOut}>Logout</button></li>
                            </ul>
                        </div> :
                        <Link to={'/login'} className="">LogIn</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
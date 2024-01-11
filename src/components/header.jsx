import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 ">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                  
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="industries relative">
                            <NavLink
                                to="/ai-software"
                                className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? 'text-orange-700' : 'text-gray-700'
                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Industries
                            </NavLink>
                            <div className="drop-down w-fit h-auto bg-white text-fuchsia-500 absolute hidden">
                            <Link to="/sustainability" >
                                <p>
                                    Sustainability
                                </p>
                            </Link>
                            <Link to="/metal-mining" >
                                <p>
                                    Mineral Processing
                                </p>
                            </Link>

                            <Link to="/mine-to-mill-to-mine-optimization" >
                                <p>
                                mine-to-mill-to-mine-optimization
                                </p>
                            </Link>
                            <Link to="/oil-gas" >
                                <p>
                                    Oil and Gas
                                </p>
                            </Link>
                            </div>
                            </li>

                          
                            <li>
                                <NavLink
                                to="/ai-software"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    AI Software 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="https://ntwist.com/blog/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="https://ntwist.com/contact-us/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            
        </header>
    );
}
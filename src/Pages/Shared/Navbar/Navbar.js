import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Navbar = () => {
    const navitems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link to='/services'>Service</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Content</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 mb-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <img src={logo} alt="" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link><button className="btn btn-outline btn-secondary">Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
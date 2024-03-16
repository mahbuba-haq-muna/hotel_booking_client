import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";
import "./Navbar.css"



const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
        const handleLogOut = ()=>{
            logOut()
            .then()
            .catch()
        }

    const navItems = <>
        <li className="text-lg font-semibold text-green-800"><NavLink to={'/'}>Home</NavLink></li>
        <li className="text-lg font-semibold text-green-800"><NavLink to={'/rooms'}>Rooms</NavLink></li>
        <li className="text-lg font-semibold text-green-800"><NavLink to={'/myBookings'}>My Bookings</NavLink></li>
        <li className="text-lg font-semibold text-green-800"><NavLink to={'/about'}>About us</NavLink></li>
        {/* <li><NavLink to={'/contact'}>Contact us</NavLink></li> */}
       
    </>

    return (
        <div>
            <div className="navbar bg-base-100 h-28 px-10 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navItems}
                        </ul>
                    </div>
                    <Link to={"/"} className="">
                        <img src={logo} alt="" className=" w-28"/>
                        <p className="font-semibold ml-3">Royal <span className=" text-yellow-700">Oasis</span></p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ? <button onClick={handleLogOut} className="btn bg-btnColor  text-white ">Sign Out</button>
                            :
                            <Link to={'/login'}><button className="btn bg-btnColor  text-white ">Login</button></Link>
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/meals">Meals</Link></li>
    <li><Link to="/joinus">Join Us</Link></li>
    <li><Link to="/upcoming">Upcoming Meals</Link></li>
    <li><Link to="/dashboard/cart">
      <button className="btn glass text-red-600">
        <FaCartPlus /> addmeals
        <div className="badge text-white bg-red-400">+{cart.length}</div>
      </button>
    </Link></li>
    {
      user ? <>
        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      </> :
        <> <li><Link to="/login">Login</Link></li>
        </>
    }
  </>
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <div>
            <img className="w-18 h-14" src="https://i.ibb.co/jVP31LS/HMS-LOGOz1-1.png" alt="" />
          </div>
          <a className="btn btn-ghost text-xl">Hostel Managment</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end mr-6">

          {
            user?.email ? <div className="dropdown 
dropdown-end">
              <label tabIndex={0} className="btn btn-ghost
btn-circle avatar">
                <div className="w-15 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm 
dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="btn btn-sm btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
              :
              <button><NavLink to="/login">Login</NavLink></button>
          }

        </div>
      </div>
    </>
  );
};

export default Navbar;
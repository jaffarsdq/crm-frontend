import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../Redux/Slices/AuthSlice";

function HomeLayout({ children }) {

    const authState = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function onLogout() {
        dispatch(logout());
        navigate("/login");
    }

    useEffect(() => {
        if(!authState.isLoggedIn) navigate("/login");
    }, []);

    return (
        <div className="relative z-50">
            <div className="drawer left-0">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-5">
                    <label htmlFor="my-drawer">
                    <AiOutlineMenu 
                            size={'35px'}
                            className='cursor-pointer hover:text-slate-50 ml-3 mt-3'
                        />
                    </label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><Link to="/">Home</Link></li>

                        <li><Link to="/dashboard">Dashboard</Link></li>

                        {authState.isLoggedIn && <li><Link to="/ticket/create">Create Ticket</Link></li>}

                        {authState.role === "admin" && <li><Link to="/users">All Users</Link></li>}

                        <div className='w-3/4 flex justify-center items-center absolute bottom-10 ml-4 gap-5'>
                                {
                                    !authState.isLoggedIn ? (
                                        <>  

                                            <Link to="/login" className='btn-primary text-center px-2 py-1 rounded-md font-semibold w-full'>Login</Link>
                                            <Link to="/signup" className='btn-secondary text-center px-2 py-1 rounded-md font-semibold w-full'>Signup</Link>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={onLogout} className='btn-primary px-2 py-1 rounded-md font-semibold w-full'>Logout</button>
                                            <Link className='btn-secondary px-2 py-1 rounded-md font-semibold w-full text-center'>Profile</Link>
                                        </>
                                    )
                                }

                                
                            </div>
                    </ul>
                </div>
            </div>


            <div className="flex justify-center">
                    {children}
            </div>

        </div>
    );
}

export default HomeLayout;
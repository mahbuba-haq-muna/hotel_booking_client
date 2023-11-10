
import img from '../../assets/user-login-icon-974x1024-jyp1q1de.png'
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Component/AuthProvider/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState();
    const [loginError, setLoginError] = useState();


    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleGoogleSignIn = e => {
        e.preventDefault();
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }

    const handleLogIn = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setSuccess('');
        setLoginError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Login successfully')

                // navigate
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-14">
                    <div className=" w-1/2">

                        <img className='w-96' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleLogIn} className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control my-6">
                                <button className="btn bg-btnColor ">Login</button>
                            </div>
                            {
                                success && <p className="text-green-700 ">{success}</p>
                            }
                            {
                                loginError && <p className="text-red-500 ">{loginError}</p>
                            }
                            <p>Do not have an account? <Link to="/register" className="font-bold text-green-800" >Register Now</Link></p>
                            <div>
                                <Link><button onClick={handleGoogleSignIn} className="btn mt-6 w-full"> <FaGoogle className="text-xl mr-3 text-blue-500"></FaGoogle> Log in With Google</button></Link>
                            </div>    
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
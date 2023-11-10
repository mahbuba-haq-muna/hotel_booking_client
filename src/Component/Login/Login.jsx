import { Link } from 'react-router-dom';
import img from '../../assets/user-login-icon-974x1024-jyp1q1de.png'

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-14">
                    <div className=" w-1/2">

                        <img className='w-96' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form  className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" value="Login" className="btn bg-btnColor text-white" />
                            </div>
                        </form>
                        <p className="text-center mb-5">New to Car Doctor? <Link to={"/signup"} className="text-orange-600  font-bold">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import img from '../../../assets/user-login-icon-974x1024-jyp1q1de.png'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../Component/AuthProvider/AuthProvider';

const Register = () => {

    const [success, setSuccess] = useState();
    const [registerError, setRegisterError] = useState();

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email, password, name , photo);

        // if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{6,})/.test(password)){
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Your password should have at least 6 characters with a capital letter and a special character',
                
        //       })

        //       return;
        // }

        setSuccess('');
        setRegisterError('');

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess('Registered successfully')

           
            
        })
        .catch(error=>{
            console.error(error)
            setRegisterError(error.message)
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

                    <form onSubmit={handleRegister} className="card-body ">
                    <h1 className="text-3xl text-center font-bold">Register Now</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered"  />
                   
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="photo URL" name="photo" className="input input-bordered"  />
                    
                </div>
                <div className="form-control my-6">
                    <button className="btn bg-btnColor ">Register</button>
                </div>
                {
                    success && <p className="text-green-700 ">{success}</p>
                }
                {
                    registerError && <p className="text-red-500 ">{registerError}</p>
                }
                <p>Already have an account? <Link to="/login" className="font-bold  text-green-800" >Log in</Link></p>
            </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
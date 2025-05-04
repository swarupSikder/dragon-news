import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {logIn, setUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then((result)=>{
                setUser(result.user);
                navigate('/');
            })
            .catch((error)=>{
                alert(error.code, error.message);
            });
    }




    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">

                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>

                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset space-y-5">

                        <div>
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                        </div>


                        <div><a className="link link-hover">Forgot password?</a></div>



                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p className='py-4'>
                            Don't have an account? <Link className='text-secondary' to="/auth/register">Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
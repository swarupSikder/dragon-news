import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">

                <h2 className='font-semibold text-2xl text-center'>Create account</h2>

                <div className="card-body">
                    <fieldset className="fieldset space-y-5">
                        <div>
                            <label className="label">Name</label>
                            <input type="text" className="input" value="" placeholder="Name" />
                        </div>

                        <div>
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" value="" placeholder="Photo Url" />
                        </div>

                        <div>
                            <label className="label">Email</label>
                            <input type="email" className="input" value="" placeholder="Email" />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input type="password" className="input" value="" placeholder="Password" />
                        </div>

                        <button className="btn btn-neutral mt-4">Register</button>

                        <p className='py-4'>
                            Already have an account? <Link className='text-secondary' to="/auth/login">Login</Link>
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;
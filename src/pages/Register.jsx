import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password).then(result=> {
            const user = result.user;
            //console.log(user);
            setUser(user);
        })
        .catch(error=> {
            const errorCode = error.code;
            const errorMsg = error.message;
            alert(errorMsg);
        });
    }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">

                <h2 className='font-semibold text-2xl text-center'>Create account</h2>

                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset space-y-5">
                        <div>
                            <label className="label">Name</label>
                            <input name='name' required type="text" className="input" placeholder="Name" />
                        </div>

                        <div>
                            <label className="label">Photo URL</label>
                            <input name='photoUrl' required type="text" className="input" placeholder="Photo Url" />
                        </div>

                        <div>
                            <label className="label">Email</label>
                            <input name='email' required type="email" className="input" placeholder="Email" />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input name='password' required type="password" className="input" placeholder="Password" />
                        </div>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                        <p className='py-4'>
                            Already have an account? <Link className='text-secondary' to="/auth/login">Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState('');
    const [urlError, setUrlError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;




        if (name.length < 5) {
            setNameError('Name should be more than 5 character...');
            return;
        }
        else {
            setNameError('');
        }





        createUser(email, password).then(result => {
            const user = result.user;
            updateUser(
                {
                    displayName: name,
                    photoUrl: photoUrl,
                    email: email,
                }
            )
                .then(() => {
                    setUser({
                        ...user,
                        displayName: name,
                        photoUrl: photoUrl,
                        email: email
                    });

                    navigate("/");
                })
                .catch((error) => {
                    alert(error.message);
                    setUser(user);
                });

        })
            .catch(error => {
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
                            {nameError && <p className='text-xs text-error'>{nameError}</p>}
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
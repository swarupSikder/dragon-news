import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>

            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn bg-base-100 join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn bg-base-100 join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;
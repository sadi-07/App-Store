import React from 'react';
import errImg from '../assets/App-Error.png';
import { Link } from 'react-router';

const AppNotFound = () => {
    return (

        <div>
            <div className="text-center py-20">
                <img className='mx-auto w-64 mb-6' src={errImg} alt="Not Found" />
                <h1 className="text-5xl font-bold mb-4">App Not Found</h1>
                <p className="text-lg text-gray-600 mb-8">
                    The app you’re looking for doesn’t exist.
                </p>
                <Link to="/apps">
                    <button
                        className="btn px-7 py-3 text-white"
                        style={{ background: 'linear-gradient(90deg, #632EE3, #9F62F2)', borderRadius: '3px' }}
                    >
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AppNotFound;

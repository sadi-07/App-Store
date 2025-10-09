    import React from 'react';
    import errImg from '../assets/App-Error.png'
    import { Link } from 'react-router';

    const SearchError = () => {

        const handleGoBack = () => {
            window.location.reload();
        }
        return (
            <div className="text-center py-20">
                <img className='mx-auto' src={errImg} alt="" />
        <h1 className="text-5xl font-bold my-4">Opps! App Not Found</h1>
        <p className="text-lg text-gray-600 pb-6">
            The app you are requesting is currently not available in our system, please try another app.
        </p>
            <Link>
                <button onClick={handleGoBack} className="btn mb-15 px-7 py-6" style={{
                                        background: 'linear-gradient(90deg, #632EE3, #9F62F2)',
                                        color: 'white',
                                        borderRadius: '5px',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                    }}>Go Back</button></Link>
        </div>
        );
    };

    export default SearchError;
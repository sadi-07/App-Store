import React from 'react';
import ErrorImg from '../assets/error-404.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center'>
                <img className='mx-auto py-20 px-8' src={ErrorImg}/>
            <h1 className='font-bold text-5xl mb-3 px-2'>Opps, page not found!</h1>
            <p className='text-gray-600 font-semibold text-lg mb-6 px-4'>The page you are looking for is not available</p>
            <Link to='/'>
            <a className="btn mb-15 px-7 py-6" style={{
                                    background: 'linear-gradient(90deg, #632EE3, #9F62F2)',
                                    color: 'white',
                                    borderRadius: '5px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                }}>Go Back</a></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;
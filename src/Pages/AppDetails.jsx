import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import downloadLogo from '../assets/icon-downloads.png'
import ratingLogo from '../assets/icon-ratings.png'
import reviewLogo from '../assets/icon-review.png'
import RatingChart from './RatingChart';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';

const AppDetails = () => {
    const { id } = useParams()
    const [apps, loading, error] = useApps()
    const [isInstalled, setIsInstalled] = useState(false);

    const app = apps.find(f => f.id === Number(id))

    
    useEffect(() => {
        if (!app) return;
        const existingList = JSON.parse(localStorage.getItem('Install')) || [];
        const alreadyInstalled = existingList.some(c => c.id === app.id);
        if (alreadyInstalled) setIsInstalled(true);
    }, [app]);
    if (loading) return <p>Loading.....</p>
      if (!app) return <p>App not found.</p>;


    const { title, image, ratingAvg, downloads, companyName, reviews, size, description } = app;

    const handleInstall = () => {
        const existingList = JSON.parse(localStorage.getItem('Install')) || []
        const alreadyInstalled = existingList.some(c => c.id === app.id);

    if (alreadyInstalled) {
      setIsInstalled(true);
      return toast.info(`${app.title} is already installed`, {
        position: toast.POSITION.TOP_CENTER,
        closeButton: true
      });
    }
        let updatedList = [...existingList, app];
    localStorage.setItem('Install', JSON.stringify(updatedList));

    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!`);
        if (existingList) {
            const idCopy = existingList.some(c => c.id === app.id)
            if (idCopy) return alert("Sorry vai")
            updatedList = [...existingList, app]
        } else {
            updatedList.push(app)
        }
        localStorage.setItem('Install', JSON.stringify(updatedList))
    }

    return (
        <div className='max-w-6xl mx-auto px-8 md:px-4'>
            <div className='flex flex-col md:flex-row justify-start items-center gap-8 py-15'>
                <div>
                    <img src={image} alt="" className='h-84 p-4' />
                </div>
                <div className='flex-1'>
                    <h1 className='font-extrabold text-5xl'>{title}</h1>
                    <p className='font-semibold text-lg text-gray-600 border-b-2 border-gray-300 pb-5 pt-2'>Developed by <span className='text-purple-700'>{companyName}</span></p>
                    <div className='flex justify-start gap-20 mt-6'>
                        <div>
                            <img src={downloadLogo} alt="" />
                            <p className='font-semibold text-base py-2 text-gray-600'>Downloads</p>
                            <h1 className='font-extrabold text-4xl'>{downloads} M</h1>
                        </div>
                        <div>
                            <img src={ratingLogo} alt="" />
                            <p className='font-semibold text-base py-2 text-gray-600'> Ratings</p>
                            <h1 className='font-extrabold text-4xl'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img src={reviewLogo} alt="" />
                            <p className='font-semibold text-base py-2 text-gray-600'> Reviews</p>
                            <h1 className='font-extrabold text-4xl'>{reviews}</h1>
                        </div>
                    </div>
                     <button onClick={handleInstall} disabled={isInstalled}
            className={`btn text-white text-base mt-5 rounded-lg py-5 hover:scale-102 transition-all duration-300 ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'}`}
          >
            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
          </button>
                </div>
            </div>

            <div className='border-y-2 border-gray-300'>
                <h1 className='font-bold text-2xl mb-4 mt-5'>Ratings</h1>
                <RatingChart ratings={[...app.ratings].reverse()}></RatingChart>
            </div>

            <div className='pb-15'>
                <h1 className='font-bold text-2xl mb-3 mt-5'>Description</h1>
                <p className='text-gray-500 font-semibold text-lg mb-5'>{description}</p>
                <p className='text-gray-500 font-semibold text-lg'>{description}</p>
            </div>

            <ToastContainer
        position="top-center"   
        autoClose={3000}        
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        </div>
    );
};

export default AppDetails;
import React, { useEffect, useState } from 'react';
import downloadLogo from '../assets/icon-downloads.png'
import ratingLogo from '../assets/icon-ratings.png'
import reviewLogo from '../assets/icon-review.png'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const parseDownloads = (downloadsStr) => {
    if (typeof downloadsStr === 'number') return downloadsStr;
    const value = parseFloat(downloadsStr);
    if (isNaN(value)) return 0;

    return value;
};


const InstallationApp = () => {
    const [sortOrder, setSortOrder] = useState('none')
    const [install, setInstall] = useState([])

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('Install'))
        if (savedList) setInstall(savedList)
    }, [])

    const sortedApps = () => {
        if (sortOrder === "highToLow") {
            return [...install].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
        } else if (sortOrder === "lowToHigh") {
            return [...install].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
        } else return install;
    };


    const handleRemove = (id) => {
        const existingList = JSON.parse(localStorage.getItem('Install'))
        const removedApp = existingList.find(app => app.id === id)
        let updatedList = existingList.filter(app => app.id !== id)
        setInstall(updatedList)
        localStorage.setItem('Install', JSON.stringify(updatedList))

        toast.info(`${removedApp.title} has been uninstalled`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            closeButton: true
        });
    }


    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='font-extrabold text-5xl text-center pt-25 pb-4'>Your Installed Apps</h1>
            <p className='font-semibold text-xl text-gray-600 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='mt-15 mb-5 flex flex-col-reverse lg:flex-row justify-between items-center'>
                <h1 className='font-bold text-3xl pt-7 md:pt-0'><span>({install.length})</span> App Found</h1>
                <label className='form-control w-full max-w-xs '>
                    <select className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}>
                        <option value="none">Sort by Downloads</option>
                        <option value="highToLow">High → Low</option>
                        <option value="lowToHigh">Low → High</option>
                    </select>
                </label>
            </div>



            {
                sortedApps().map(app => (
                    <div key={app.id} className="card card-side bg-base-100 shadow-sm my-5 flex flex-col lg:flex-row py-3 lg:py-0 mx-5 lg:mx-0 items-center px-5">
                        <figure className='h-40'>
                            <img className='h-42 p-4'
                                src={app.image} />
                        </figure>
                                                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold mb-2">{app.title}</h2>
                            <div className='flex items-center gap-7'>
                                <h1 className='flex items-center gap-3 text-lg font-semibold'><img className='h-7' src={downloadLogo} />{app.downloads} M</h1>
                                <h1 className='flex items-center gap-3 text-lg font-semibold'><img className='h-7' src={ratingLogo} />{app.ratingAvg}</h1>
                                <h1 className='flex items-center gap-3 text-lg font-semibold'><img className='h-7' src={reviewLogo} />{app.reviews}</h1>
                                <h1 className='flex items-center gap-3 text-lg font-semibold text-gray-500'>{app.size} MB</h1>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleRemove(app.id)} className='btn text-white bg-green-500 text-base hover:scale-102 px-5 py-5'>Uninstall</button>
                        </div>
                    </div>
                ))
            }

            <ToastContainer 
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                draggable
                pauseOnHover
                toastStyle={{ zIndex: 9999 }}
                className="custom-toast-container"
            />
        </div>
    );
};

export default InstallationApp;
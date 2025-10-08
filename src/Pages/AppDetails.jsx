import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const AppDetails = () => {
    const {id} = useParams()
    const [apps, loading, error] = useApps()
    
    const app = apps.find(f => f.id === Number(id))

    if(loading) return <p>Loading.....</p>

    const {title, image, ratingAvg, downloads} = app;

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                            <figure>
                                <img className='h-60 pt-6'
                                    src={image} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl pb-2">
                                    {title}
                                </h2>
            
                                <div className="card-actions flex justify-between items-center">
                                    <div className="badge text-base bg-gray-200 text-green-600"><FaDownload />{downloads}</div>
                                    <div className="badge text-base bg-orange-200 text-orange-600"><FaStar />
                                        {ratingAvg}</div>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default AppDetails;
import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router';


const CardHome = ({ app }) => {
    //console.log(app)
    const { image, title, downloads, ratingAvg,id } = app;
    return (
        <div>
            <Link to={`/app/${id}`}>
                <div className="card bg-base-100 shadow-sm hover:scale-104 transition ease-in-out">
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
            </Link>
        </div>
    );
};

export default CardHome;
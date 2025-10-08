import React from 'react';

const CardHome = ({ app }) => {
    console.log(app)
    const {image, title } = app;
    return (
        <div>
                <div className="card bg-base-100 shadow-sm mx-10 lg:mx-0">
                <figure>
                    <img className='h-84 pt-6'
                        src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions flex justify-between items-center">
                        <div className="badge badge-secondary">Fashion</div>
                        <div className="badge badge-secondary">Products</div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default CardHome;
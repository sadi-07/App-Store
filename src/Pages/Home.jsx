import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';
import CardHome from './CardHome';
import useApps from '../Hooks/useApps';

const Home = () => {
    
    const [apps, loading, error] = useApps();

    const homeApps = apps.slice(0, 8);

    return (
        <div className=''>
            <Banner></Banner>
            <h1 className='font-extrabold text-5xl text-center pt-15 pb-4'>Trending Apps</h1>
            <p className='font-semibold text-xl text-gray-600 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-6 pt-10 pb-10 px-8 lg:px-4'>
                {
                    homeApps.map(app => <CardHome key={app.id} app={app}></CardHome>)
                }
            </div>
            <Link to='/apps'>
                <div className='text-center pb-10'><button className='btn btn-primary text-lg py-6 px-8 font-semibold'>Show All</button></div>
            </Link>
        </div>
    );
};

export default Home;
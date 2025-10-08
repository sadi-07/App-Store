import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import CardHome from './CardHome';

const Home = () => {
    const apps = useLoaderData();
    console.log(apps);
    return (
        <div className=''>
            <Banner></Banner>
            <div className='grid grid-cols-3 max-w-6xl mx-auto gap-4 py-20'>
                {
                    apps.map(app => <CardHome key={app.id} app={app}></CardHome>)
                }
            </div>
        </div>
    );
};

export default Home;
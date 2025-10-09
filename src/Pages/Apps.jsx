import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import CardHome from './CardHome';

const Apps = () => {
    const [apps, loading, error] = useApps();
    const [search, setSearch] = useState('');

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps

    

    return (
        <div className='max-w-6xl mx-auto px-4 lg:px-0'>

            <h1 className='font-extrabold text-5xl text-center pt-25 pb-4'>Our All Applications</h1>
            <p className='font-semibold text-xl text-gray-600 text-center'>Explore All Trending Apps on the Market developed by us. We code for Millions</p>
            <div className='pt-15 flex flex-col-reverse md:flex-row justify-between items-center'>
                <h1 className='font-bold text-3xl pt-7 md:pt-0'><span>({searchedApps.length})</span> Apps Found</h1>
                
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={search} onChange={e => setSearch(e.target.value)} type="search" required placeholder="Search" />
                    </label>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-6 pt-8 pb-10 px-8 lg:px-4'>
                {
                    searchedApps.map(app => <CardHome key={app.id} app={app}></CardHome>)
                }
            </div>

        </div>
    );
};

export default Apps;
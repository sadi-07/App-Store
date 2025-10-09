import React from 'react';
import bannerImg from '../assets/hero.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";



const Banner = () => {
    return (
        <div className=''>
            <div className='text-center pt-20 pb-10'>
                <h1 className='text-6xl font-extrabold pb-5'>We Build <br /> <span className='text-purple-800'>Productive</span> Apps</h1>
                <p className='max-w-2/3 mx-auto text-gray-500 font-semibold pb-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <button className='btn mr-10 border-gray-400 rounded-base text-lg py-6'><a className='flex items-center gap-2' href="https://play.google.com/store/apps" target='_blank'><IoLogoGooglePlaystore></IoLogoGooglePlaystore>  Google Play</a></button>
                <button className='btn border-gray-400 rounded-base text-lg py-6'><a className='flex items-center gap-2' href="https://www.apple.com/app-store/" target='_blank'><FaAppStoreIos></FaAppStoreIos> App Store</a></button>
            </div>
            <div className='px-10 md:px-5 '>
                <img className='mx-auto' src={bannerImg} alt="" />
            </div>
            <div style={{
                background: 'linear-gradient(to right, #632EE3 0%, #9F62F2 100%)', width: 'full'
            }}>
                <div className='px-10 text-center pt-20 max-w-6xl mx-auto'>
                    <h1 className='font-extrabold text-4xl text-white'>Trusted by Millions, Built for You</h1>
                    <div className='flex flex-col md:flex-row items-center justify-between py-15 gap-8'>
                        <div>
                            <p className='text-gray-200 font-semibold text-base'>Total Downloads</p>
                            <h1 className='text-6xl font-bold text-white py-3'>29.6M</h1>
                            <p className='text-gray-200 font-semibold text-base'>21% more than last month</p>
                        </div>
                        <div>
                            <p className='text-gray-200 font-semibold text-base'>Total Reviews</p>
                            <h1 className='text-6xl font-bold text-white py-3'>906K</h1>
                            <p className='text-gray-200 font-semibold text-base'>46% more than last month</p>
                        </div>
                        <div>
                            <p className='text-gray-200 font-semibold text-base'>Active Apps</p>
                            <h1 className='text-6xl font-bold text-white py-3'>132+</h1>
                            <p className='text-gray-200 font-semibold text-base'>31 more will Launch</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
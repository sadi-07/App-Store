import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from '../Components/Loader';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {navigation.state === "loading" && <Loader />}
                <Outlet />
            </div>
            <Footer></Footer>

            <ToastContainer/>
        </div>
    );
};

export default MainLayout;
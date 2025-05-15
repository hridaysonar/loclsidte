import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../Component/Footer';
import Navebar from '../Component/Navebar';

const Mainlayout = () => {
    return (
        <div>
            <Navebar/>
            
            <div className='max-w-7x1 mx-auto'>
                <Outlet></Outlet>
                <Footer/>
            </div>
        </div>
    );
};

export default Mainlayout;
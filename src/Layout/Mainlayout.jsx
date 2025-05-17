import React from 'react';
import { Outlet } from 'react-router'; // Use react-router-dom

import Footer from '../Component/Footer';
import Navebar from '../Component/Navebar';

const Mainlayout = () => {
    return (
        <div>
            <Navebar />

            {/* Main Content Area */}
            <div className='max-w-7xl mx-auto min-h-screen'>
                <Outlet />
            </div>

            {/* Footer - Always Visible */}
            <Footer />
        </div>
    );
};

export default Mainlayout;

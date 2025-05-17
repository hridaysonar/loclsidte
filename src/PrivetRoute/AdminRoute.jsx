import React, { useEffect } from 'react';

const AdminRoute = ({children}) => {
    
    useEffect(() => {
        fetch('https://coffe-house-server-beige.vercel.app/admin_login', {
            method: "POST",
            headers: {
                'Content-Type': "applications/json"
            },
            body: {
                
            }
        })
    }, [])

    return children
};

export default AdminRoute;
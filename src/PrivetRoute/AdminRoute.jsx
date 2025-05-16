import React, { useEffect } from 'react';

const AdminRoute = ({children}) => {
    
    useEffect(() => {
        fetch('http://localhost:3000/admin_login', {
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
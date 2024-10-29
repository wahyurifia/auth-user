import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Ambil token dari local storage
    // atau jika menggunakan session storage
    // const token = sessionStorage.getItem('token');

    // Jika token tidak ada, arahkan ke halaman login
    if (!token) {
        return <Navigate to="/auth/sign-in" replace />;
    }

    // Jika token ada, render children (komponen yang diminta)
    return children;
};

export default ProtectedRoute;

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { Inscricao } from '../pages/Inscricao'
import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

const Private = ({ children }: { children: React.ReactNode }) => {
    const { signed } = useContext(AuthContext);

    return signed ? <>{children}</> : <Navigate to="/signin" />;
}

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Private><Home /></Private>} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/inscricao" element={<Inscricao />} />
                <Route path="*" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}
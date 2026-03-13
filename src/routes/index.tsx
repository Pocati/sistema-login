import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { Inscricao } from '../pages/Inscricao'

const Private = ({ children }: { children: JSX.Element }) => {
    const { signed } = useContext(AuthContext)
    return signed ? children : <Navigate to="/signin" />
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
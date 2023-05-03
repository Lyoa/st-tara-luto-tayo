import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './common/Dashboard'
import UserList from './dashboards/UserList'
import NavBar from './common/NavBar'
import SignUp from './authentication/SignUp'
import AgahanSub from './components/AgahanSub'
import HapunanSub from './components/HapunanSub'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/user-list" element={<UserList />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/agahan" element={<AgahanSub />} />
                <Route path="/hapunan" element={<HapunanSub />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

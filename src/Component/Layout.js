import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';
import NewLetter from './NewLetter';
import TopBar from "./TopBar";

function Layout() {
    return (
        <div>
            <TopBar/>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <NewLetter />
            <Footer />
        </div>
    );
}

export default Layout;

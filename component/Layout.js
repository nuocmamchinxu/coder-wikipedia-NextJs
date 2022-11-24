import React from 'react'
import Navbar from './nav'
import Footer from './footer'
export default function Layout({ children }) {
    return (
        <div className='content'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

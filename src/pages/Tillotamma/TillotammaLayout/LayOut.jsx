import React from 'react'

import { Outlet } from 'react-router-dom'
import TillotammaTopBar from '../TopBar'
import TillotammaNavbar from '../Navbar'
import TillotammaFooter from '../Footer'



const TillotammaLayOut = () => {
    return (
        <div>
            <header>
                <TillotammaTopBar />
                <TillotammaNavbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <TillotammaFooter />
            </footer>
        </div>
    )
}

export default TillotammaLayOut
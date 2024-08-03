import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen'>
            <NavLink to="/" />
            <NavLink to="/message"/>
            <Outlet />
        </div>
    )
}

export default MainLayout
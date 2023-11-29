import React from 'react'

import { useResolvedPath, Link, useMatch } from 'react-router-dom'

import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav className='nav'>
            <a href='/' className='site-title'>Connor Ajersch</a>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/experience'>Experience</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
            </ul>
        </nav>
    )
}

function NavLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

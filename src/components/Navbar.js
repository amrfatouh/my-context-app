import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

function Navbar() {
    const { isLoggedIn, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ color: theme.syntax, backgroundColor: theme.ui }}>
            <h2>Context App</h2>
            <div onClick={toggleAuth}>
                {isLoggedIn ? 'logged in' : 'logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar

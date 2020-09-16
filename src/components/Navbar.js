import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

export default class Navbar extends Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext => (
                <ThemeContext.Consumer>{(themeContext => {
                    const { isLoggedIn, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
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
                })}</ThemeContext.Consumer>
            ))}</AuthContext.Consumer>
        )
    }
}

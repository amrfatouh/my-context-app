import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Navbar extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{ color: theme.syntax, backgroundColor: theme.ui }}>
                <h2>Context App</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'

function BookList() {
    const { books } = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className='book-list' style={{ color: theme.syntax, backgroundColor: theme.bg }}>
            <ul>
                {books.map(book => <li key={book.id} style={{ backgroundColor: theme.ui }}>{book.title}</li>)}
            </ul>
        </div>
    )
}

export default BookList

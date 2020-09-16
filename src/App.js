import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext'
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

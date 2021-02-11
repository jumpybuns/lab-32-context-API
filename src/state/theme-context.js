import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggle = ({ target }) => {
    if (target.checked) setTheme('dark');
    else setTheme('light');
  };

  return (
    <>
      <input type="checkbox" onChange={toggle} />
      <h1>HIIII</h1>
      <ThemeContext.Provider value={{ theme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

import React from 'react';
import { useTheme } from '../../state/theme';

const ThemeToggler = () => {
  const theme = useTheme();

  return <h1>{theme}</h1>;
};

export default ThemeToggler;

import { throwStatement } from '@babel/types';
import React, { useState, useEffect } from 'react';
import { light, dark } from '../components/theme/Theme';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
};

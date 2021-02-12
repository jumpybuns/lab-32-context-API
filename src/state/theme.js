import React, { useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggle = ({ target }) => {
    if (target.checked) setTheme('dark');
    else setTheme('light');
  };
  return (
    <>
      <input type="checkbox" value={{ theme }} onChange={toggle} />
    </>
  );
};

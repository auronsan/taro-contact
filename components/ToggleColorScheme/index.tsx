import { useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon } from '@/components/ActionIcon';

export const ToggleColorScheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ActionIcon onClick={toggleDarkMode}>
        {isDarkMode ? <IconSun fill="orange" /> : <IconMoon />}
      </ActionIcon>
    </>
  );
};

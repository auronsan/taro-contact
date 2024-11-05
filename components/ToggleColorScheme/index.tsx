import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon } from '@/components/ActionIcon';
import { Group } from '@/components/Group';
import { Text } from '@/components/Text';

export const ToggleColorScheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ActionIcon onClick={toggleDarkMode}>
        <Group>
          {isDarkMode ? <IconSun fill="orange" /> : <IconMoon />}
          {isMobile && <Text>Toggle Light/Dark Mode</Text>}
        </Group>
      </ActionIcon>
    </>
  );
};

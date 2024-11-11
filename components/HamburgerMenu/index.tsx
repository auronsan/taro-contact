import React, { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import clsx from 'clsx';
import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Group } from '@/components/Group';
import { Overlay } from '@/components/Overlay';
import { Text } from '@/components/Text';
import classes from './hambugerMenu.module.css';

/**
 * Props for the HamburgerMenu component.
 */
type HamburgerMenuProps = {
  /** The menu content to be rendered inside the hamburger menu. */
  menu: React.ReactNode;
};

/**
 * HamburgerMenu component.
 * @param props - The props for the component.
 * @returns The rendered hamburger menu.
 */
export const HamburgerMenu = (props: HamburgerMenuProps): React.ReactElement => {
  const { menu } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className={classes['hamburger-menu']}>
      <Button onClick={() => setIsOpen(true)}>
        <IconMenu2 />
      </Button>
      <Box
        className={clsx(classes['hamburger-menu-content'], {
          [classes.open]: isOpen,
        })}
      >
        <Group justify="space-between" p={30}>
          <Text>Taro Contact</Text>

          <Button onClick={() => setIsOpen(false)}>
            <IconX />
          </Button>
        </Group>
        {menu}
      </Box>
      {isOpen && <Overlay />}
    </Box>
  );
};

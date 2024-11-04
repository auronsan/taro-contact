import React, { useEffect, useState } from 'react';
import { IconSettings } from '@tabler/icons-react';
import clsx from 'clsx';
import { ActionIcon } from '../ActionIcon';
import classes from './popover.module.css';

export const Popover = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [visible, setVisible] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (visible && !(event.target as Element).closest(`.${classes.content}`)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]);

  return (
    <div className={classes.wrapper}>
      <ActionIcon
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <IconSettings />
      </ActionIcon>
      <div
        className={clsx(classes.content, {
          [classes.visible]: visible,
        })}
      >
        {children}
      </div>
    </div>
  );
};

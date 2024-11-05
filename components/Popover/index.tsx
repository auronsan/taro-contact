import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { ActionIcon } from '@/components/ActionIcon';
import classes from './popover.module.css';

type TPopoverProps = {
  children: React.ReactNode;
  target: React.ReactNode;
};

export const Popover = (props: TPopoverProps) => {
  const { children, target = <></> } = props;
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
        {target}
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

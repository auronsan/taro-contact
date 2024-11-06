import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { ActionIcon } from '@/components/ActionIcon';
import classes from './popover.module.css';

type TPopoverProps = {
  children: React.ReactNode;
  target: React.ReactNode;
  targetId?: string;
};

export const Popover = (props: TPopoverProps) => {
  const { children, target = <></>, targetId } = props;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (visible && !ref.current?.contains(event.target as Node)) {
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
    <div className={classes.wrapper} ref={ref}>
      <ActionIcon
        onClick={() => {
          setVisible(!visible);
        }}
        id={targetId}
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

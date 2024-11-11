import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { ActionIcon } from '@/components/ActionIcon';
import classes from './popover.module.css';

/**
 * Props for the Popover component.
 */
type TPopoverProps = {
  /** The content to be rendered inside the popover. */
  children: React.ReactNode;
  /** The target element to attach the popover to. */
  target: React.ReactNode;
  /** The ID of the target element. */
  targetId?: string;
};

/**
 * Popover component.
 * @param props - The props for the component.
 * @returns The rendered popover.
 */
export const Popover = (props: TPopoverProps) => {
  const { children, target = <></>, targetId } = props;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Handles clicks outside the popover.
   * @param event - The mouse event.
   */
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

import { Box } from '@/components/Box';
import classes from './actionIcon.module.css';

/**
 * Props for the ActionIcon component.
 */
type TActionIconProps = {
  /**
   * Function to be called when the component is clicked.
   */
  onClick?: () => void;
  /**
   * Child elements to be rendered inside the component.
   */
  children?: React.ReactNode;
  /**
   * ID attribute for the component.
   */
  id?: string;
};

/**
 * ActionIcon component.
 * @param props - The props for the component.
 * @returns The rendered component.
 */
export const ActionIcon = (props: TActionIconProps): React.ReactElement => {
  const { onClick, children, id } = props;

  return (
    <Box
      className={classes.root}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (typeof onClick === 'function') {
          onClick();
        }
      }}
      id={id}
      role="button"
    >
      {children}
    </Box>
  );
};

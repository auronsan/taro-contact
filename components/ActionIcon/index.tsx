import { Box } from '@/components/Box';
import classes from './actionIcon.module.css';

type TActionIconProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};
export const ActionIcon = (props: TActionIconProps): React.ReactElement => {
  const { onClick, children } = props;

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
    >
      {children}
    </Box>
  );
};

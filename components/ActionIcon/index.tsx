import { Box } from '@/components/Box';
import classes from './actionIcon.module.css';

type TActionIconProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  id?: string;
};
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

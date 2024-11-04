import { Box } from '@/components/Box';
import { Transition } from '@/components/Transition';
import { Loader } from '../Loader';
import classes from './loadingoverlay.module.css';

export type LoadingOverlayProps = {
  visible: boolean;
};

export const LoadingOverlay = (props: LoadingOverlayProps) => {
  const { visible } = props;

  if (!visible) {
    return <></>;
  }
  return (
    <Transition transition="fade" visible={visible}>
      {(transitionclasses) => (
        <Box style={transitionclasses} className={classes.root}>
          <Loader className={classes.loader} />
          <Box className={classes.overlay} />
        </Box>
      )}
    </Transition>
  );
};

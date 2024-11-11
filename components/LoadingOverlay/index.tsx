import { Box } from '@/components/Box';
import { Loader } from '@/components/Loader';
import { Overlay } from '@/components/Overlay';
import { Transition } from '@/components/Transition';
import classes from './loadingoverlay.module.css';

/**
 * Props for the LoadingOverlay component.
 */
type LoadingOverlayProps = {
  /** Whether the loading overlay is visible. */
  visible: boolean;
};

/**
 * LoadingOverlay component.
 * @param props - The props for the component.
 * @returns The rendered loading overlay.
 */
export const LoadingOverlay = (props: LoadingOverlayProps) => {
  const { visible } = props;

  if (!visible) {
    return <></>;
  }

  return (
    <Transition transition="fade" visible={visible}>
      {(transitionclasses) => (
        <Box style={transitionclasses} className={classes.root}>
          <Loader className={classes.loader} data-testid="loading-overlay" />
          <Overlay />
        </Box>
      )}
    </Transition>
  );
};

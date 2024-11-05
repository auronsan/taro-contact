import React from 'react';
import { Box } from './index';

export default {
  title: 'components/Box',
  component: Box,
};

export const WithChildren = () => <Box>Content</Box>;

export const WithCustomClassName = () => (
  <Box className="custom-class" id="first-child">
    Content
  </Box>
);

export const WithInlineStyles = () => (
  <Box style={{ backgroundColor: 'red' }} id="first-child">
    Content
  </Box>
);

export const AsADifferentComponent = () => (
  <Box component="span" id="first-child">
    Content
  </Box>
);

export const WithMarginAndPadding = () => (
  <Box m={10} p={20} id="first-child">
    Content
  </Box>
);

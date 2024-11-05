import Grid from './index';

export default {
  title: 'components/Grid',
  component: Grid,
};

export const Usage = () => (
  <Grid>
    <Grid.Col>Col 1</Grid.Col>
    <Grid.Col>Col 2</Grid.Col>
    <Grid.Col>Col 3</Grid.Col>
  </Grid>
);

export const Usage3Columns = () => (
  <Grid columns={3}>
    <Grid.Col>Col 1</Grid.Col>
    <Grid.Col>Col 2</Grid.Col>
    <Grid.Col>Col 3</Grid.Col>
  </Grid>
);

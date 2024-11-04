import { Anchor } from '@/components/Anchor';
import { Text } from '@/components/Text';
import { Title } from '@/components/Title';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title}>
        Welcome to{' '}
        <Text component="span" gradient={{ from: '#93C04B', to: '#08c654' }} size="inherit">
          Taro Contact
        </Text>
      </Title>
      <Text ta="center" size="lg" component="p">
        <Anchor href="/contacts" size="lg">
          Go to Contacts
        </Anchor>
      </Text>
    </>
  );
}

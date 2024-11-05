import { Box } from '@/components/Box';
import { Container } from '@/components/Container';
import Tabs from '@/components/Tabs';
import { Header } from '@/containers/Header';

export default function Layout({
  favorite,
  list,
}: {
  favorite: React.ReactNode;
  list: React.ReactNode;
}) {
  return (
    <Container fluid>
      <Header />
      <Box p={30}>
        <Tabs
          tabs={[
            {
              label: 'List',
              key: 'list',
            },
            {
              label: 'Favorite',
              key: 'favorite',
            },
          ]}
          tabKey="tab-contact"
        >
          <>{list}</>
          <>{favorite}</>
        </Tabs>
      </Box>
    </Container>
  );
}

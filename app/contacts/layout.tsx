import { Box } from '@/components/Box';
import { Container } from '@/components/Container';
import { SortButton } from '@/components/SortButton';
import { Tabs } from '@/components/Tabs';
import { Header } from '@/containers/Header';

export default function Layout({
  favorite,
  list,
}: {
  favorite: React.ReactNode;
  list: React.ReactNode;
}) {
  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',
        height: '100%',
      }}
    >
      <Header />
      <Box px={30} py={10}>
        <Tabs
          tabs={[
            {
              label: 'List',
              key: 'list',
              icon: 'list',
            },
            {
              label: 'Favorite',
              key: 'favorite',
              icon: 'star',
            },
          ]}
          tabKey="tab-contact"
          rightContent={
            <>
              <SortButton />
            </>
          }
        >
          <>{list}</>
          <>{favorite}</>
        </Tabs>
      </Box>
    </Container>
  );
}

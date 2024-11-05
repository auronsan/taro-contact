'use client';

import { Suspense, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMediaQuery } from '@mantine/hooks';
import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Group } from '@/components/Group';

type Tab = {
  key: string;
  label: string;
};

type TabsProps = {
  children: React.ReactNode[];
  tabs: Tab[];
  tabKey?: string;
  rightContent?: React.ReactNode;
};

const TabsComponent = (props: TabsProps): React.ReactElement => {
  const { children, tabs, tabKey = 'tab', rightContent = <></> } = props;

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const activeTab = searchParams.get(tabKey);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const router = useRouter();

  const activeTabIndex = useMemo(() => {
    if (!tabs || !activeTab) return 0;
    return tabs.findIndex((t) => t.key === activeTab);
  }, [tabs, activeTab]);

  const handleTabClick = (key: string) => {
    const query = new URLSearchParams(searchParams);
    query.set(tabKey, key);
    router.push(`${pathName}?${query.toString()}`);
  };

  return (
    <>
      <Group justify="space-between" fullWidth>
        <Group gap="sm" fullWidth>
          {tabs?.map((tab, index) => (
            <Button
              key={`tab-${tab.key}`}
              onClick={() => handleTabClick(tab.key)}
              v={index !== activeTabIndex ? 'outline' : 'filled'}
              flex={isMobile ? 1 : undefined}
            >
              {tab.label}
            </Button>
          ))}
        </Group>
        {!isMobile && <Box>{rightContent}</Box>}
      </Group>
      {isMobile && (
        <Box flex={1} py={10}>
          {rightContent}
        </Box>
      )}

      <Box>{children[activeTabIndex]}</Box>
    </>
  );
};

export const Tabs = (props: TabsProps) => (
  <Suspense>
    <TabsComponent {...props} />
  </Suspense>
);

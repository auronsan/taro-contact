'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
};

const Tabs = (props: TabsProps): React.ReactElement => {
  const { children, tabs } = props;

  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab');

  const router = useRouter();

  const activeTabIndex = useMemo(() => {
    if (!tabs || !activeTab) return 0;
    return tabs.findIndex((t) => t.key === activeTab);
  }, [tabs, activeTab]);

  const handleTabClick = (key: string) => {
    router.push(`/contacts/?tab=${key}`);
  };

  return (
    <>
      <Group gap="sm" mb={10}>
        {tabs?.map((tab, index) => (
          <Button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            v={index !== activeTabIndex ? 'outline' : 'filled'}
          >
            {tab.label}
          </Button>
        ))}
      </Group>
      <Box>{children[activeTabIndex]}</Box>
    </>
  );
};

export default Tabs;

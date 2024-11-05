'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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

const Tabs = (props: TabsProps): React.ReactElement => {
  const { children, tabs, tabKey = 'tab', rightContent = <></> } = props;

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const activeTab = searchParams.get(tabKey);

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
      <Group justify="space-between" mb={10}>
        <Group gap="sm">
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

        {rightContent}
      </Group>

      <Box>{children[activeTabIndex]}</Box>
    </>
  );
};

export default Tabs;

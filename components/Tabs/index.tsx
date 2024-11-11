'use client';

import { Suspense, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMediaQuery } from '@mantine/hooks';
import { IconList, IconStar } from '@tabler/icons-react';
import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Group } from '@/components/Group';
import { Text } from '@/components/Text';

/**
 * Props for the Tabs component.
 */
type Tab = {
  /**
   * The unique key for the tab.
   */
  key: string;

  /**
   * The label for the tab.
   */
  label: string;

  /**
   * The icon for the tab.
   */
  icon?: string;
};

/**
 * Props for the Tabs component.
 */
type TabsProps = {
  /**
   * The children of the Tabs component.
   */
  children: React.ReactNode[];

  /**
   * The tabs for the Tabs component.
   */
  tabs: Tab[];

  /**
   * The key for the tab parameter in the URL.
   */
  tabKey?: string;

  /**
   * The content to be displayed on the right side of the Tabs component.
   */
  rightContent?: React.ReactNode;
};

/**
 * Tabs component.
 * @param props - The props for the component.
 * @returns The rendered Tabs component.
 */
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

  /**
   * Handles the click event for a tab.
   * @param key - The key of the tab that was clicked.
   */
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
              <Group gap="xs">
                {tab.icon && stringToIcon(tab.icon)}
                <Text> {tab.label}</Text>
              </Group>
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

/**
 * Tabs component that uses the TabsComponent component.
 * @param props - The props for the component.
 * @returns The rendered Tabs component.
 */
export const Tabs = (props: TabsProps) => (
  <Suspense>
    <TabsComponent {...props} />
  </Suspense>
);

const stringToIcon = (icon: string) => {
  switch (icon) {
    case 'list':
      return <IconList />;
    case 'star':
      return <IconStar />;
    default:
      return '';
  }
};

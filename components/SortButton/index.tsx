'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IconSortAZ, IconSortZA } from '@tabler/icons-react';
import { Box } from '@/components/Box';
import { Group } from '@/components/Group';
import classes from './sortButton.module.css';

type TSortOption = 'id' | 'first_name' | 'last_name';
type TSortDirection = 'asc' | 'desc';

export const SortButton = (): React.ReactElement => {
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const router = useRouter();
  const sortParams = searchParams.get('sort');
  const orderParams = searchParams.get('order');

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const newSortSplit = newSort.split('.');
    const newSortOption = newSortSplit[0] as TSortOption;
    const newSortDirection = newSortSplit[1] as TSortDirection;
    const query = new URLSearchParams(searchParams);
    query.set('sort', newSortOption);
    query.set('order', newSortDirection);
    router.push(`${pathName}?${query.toString()}`);
  };

  return (
    <>
      <Box p={5}>
        <Group wrap="nowrap">
          <select
            value={`${sortParams}.${orderParams}`}
            onChange={handleSort}
            className={classes['custom-select']}
          >
            <option value="id.asc">ID (asc)</option>
            <option value="first_name.asc">First Name (asc)</option>
            <option value="last_name.asc">Last Name (asc)</option>
            <option value="first_name.desc">First Name (desc)</option>
            <option value="last_name.desc">Last Name (desc)</option>
          </select>
          {orderParams === 'asc' ? <IconSortAZ size={34} /> : <IconSortZA size={34} />}
        </Group>
      </Box>
    </>
  );
};

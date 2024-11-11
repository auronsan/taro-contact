'use client';

import { useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Box } from '@/components/Box';
import { Group } from '@/components/Group';
import classes from './sortButton.module.css';

/**
 * Sort option.
 */
type TSortOption = 'id' | 'first_name' | 'last_name';

/**
 * Sort direction.
 */
type TSortDirection = 'asc' | 'desc';

/**
 * SortButton component.
 * @returns The rendered sort button.
 */
export const SortButton = (): React.ReactElement => {
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const router = useRouter();
  const sortParams = searchParams.get('sort');
  const orderParams = searchParams.get('order');

  const selectRef = useRef<HTMLSelectElement>();

  /**
   * Handles the sort option change.
   * @param e - The change event.
   */
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
      <Box>
        <Group>
          <select
            value={`${sortParams}.${orderParams}`}
            onChange={handleSort}
            className={classes['custom-select']}
            ref={(r) => {
              if (r) {
                selectRef.current = r;
              }
            }}
          >
            <option value="id.asc" className={classes['custom-option']}>
              ID &#x20;&#x2191;
            </option>
            <option value="first_name.asc" className={classes['custom-option']}>
              First Name &#x20;&#x2191;
            </option>
            <option value="first_name.desc" className={classes['custom-option']}>
              First Name &#x20;&#x2193;
            </option>
            <option value="last_name.asc" className={classes['custom-option']}>
              Last Name &#x20;&#x2191;
            </option>
            <option value="last_name.desc" className={classes['custom-option']}>
              Last Name &#x20;&#x2193;
            </option>
          </select>
        </Group>
      </Box>
    </>
  );
};

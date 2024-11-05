import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IconSearch, IconX } from '@tabler/icons-react';
import { ActionIcon } from '@/components/ActionIcon';
import { Box } from '@/components/Box';
import { Group } from '@/components/Group';
import { TextInput } from '@/components/TextInput';

export const SearchBar = (): React.ReactElement => {
  const searchParams = useSearchParams();
  const queryParam = searchParams?.get('q');
  const pathName = usePathname();

  const [searchTerm, setSearchTerm] = useState(queryParam || '');
  const router = useRouter();

  const searchRef = useRef<HTMLInputElement>();

  const handleSearch = (search: string) => {
    const query = new URLSearchParams(searchParams);
    query.set('q', search);
    router.push(`${pathName}?${query.toString()}`);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      handleSearch(searchTerm);
    }, 500); // Debounce delay of 500ms

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchTerm, router]);

  return (
    <Group wrap="nowrap">
      <Box flex={1}>
        <TextInput
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={(r) => {
            if (r) {
              searchRef.current = r;
            }
          }}
          defaultValue={queryParam || ''}
        />
      </Box>
      {!searchTerm && (
        <ActionIcon>
          <IconSearch />
        </ActionIcon>
      )}

      {searchTerm && (
        <ActionIcon
          onClick={() => {
            setSearchTerm('');
            if (searchRef.current) {
              searchRef.current.value = '';
            }
          }}
        >
          <IconX />
        </ActionIcon>
      )}
    </Group>
  );
};

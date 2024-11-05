import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Box } from '@/components/Box';
import { TextInput } from '@/components/TextInput';

export const SearchBar = (): React.ReactElement => {
  const searchParams = useSearchParams();
  const queryParam = searchParams?.get('q');
  const pathName = usePathname();

  const [searchTerm, setSearchTerm] = useState(queryParam || '');
  const router = useRouter();

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
    <Box>
      <TextInput placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
    </Box>
  );
};

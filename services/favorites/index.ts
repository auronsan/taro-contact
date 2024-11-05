import { useLocalStorage } from '@mantine/hooks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { AddFavoritePayload, GetFavoritePayload, TFavorite } from './types';

export const FAVORITE_QUERY_KEY = 'favorites';

const useFavoriteStorage = () =>
  useLocalStorage<TFavorite[]>({
    key: FAVORITE_QUERY_KEY,
    defaultValue: [],
  });

const getFavorites = async (payload: GetFavoritePayload): Promise<boolean> => {
  const { data, favorite } = payload;
  if (favorite.includes(data)) {
    return true;
  }
  return false;
};

export const useGetFavorites = (id: string) => {
  const [currentFavorite] = useFavoriteStorage();

  return useQuery({
    queryKey: [FAVORITE_QUERY_KEY, id],
    queryFn: () =>
      getFavorites({
        data: id,
        favorite: currentFavorite,
      }),
  });
};

export const toggleFavorite = async (payload: AddFavoritePayload) => {
  const { data, favorite, setFavorite } = payload;

  if (favorite.includes(data)) {
    setFavorite(favorite.filter((item) => item !== data));
    return true;
  }

  setFavorite([...favorite, data]);
  return true;
};

export const useMutateToggleFavorite = (id: string) => {
  const queryClient = useQueryClient();
  const [currentFavorite, setCurrentFavorite] = useFavoriteStorage();

  return useMutation({
    mutationFn: () =>
      toggleFavorite({
        data: id,
        favorite: currentFavorite,
        setFavorite: setCurrentFavorite,
      }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [FAVORITE_QUERY_KEY, id] });
    },
  });
};

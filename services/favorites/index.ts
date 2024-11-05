import { useMemo } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { useMutation } from '@tanstack/react-query';
import type { AddFavoritePayload, TFavorite } from './types';

export const FAVORITE_QUERY_KEY = 'favorites';

const useFavoriteStorage = () =>
  useLocalStorage<TFavorite[]>({
    key: FAVORITE_QUERY_KEY,
    defaultValue: [],
    getInitialValueInEffect: true,
  });

export const useGetFavorite = (id: string) => {
  const [currentFavorite] = useFavoriteStorage();
  const favorite = useMemo(() => currentFavorite?.includes(id), [currentFavorite, id]);
  return favorite;
};

export const useGetFavorites = () => {
  const [currentFavorite] = useFavoriteStorage();
  return currentFavorite;
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
  const [currentFavorite, setCurrentFavorite] = useFavoriteStorage();

  return useMutation({
    mutationFn: () =>
      toggleFavorite({
        data: id,
        favorite: currentFavorite,
        setFavorite: setCurrentFavorite,
      }),
  });
};

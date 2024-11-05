import { useMemo } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/providers/ToastProvider';
import { FAVORITE_QUERY_KEY } from './constants';
import type { AddFavoritePayload, TFavorite } from './types';

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

export const useMutateToggleFavorite = (
  id: string,
  { isFavorite = false }: { isFavorite?: boolean }
) => {
  const [currentFavorite, setCurrentFavorite] = useFavoriteStorage();
  const { showToast, showError } = useToast();

  return useMutation({
    mutationFn: () =>
      toggleFavorite({
        data: id,
        favorite: currentFavorite,
        setFavorite: setCurrentFavorite,
      }),
    onSuccess: () => {
      showToast({
        message: `Successfully ${!isFavorite ? 'unfavorite' : 'favorite'} ${id}`,
      });
    },
    onError: (e) => {
      showError(e.message);
    },
  });
};

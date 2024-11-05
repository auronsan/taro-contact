export type TFavorite = string;

export type AddFavoritePayload = {
  data: TFavorite;
  favorite: TFavorite[];
  setFavorite: (favorite: TFavorite[]) => void;
};

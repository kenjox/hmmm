export type Recipe = {
  id: number;
  title: string;
  duration: number;
  photoUrl: string;
  categories: { id: number; name: string }[];
  ingredients: string[];
  steps: string[];
};

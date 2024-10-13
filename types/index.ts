export type Category = { id: number; name: string };

export type Recipe = {
  id: number;
  title: string;
  duration: number;
  photoUrl: string;
  categories: Category[];
  ingredients: string[];
  steps: string[];
};

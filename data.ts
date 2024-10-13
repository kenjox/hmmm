import { Recipe } from './types';

export const data: Recipe[] = [
  {
    id: 1,
    title: 'Pasta bolognese',
    duration: 30,
    photoUrl:
      'https://images.unsplash.com/photo-1695742434600-e0f59629d2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: [
      {
        id: 1,
        name: 'Vegetable',
      },
    ],
    ingredients: [
      '200g pasta',
      '100g minced meat',
      '1 onion',
      '2 cloves garlic',
      '400g canned tomatoes',
      'Salt',
      'Pepper',
      'Olive oil',
    ],
    steps: [
      'Boil pasta according to package instructions.',
      'Heat olive oil in a pan and sauté onions and garlic.',
      'Add minced meat and cook until browned.',
      'Add canned tomatoes, salt, and pepper. Simmer for 20 minutes.',
      'Serve sauce over pasta.',
    ],
  },
  {
    id: 2,
    title: 'Chicken Curry',
    duration: 45,
    photoUrl:
      'https://images.unsplash.com/photo-1697155406127-76096502d69d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: [
      {
        id: 2,
        name: 'Meat',
      },
    ],
    ingredients: [
      '500g chicken breast',
      '1 onion',
      '2 cloves garlic',
      '1 tbsp curry powder',
      '400ml coconut milk',
      'Salt',
      'Pepper',
      'Olive oil',
    ],
    steps: [
      'Cut chicken into bite-sized pieces.',
      'Heat olive oil in a pan and sauté onions and garlic.',
      'Add chicken and cook until browned.',
      'Add curry powder and cook for 1 minute.',
      'Add coconut milk, salt, and pepper. Simmer for 30 minutes.',
      'Serve with rice.',
    ],
  },
  {
    id: 3,
    title: 'Beef Stew',
    duration: 60,
    photoUrl:
      'https://images.unsplash.com/photo-1664741662725-bd131742b7b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: [
      {
        id: 3,
        name: 'Meat',
      },
    ],
    ingredients: [
      '500g beef chunks',
      '2 carrots',
      '2 potatoes',
      '1 onion',
      '2 cloves garlic',
      '500ml beef broth',
      'Salt',
      'Pepper',
      'Olive oil',
    ],
    steps: [
      'Heat olive oil in a pot and sauté onions and garlic.',
      'Add beef chunks and cook until browned.',
      'Add carrots and potatoes, cook for 5 minutes.',
      'Add beef broth, salt, and pepper. Simmer for 45 minutes.',
      'Serve hot.',
    ],
  },
  {
    id: 4,
    title: 'Caesar Salad',
    duration: 20,
    photoUrl:
      'https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: [
      {
        id: 4,
        name: 'Salad',
      },
    ],
    ingredients: [
      '1 romaine lettuce',
      '50g parmesan cheese',
      '1 cup croutons',
      'Caesar dressing',
      'Salt',
      'Pepper',
    ],
    steps: [
      'Chop romaine lettuce.',
      'Grate parmesan cheese.',
      'In a large bowl, combine lettuce, parmesan, and croutons.',
      'Add Caesar dressing, salt, and pepper. Toss to combine.',
      'Serve immediately.',
    ],
  },
  {
    id: 5,
    title: 'Vegetable Stir Fry',
    duration: 25,
    photoUrl:
      'https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: [
      {
        id: 1,
        name: 'Vegetable',
      },
    ],
    ingredients: [
      '1 bell pepper',
      '1 carrot',
      '1 broccoli',
      '2 cloves garlic',
      '2 tbsp soy sauce',
      'Salt',
      'Pepper',
      'Olive oil',
    ],
    steps: [
      'Cut bell pepper, carrot, and broccoli into bite-sized pieces.',
      'Heat olive oil in a pan and sauté garlic.',
      'Add vegetables and cook for 5-7 minutes.',
      'Add soy sauce, salt, and pepper. Cook for another 2 minutes.',
      'Serve hot.',
    ],
  },
];

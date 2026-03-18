import React from 'react';

export interface Game {
  id: string;
  title: string;
  category: string;
  rating: number;
  players: string;
  image: string;
  description: string;
  tags: string[];
}

export const GAMES: Game[] = [
  {
    id: '1',
    title: 'Cyber Drift 2077',
    category: 'Racing',
    rating: 4.8,
    players: '1.2M',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    description: 'High-speed neon racing through the streets of a futuristic metropolis.',
    tags: ['Sci-Fi', 'Multiplayer', 'Fast-Paced']
  },
  {
    id: '2',
    title: 'Shadow Realm',
    category: 'RPG',
    rating: 4.9,
    players: '800K',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    description: 'An epic journey through a world consumed by darkness and ancient magic.',
    tags: ['Fantasy', 'Open World', 'Story-Rich']
  },
  {
    id: '3',
    title: 'Tactical Strike',
    category: 'Action',
    rating: 4.7,
    players: '2.5M',
    image: 'https://images.unsplash.com/photo-1552824734-80607f76593c?auto=format&fit=crop&q=80&w=800',
    description: 'Competitive first-person shooter with realistic physics and team tactics.',
    tags: ['FPS', 'Competitive', 'Tactical']
  },
  {
    id: '4',
    title: 'Stellar Voyager',
    category: 'Strategy',
    rating: 4.6,
    players: '450K',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=800',
    description: 'Build your empire across the stars in this deep space strategy simulator.',
    tags: ['Space', 'Management', '4X']
  },
  {
    id: '5',
    title: 'Mystic Quest',
    category: 'Adventure',
    rating: 4.5,
    players: '300K',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    description: 'Solve intricate puzzles and discover hidden secrets in a magical forest.',
    tags: ['Puzzle', 'Exploration', 'Relaxing']
  },
  {
    id: '6',
    title: 'Neon Arena',
    category: 'Action',
    rating: 4.8,
    players: '1.5M',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800',
    description: 'Fast-paced arena combat with vibrant neon aesthetics and synthwave beats.',
    tags: ['Arcade', 'Brawler', 'Neon']
  }
];

export const CATEGORIES = ['All', 'Action', 'RPG', 'Racing', 'Strategy', 'Adventure'];

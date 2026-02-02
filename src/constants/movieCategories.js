import {
  FilmIcon,
  FireIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export const categories = [
  { name: "Populaire", icon: FireIcon, path: "/category/popular" },
  { name: "Mieux notés", icon: StarIcon, path: "/category/top-rated" },
  { name: "À venir", icon: FilmIcon, path: "/category/upcoming" },
  { name: "Récompensés", icon: TrophyIcon, path: "/category/awarded" },
];

export const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Aventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comédie" },
  { id: 80, name: "Crime" },
  { id: 18, name: "Drame" },
  { id: 14, name: "Fantastique" },
  { id: 27, name: "Horreur" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science-Fiction" },
];

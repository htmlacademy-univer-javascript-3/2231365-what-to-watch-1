import { Duration } from '../types/duration';
import { Film } from '../types/film';
import { REVIEWS } from './user-reviews';

const actors = [
  'Jhun Li',
  'Samanta Klee',
  'Zhin Xiao'
];
const year = 2022;
const director = 'Lorem Ipsum';
const duration: Duration = {
  hours: 1,
  minutes: 17,
  seconds: 24
};
const description = 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum';
const posterPath = 'img/the-grand-budapest-hotel-poster.jpg';
const backgroundPath = 'img/bg-the-grand-budapest-hotel.jpg';
const videoPath = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

export const FILMS: Film[] = [
  {
    id: 'the-grand-budapest-hotel',
    name: 'The Grand Budapest Hotel',
    genre: 'Comedy',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/bg-the-grand-budapest-hotel.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'bohemian-rhapsody',
    name: 'Bohemian Rhapsody',
    genre: 'Thriller',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/bohemian-rhapsody.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'fantastic-beasts-the-crimes-of-grindelwald',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'Crime',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'macbeth',
    name: 'Macbeth',
    genre: 'Crime',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/macbeth.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'aviator',
    name: 'Aviator',
    genre: 'Crime',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/aviator.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'we-need-to-talk-about-kevin',
    name: 'We need to talk about Kevin',
    genre: 'Crime',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/we-need-to-talk-about-kevin.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'what-we-do-in-the-shadows',
    name: 'What We Do in the Shadows',
    genre: 'Crime',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/what-we-do-in-the-shadows.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'revenant',
    name: 'Revenant',
    genre: 'Thriller',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/revenant.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'johnny-english',
    name:'Johnny English',
    genre: 'Thriller',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/johnny-english.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'shutter-island',
    name: 'Shutter Island',
    genre: 'Thriller',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/shutter-island.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'pulp-fiction',
    name: 'Pulp Fiction',
    genre: 'Thriller',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/pulp-fiction.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'no-country-for-old-men',
    name: 'No Country for Old Men',
    genre: 'Comedy',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/no-country-for-old-men.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'snatch',
    name: 'Snatch',
    genre: 'Comedy',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/snatch.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'moonrise-kingdom',
    name: 'Moonrise Kingdom',
    genre: 'Comedy',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/moonrise-kingdom.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'seven-years-in-tibet',
    name: 'Seven Years in Tibet',
    genre: 'Comedy',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/seven-years-in-tibet.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'midnight-special',
    name: 'Midnight Special',
    genre: 'Comedy',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/midnight-special.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'war-of-the-worlds',
    name: 'War of the Worlds',
    genre: 'Comedy',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/war-of-the-worlds.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'dardjeeling-limited',
    name: 'Dardjeeling Limited',
    genre: 'Thriller',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/dardjeeling-limited.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'orlando',
    name: 'Orlando',
    genre: 'Thriller',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/orlando.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'mindhunter',
    name: 'Mindhunter',
    genre: 'Drama',
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/mindhunter.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  }
];


import { Duration } from '../types/duration';
import { Film } from '../types/film';
import { REVIEWS } from './user-reviews';
import { Genre } from '../types/genre.enum';

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
//const videoPath = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';
const videoPath = 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm';

export const FILMS: Film[] = [
  {
    id: 'the-grand-budapest-hotel',
    name: 'The Grand Budapest Hotel',
    genre: Genre.COMEDY,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    videoPath: videoPath,
    cardPath: 'img/the-grand-budapest-hotel.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: REVIEWS,
  },
  {
    id: 'bohemian-rhapsody',
    name: 'Bohemian Rhapsody',
    genre: Genre.THRILLER,
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
    name: 'Fantastic Beasts: The crimes of Grindelwald',
    genre: Genre.CRIME,
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
    genre: Genre.CRIME,
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
    genre: Genre.CRIME,
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
    genre: Genre.CRIME,
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
    genre: Genre.CRIME,
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
    genre: Genre.THRILLER,
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
    genre: Genre.THRILLER,
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
    genre: Genre.THRILLER,
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
    genre: Genre.THRILLER,
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
    genre: Genre.COMEDY,
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
    genre: Genre.COMEDY,
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
    genre: Genre.COMEDY,
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
    genre: Genre.COMEDY,
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
    genre: Genre.COMEDY,
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
    genre: Genre.COMEDY,
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
    genre: Genre.THRILLER,
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
    genre: Genre.THRILLER,
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
    genre: Genre.CRIME,
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

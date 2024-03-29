import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import {
  getMyMovies,
  loadComments,
  loadMovie,
  loadMovies, loadPromoMovie,
  loadSimilarMovies,
  redirectToRoute,
  requireAuthorization,
  setDataLoadedStatus, userLogout
} from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthStatus } from '../types/auth-status.enum';
import { APIRoute } from '../types/api-route.enum';
import { Film } from '../types/film';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { MovieData } from '../types/movie-data';
import { UserReview } from '../types/user-review';
import { CommentData } from '../types/comment-data';
import { Loading } from '../types/loading.enum';

export const updateMovieInMyList = createAsyncThunk<void, {movieId: number; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/updateMovieInMyList',
  async ({movieId, status}, {extra: api}) => {
    await api.post(`favorite/${movieId}/${status}`);
  },
);

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>('/films');
    dispatch(setDataLoadedStatus({loadType: Loading.MOVIES, isLoading: true}));
    dispatch(loadMovies(data));
    dispatch(setDataLoadedStatus({loadType: Loading.MOVIES, isLoading: false}));
  },
);

export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>('/favorite');
    dispatch(setDataLoadedStatus({loadType: Loading.FAVORITE, isLoading: true}));
    dispatch(getMyMovies(data));
    dispatch(setDataLoadedStatus({loadType: Loading.FAVORITE, isLoading: false}));
  },
);

export const fetchSimilarMoviesAction = createAsyncThunk<void, {movieId: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async ({movieId}, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus({loadType: Loading.SIMILAR, isLoading: true}));
    const {data} = await api.get<Film[]>(`films/${movieId}/similar`);

    dispatch(loadSimilarMovies(data));
    dispatch(setDataLoadedStatus({loadType: Loading.SIMILAR, isLoading: false}));
  },
);

export const fetchMovieAction = createAsyncThunk<void, {movieId: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovie',
  async ({movieId}, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus({loadType: Loading.MOVIE, isLoading: true}));
    const {data} = await api.get<Film>(`films/${movieId}`);

    dispatch(loadMovie(data));
    dispatch(setDataLoadedStatus({loadType: Loading.MOVIE, isLoading: false}));
  },
);

export const fetchPromoMovieAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoMovie',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus({loadType: Loading.PROMO, isLoading: true}));
    const {data} = await api.get<Film>('promo');

    dispatch(loadPromoMovie(data));
    dispatch(setDataLoadedStatus({loadType: Loading.PROMO, isLoading: false}));
  },
);

export const fetchMovieCommentsAction = createAsyncThunk<void, MovieData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovieComments',
  async ({movieId}, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus({loadType: Loading.COMMENTS, isLoading: true}));
    const {data} = await api.get<UserReview[]>(`comments/${movieId}`);

    dispatch(loadComments(data));
    dispatch(setDataLoadedStatus({loadType: Loading.COMMENTS, isLoading: false}));
  },
);

export const addCommentAction = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addComment',
  async ({comment, rating, movieId}, {extra: api}) => {
    await api.post<{comment: string; rating: number}[]>(`comments/${movieId}`, {comment, rating});
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get('/login');
      dispatch(requireAuthorization(AuthStatus.AUTH));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NO_AUTH));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>('/login', {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthStatus.AUTH));
    dispatch(redirectToRoute('/'));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthStatus.NO_AUTH));
    dispatch(userLogout());
  },
);

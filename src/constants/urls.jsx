import { baseURL, API_KEY} from '../constants/constants'

export const originals = `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const trending = `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const horrorMovies = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romanceMovies = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentaries = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const comedyMovies = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`;
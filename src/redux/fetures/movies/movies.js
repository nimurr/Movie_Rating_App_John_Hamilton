import { apiSlice } from "../../api/apiSlice";

const movies = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => ({
                url: `/movies`,
                method: "GET",
            }),
        }),
        getMovie: builder.query({
            query: (id) => ({
                url: `/movies/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetMoviesQuery , useGetMovieQuery } = movies;
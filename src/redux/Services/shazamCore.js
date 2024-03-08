import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '7d8178189amsh40f40265609fe5ap1e205fjsne71f7c09ada3',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     data.map(item => console.log(item))
//     .catch(err => console.error(err));



    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key','7d8178189amsh40f40265609fe5ap1e205fjsne71f7c09ada3')
            
              return headers;
            },
        }),   
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () =>
                 '/charts/track' }),

             getSongDetails: builder.query({ query: ({ songid })=> `/songs/v2/get-details?track_id=${songid}` }),


             getSongRelated: builder.query({ query: ({ songid })=> `/tracks/related?track_id=${songid}`}),


            getArtistDetails: builder.query({ query: ({ artistId })=>`/artists/details?artist_id=${artistId}` }),


            getSongsByCountry: builder.query({ query: (CountryCode) => '/charts/country?country_Code=${countryCode}' }),

        }), 
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
    } = shazamCoreApi; 



//     import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // First API instance
// export const apiInstance1 = createApi({
//   reducerPath: 'apiInstance1',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.example.com/endpoint1', // Specify the first base URL
//     prepareHeaders: (headers) => {
//       // Custom headers for the first API instance
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     // Define endpoints for the first API instance
//     getFirstApiData: builder.query({ query: () => '/path1' }),
//   }),
// });

// export const { useGetFirstApiDataQuery } = apiInstance1;

// // Second API instance
// export const apiInstance2 = createApi({
//   reducerPath: 'apiInstance2',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.example.com/endpoint2', // Specify the second base URL
//     prepareHeaders: (headers) => {
//       // Custom headers for the second API instance
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     // Define endpoints for the second API instance
//     getSecondApiData: builder.query({ query: () => '/path2' }),
//   }),
// });

// export const { useGetSecondApiDataQuery } = apiInstance2;

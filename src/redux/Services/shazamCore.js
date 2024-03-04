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
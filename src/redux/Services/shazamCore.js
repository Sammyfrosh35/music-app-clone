import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '7d8178189amsh40f40265609fe5ap1e205fjsne71f7c09ada3',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/list', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key','7d8178189amsh40f40265609fe5ap1e205fjsne71f7c09ada3')
            
              return headers;
            }
            
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/list' })
        })
    })

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;
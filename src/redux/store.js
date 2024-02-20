import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { shazamCoreApi } from './Services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultmiddleware) => getDefaultmiddleware().concat(shazamCoreApi.middleware),
});

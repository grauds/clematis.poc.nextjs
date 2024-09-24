import { combineSlices, configureStore, createSlice, Reducer } from '@reduxjs/toolkit'

import { IImage } from "./model";
import { uselessApi } from './features/text/textSlice';

export type GlobalState = {
    images: IImage[]; // a list of ducks' images
}

export const initialState: GlobalState = {
    images: [{src: "https://random-d.uk/api/34.jpg"},
        {src: "https://random-d.uk/api/35.jpg"}, 
        {src: "https://random-d.uk/api/36.jpg"},
        {src: "https://random-d.uk/api/39.jpg"},
        {src: "https://random-d.uk/api/40.jpg"}, 
        {src: "https://random-d.uk/api/41.jpg"}
    ]
}
/* We don't use this any longer

export const rootReducer: Reducer<GlobalState> = (
    state = initialState,
    action
  ) => {
    switch(action.type) {

        default:
            return state;
    }
}
*/
export const rootSlice = createSlice({
    name: "rootStore",
    initialState: initialState,
    reducers: {
      getData: (state, action) => {
        {
            switch(action.type) {
                // TODO: add actions for images
                default:
                    return state;
            }
        }
      }
    }
  });

export const makeStore = () => {
  return configureStore({
    reducer: combineSlices(rootSlice, uselessApi),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(uselessApi.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


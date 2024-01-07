import { configureStore } from "@reduxjs/toolkit";

import { todoApi } from "./api/todoApi";
import isOpenSlice from "./slice/isOpenSlice";
import searchSlice from "./slice/searchSlice";

export const store = configureStore({
    reducer: {
        searchSlice,
        isOpenSlice,
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

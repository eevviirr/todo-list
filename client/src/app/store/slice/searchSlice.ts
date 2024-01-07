import { createSlice } from "@reduxjs/toolkit";

interface IInitial {
    search: string;
}

const initialState: IInitial = {
    search: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, { payload }) => {
            state.search = payload;
        },
    },
});

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;

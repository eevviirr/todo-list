import { createSlice } from "@reduxjs/toolkit";

interface IData {
    id: string;
    title: string;
    description: string;
    status: string;
}
interface IInitial {
    isOpen: boolean;
    isEdit: {
        isEdit: boolean;
        data: null | IData;
    };
}

const initialState: IInitial = {
    isOpen: false,
    isEdit: { isEdit: false, data: null },
};

const isOpenSlice = createSlice({
    name: "open",
    initialState,
    reducers: {
        setOpen: (state, { payload }) => {
            state.isOpen = payload;
        },
        setEdit: (state, { payload }) => {
            state.isEdit = payload;
        },
    },
});

export default isOpenSlice.reducer;
export const { setOpen, setEdit } = isOpenSlice.actions;

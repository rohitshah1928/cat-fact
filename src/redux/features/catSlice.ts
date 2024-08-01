import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface CatState {
    cateImage: string;
    catFact: string;
    likedFact: string[];
    isLoading: boolean;
}

const initialState: CatState = {
    cateImage: '',
    catFact: '',
    likedFact: [],
    isLoading: true,
};

export const getCatFactData = createAsyncThunk('cat/catFact', async () => {
    try {
        const factResponse = await axios.get('https://catfact.ninja/fact');
        const imageResponse = await axios.get('https://api.thecatapi.com/v1/images/search');

        return { fact: factResponse.data.fact, image: imageResponse.data[0].url };

    } catch (error) {
        console.log("error", error);
        throw error;
    }
});

const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        addLike: (state) => {
            state.likedFact.push(state.catFact);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCatFactData.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.catFact = payload.fact;
                    state.cateImage = payload.image;
                    state.isLoading = false;
                }
            })
            .addCase(getCatFactData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCatFactData.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { addLike } = catSlice.actions;
export default catSlice.reducer;

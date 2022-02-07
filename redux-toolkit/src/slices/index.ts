import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import {store} from "../../redux_basics/store";

export default configureStore({
    reducer: {
        // counter – имя внутри объекта состояния state.counter
        counter: counterReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
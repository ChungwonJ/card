import { configureStore, createSlice } from '@reduxjs/toolkit';

// 슬라이스 정의
const initialState = {
  value: [],
  people: null,
};

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setPeople: (state, action) => {
      state.people = action.payload;
    },
    setReset: () => initialState,
  },
});

// 액션 생성자 및 리듀서 내보내기
export const { setValue, setPeople, setReset } = mySlice.actions;

// 스토어 생성
const store = configureStore({
  reducer: mySlice.reducer,
});

export default store;
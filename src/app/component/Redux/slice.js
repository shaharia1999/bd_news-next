import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value:false,
}
 const Responsive = createSlice({
  name: 'Respons',
  initialState,
  reducers: {
    Res: (state) => {
      state.value =!state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { Res} = Responsive.actions
export default Responsive.reducer

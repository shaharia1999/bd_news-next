import { configureStore } from '@reduxjs/toolkit'
import Responsive from './slice';

export const store = configureStore({
  reducer:{
      shaharia:Responsive,  
  }
})

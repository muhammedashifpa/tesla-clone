import { configureStore } from '@reduxjs/toolkit';
import carReduscer from '../features/car/carSlice'
export const store = configureStore({
  reducer: {
    car:carReduscer
  },
});

import { configureStore, Tuple } from '@reduxjs/toolkit';


configureStore({
    render: {}
  reducer: rootReducer,
  middleware: () => new Tuple(additionalMiddleware, logger),
})
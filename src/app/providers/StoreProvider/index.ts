export type { AppDispatch, RootState } from './config/store';

export { createReduxStore } from './config/store';

export type {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
  ThunkConfig,
} from './config/StateSchema';

export { StoreProvider } from './ui/StoreProvider';

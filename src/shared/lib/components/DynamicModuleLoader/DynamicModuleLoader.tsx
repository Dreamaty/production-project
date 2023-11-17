/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from '@/app/providers/StoreProvider';

import { useAppDispatch } from '../../../lib/hooks/storeHooks/storeHooks';

export type ReducersList = {
  [reducerKey in StateSchemaKey]?: Reducer<
    NonNullable<StateSchema[reducerKey]>
  >;
};

interface DynamicModuleLoaderProps {
  children?: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<
  DynamicModuleLoaderProps
> = ({ children, reducers, removeAfterUnmount }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      const mounted =
        mountedReducers[reducerKey as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(
          reducerKey as StateSchemaKey,
          reducer,
        );
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]) => {
          store.reducerManager.remove(
            reducerKey as StateSchemaKey,
          );
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };

    // eslint-disable-next-line
  }, []);
  return <>{children}</>;
};

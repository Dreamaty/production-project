import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks'

export type ReducersList = {
	[reducerKey in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	children?: ReactNode
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
	children,
	reducers,
	removeAfterUnmount,
}) => {
	const store = useStore() as ReduxStoreWithManager
	const dispatch = useAppDispatch()

	useEffect(() => {
		Object.entries(reducers).forEach(
			([reducerKey, reducer]: ReducersListEntry) => {
				store.reducerManager.add(reducerKey, reducer)
				dispatch({ type: `@INIT ${reducerKey} reducer` })
			},
		)

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([reducerKey]: ReducersListEntry) => {
					store.reducerManager.remove(reducerKey)
					dispatch({ type: `@DESTROY ${reducerKey} reducer` })
				})
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return <>{children}</>
}

import {
	AnyAction,
	Reducer,
	ReducersMapObject,
	combineReducers,
} from '@reduxjs/toolkit'
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema'

export function createReducerManager(
	initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
	const reducers: ReducersMapObject<StateSchema> = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)

	let keysToRemove: Array<StateSchemaKey> = []

	return {
		getReducerMap: () => reducers,

		reduce: (state: StateSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state }
				for (const key of keysToRemove) {
					delete state[key]
				}
				keysToRemove = []
			}

			return combinedReducer(state, action)
		},

		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}

			reducers[key] = reducer

			// Generate a new combined reducer
			combinedReducer = combineReducers(reducers)
		},

		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return
			}

			delete reducers[key]

			keysToRemove.push(key)

			combinedReducer = combineReducers(reducers)
		},
	}
}

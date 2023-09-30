import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

export const StoreProvider = ({
	children,
	initialState,
	asyncReducers,
}: {
	children?: ReactNode
	initialState?: DeepPartial<StateSchema>
	asyncReducers?: ReducersList
}) => {

	const navigate = useNavigate() 
	const store = createReduxStore(
		initialState as StateSchema, 
		asyncReducers,
		navigate
	)


	return (
		<Provider serverState={initialState as StateSchema} store={store}>
			{children}
		</Provider>
	)
}




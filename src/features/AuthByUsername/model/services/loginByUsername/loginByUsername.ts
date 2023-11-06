import { ThunkConfig } from '@/app/providers/StoreProvider'
import { User, userActions } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface LoginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<
	User, 
	LoginByUsernameProps, 
	ThunkConfig<string>
>(
	'login/loginByUsername',
	async (authData, thunkApi) => {
		const { dispatch, extra, rejectWithValue } = thunkApi

		try {
			const response = await extra.api.post<User>('/login', authData)
			

			if (!response.data) {
				throw new Error()
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
			dispatch(userActions.setAuthData(response.data))

			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue('Username or password is incorrect')
		}
	},
)

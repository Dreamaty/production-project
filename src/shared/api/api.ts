import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

// const baseUrl = __IS_DEV__ ? 'https://localhost:8000' : undefined

export const $api = axios.create({
	baseURL: __API__, 
})

$api.interceptors.request.use((config) => {
	if(config.headers)
		config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''

	return config
})
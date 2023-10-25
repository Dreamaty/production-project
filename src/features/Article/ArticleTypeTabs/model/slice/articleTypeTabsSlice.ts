import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ArticleType } from 'entity/Article'
import { ArticleTypeTabsSchema } from '../types/ArticleTypeTabs'

const initialState: ArticleTypeTabsSchema = {
	selectedType: ArticleType.ALL
}

export const articleTypeTabsSlice = createSlice({
	name: 'articleTypeTabs',
	initialState,
	reducers: {
		setType: (state, action: PayloadAction<ArticleType>) => {
			state.selectedType = action.payload
		}
	},
})

export const { actions: articleTypeTabsActions } = articleTypeTabsSlice

export const { reducer: articleTypeTabsReducer } = articleTypeTabsSlice

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'

import { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit/dist'
import { useMemo } from 'react'
import { useAppDispatch } from '../hooks/storeHooks/storeHooks'

export function buildSlice<
	State, 
	CaseReducers extends SliceCaseReducers<State>, 
	Name extends string = string
	>(
	options: CreateSliceOptions<State, CaseReducers, Name>){
	const slice = createSlice(options)
	
	const useActions = () => {
		const dispatch = useAppDispatch()

		// TODO: something wrong with the type of actionCreator
		// @ts-ignore
		return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch])
	}


	return {
		...slice,
		useActions,
	}
}
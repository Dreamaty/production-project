import { useEffect } from 'react'


export function useInitialEffect(callback: () => void) {
	useEffect(() => {
		if(__PROJECT__ !== 'storybook') {
			callback()
		}
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
export function useInitialEffect1(
	callback: () => void
) {
	useEffect(() => {
		if(__PROJECT__ !== 'storybook') {
			callback
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
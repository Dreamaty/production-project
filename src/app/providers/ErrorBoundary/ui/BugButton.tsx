import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

//Component for test ErrorBoundary
export const BugButton = () => {
	const [error, setError] = useState(false)
	const { t } = useTranslation()
	const throwError = () => {
		setError((last) => !last)
	}

	useEffect(() => {
		if (error) throw new Error()
	}, [error])

	return <Button onClick={throwError}>{t('Throw Error')}</Button>
}

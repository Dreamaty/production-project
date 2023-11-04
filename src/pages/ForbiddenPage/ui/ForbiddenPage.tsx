import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'


export const ForbiddenPage = memo(({ className }: {className?: string}) => {
	const { t } = useTranslation()
		
	return (
		<Page>
			{t('You dont have permission to access this page')}
		</Page>
	)
})

export default ForbiddenPage
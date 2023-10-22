import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const MainPage = () => {
	const { t } = useTranslation('main')
	return <Page>{t('Main')}</Page>
}

export default MainPage

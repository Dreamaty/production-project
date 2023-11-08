import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
	const { t } = useTranslation('about')
	return <Page>{t('about site')}</Page>
}

export default AboutPage

import { useTranslation } from "react-i18next"

const AboutPage = () => {
	const { t } = useTranslation("about")
	return <div>{t("about site")}</div>
}

export default AboutPage

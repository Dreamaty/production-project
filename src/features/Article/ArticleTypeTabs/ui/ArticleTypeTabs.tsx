import { ArticleType } from 'entity/Article'
import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { getArticleTypeTabsSelectedType } from '../model/selectors/articleTypeTabs'
import { articleTypeTabsActions } from '../model/slice/articleTypeTabsSlice'


export const ArticleTypeTabs = memo(({ 
	className, 
	onChange 
}: { 
	className?: string , 
	onChange: () => void
} ) => {
	const { t } = useTranslation('article')
	
	const selectedType = useAppSelector(getArticleTypeTabsSelectedType)

	const dispatch = useAppDispatch()

	const onClickHandler = useCallback((tabItem: TabItem<ArticleType>) => {
		dispatch(articleTypeTabsActions.setType(tabItem.value))
		onChange()
	}, [dispatch, onChange])
	


	const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
		{
			value: ArticleType.ALL,
			content: t('All')
		},
		{
			value: ArticleType.IT,
			content: t('IT')
		},
		{
			value: ArticleType.ECONOMICS,
			content: t('Economics')
		},
		{
			value: ArticleType.SCIENCE,
			content: t('Science')
		},
	], [t])
	return (
		<Tabs 
			tabs={typeTabs} 
			value={selectedType} 
			onTabClick={onClickHandler} 
			className={cx('',{}, [className, ]) }
		/>
	)
})

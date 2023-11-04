import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from '@/shared/lib/classNames/cx'
import { SortOrder } from '@/shared/types'
import { UiSelect } from '@/shared/ui/Select'
import { SelectOption } from '@/shared/ui/Select/ui/UiSelect'
import { ArticleSortField } from '../../model/consts/consts'
import cls from './ArticleSortSelector.module.scss'

export const ArticleSortSelector = memo(({ 
	className ,
	sort,
	order,
	onChangeOrder,
	onChangeSort
}: {
	className?: string,
	sort: ArticleSortField,
	order: SortOrder,
	onChangeOrder: (newOrder: SortOrder) => void,
	onChangeSort: (newSort: ArticleSortField) => void

}) => {
	const { t } = useTranslation('article')

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
		{
			value: 'asc',
			content: t('increase')
		},
		{
			value: 'desc',
			content: t('descending')
		},
	], [ t ])

	const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
		{
			value: ArticleSortField.CREATED,
			content: t('creating date')
		},
		{
			value: ArticleSortField.TITLE,
			content: t('title')
		},
		{
			value: ArticleSortField.VIEWS,
			content: t('views')
		},
	], [ t ])

	return (
		<div className={cx(cls.articleSortSelector, {},
			[className])}>
			<UiSelect 
				options={sortFieldOptions} 
				label={t('Sort by')} 
				onChange={onChangeSort}
				value={sort}
			/>
			<UiSelect 
				options={orderOptions} 
				label={t('By')} 
				onChange={onChangeOrder}
				value={order}
			/>
		</div>
	)
})
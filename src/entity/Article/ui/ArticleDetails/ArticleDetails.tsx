import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Avatar } from 'shared/ui/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { HStack, VStack } from 'shared/ui/Stack'
import {
	TextAlign,
	TextSize,
	TextTheme, UiText
} from 'shared/ui/Text'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import cls from './ArticleDetails.module.scss'

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: {className?: string, id: string}) => {

	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()
	const isLoading =  useAppSelector(getArticleDetailsIsLoading)
	const article = useAppSelector(getArticleDetailsData)
	const error = useAppSelector(getArticleDetailsError)
	
	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
		case ArticleBlockType.CODE:
				
			return <ArticleCodeBlockComponent 
				key={block.id} 
				block={block}
			/>
		case ArticleBlockType.IMAGE:
				
			return <ArticleImageBlockComponent 
				key={block.id} 
				block={block} 
			/>
		case ArticleBlockType.TEXT:
				
			return <ArticleTextBlockComponent 
				key={block.id} 
				block={block} 
			/>
		
		default:
			throw new Error('Unknown article type')
		}
	}, [])
	useInitialEffect(() => {
		dispatch(fetchArticleById(id))
	})
	
	let content

	if(isLoading) {
		content = (
			<>
				<Skeleton className={cls.avatar} width={200} height={200} border='50%'/>
				<Skeleton className={cls.title} width={300} height={32} border='10px'/>
				<Skeleton className={cls.skeleton} width={600} height={24} />
				<Skeleton className={cls.skeleton} width={'100%'} height={200} border='10px'/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200} border='10px'/>
			</>
		)
	}else if(error) {
		content = (
			<UiText 
				title={t('The error has occurred')} 
				theme={TextTheme.ERROR} 
				align={TextAlign.CENTER}
			/>
		)
	}else {
		content = (
			<>
				<HStack justify='center' max>
					<Avatar 
						size={200} 
						src={article?.img} 
						alt='Article avatar' 
						className={cls.avatar}/>
				</HStack>
				<VStack gap='4' max>
					<UiText
						title={article?.title}
						text={article?.subtitle}
						size={TextSize.L}
					
					/>
				
					<HStack gap='8'>
						<Icon Svg={EyeIcon} />
						<UiText text={String(article?.views)} />
					</HStack>
					<HStack gap='8'>
						<Icon Svg={CalendarIcon} />
						<UiText text={article?.createdAt}/>
					</HStack>
				</VStack>
				{article?.blocks.map(renderBlock)}
			</>
		)
	}


		
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<VStack gap='16' className={cx(cls.articleDetails, {},
				[className])}>
				{content}
			</VStack>
			
		</DynamicModuleLoader>
	)
})
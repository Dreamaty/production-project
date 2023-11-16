import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Drawer } from '@/shared/ui/Drawer'
import { UiInput } from '@/shared/ui/Input'
import { Modal } from '@/shared/ui/Modal'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating'
import { UiText } from '@/shared/ui/Text'
import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'


export const RatingCard = memo(({ 
	className,
	feedbackTitle,
	hasFeedback,
	title,
	onAccept,
	onCancel,
	rate = 0
}: {
	className?: string, 
	title?: string, 
	feedbackTitle?: string
	hasFeedback?: boolean
	rate?: number
	onCancel?: (starsCount: number) => void
	onAccept?: (starsCount: number, feedback?: string) => void
}) => {
	const { t } = useTranslation()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [starsCount, setStarsCount] = useState(rate)
	const [feedback, setFeedback] = useState('')
	const onSelectStars = useCallback((selectedStarsCount: number) => {
		setStarsCount(selectedStarsCount)
		if(hasFeedback) {
			setIsModalOpen(true)
		} else {
			onAccept?.(selectedStarsCount)
		}
	}, [hasFeedback, onAccept])

	const acceptHandle = useCallback(() => {
		setIsModalOpen(false)
		onAccept?.(starsCount, feedback)
	}, [feedback, onAccept, starsCount])

	const cancelHandle = useCallback(() => {
		setIsModalOpen(false)
		onCancel?.(starsCount)
	}, [onCancel, starsCount])

	const modalContent = (
		<>
			<UiText title={feedbackTitle}/>
			<UiInput 
				data-testid='RatingCard.Input'
				placeholder={t('Your Feedback')} 
				value={feedback} 
				onChange={setFeedback}
				autoFocus
			/>
		</>
			
			
	)
		
	return (
		<Card className={className} max
			data-testid='RatingCard'
		>
			<VStack align='center' gap='8'>
				<UiText title={starsCount ? t('Thanks for your rating') : title}/>
				<StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount}/>
			</VStack>
			<BrowserView>
				<Modal isOpen={isModalOpen} lazy>
					<VStack gap='32' max>

						{modalContent}
						<HStack max gap='16' justify='end'>
							<Button 
								theme={ButtonTheme.OUTLINE_RED} 
								onClick={cancelHandle}
								data-testid='RatingCard.Close'
							>
								{t('Close')}
							</Button>
							<Button 
								data-testid='RatingCard.Send'
								onClick={acceptHandle}
							>
								{t('Send')}
							</Button>
						</HStack>
					</VStack>
				</Modal>
			</BrowserView>
			<MobileView>
				<Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
					<VStack gap='32' max>
						{modalContent}
						<Button onClick={acceptHandle} size={ButtonSize.L} />
					</VStack>
				</Drawer>
			</MobileView>
		</Card>
	)
})
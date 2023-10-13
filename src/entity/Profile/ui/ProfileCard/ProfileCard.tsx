import { CountrySelect } from 'entity/Country'
import { Country } from 'entity/Country/model/types/country'
import { Currency, CurrencySelect } from 'entity/Currency'
import { Profile } from 'entity/Profile/model/types/profile'
import { useTranslation } from 'react-i18next'
import { Mods, cx } from 'shared/lib/classNames/cx'
import { Avatar } from 'shared/ui/Avatar'
import { UiInput } from 'shared/ui/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { TextAlign, TextTheme, UiText } from 'shared/ui/Text/'
import cls from './ProfileCard.module.scss'

export const ProfileCard = ({ 
	className, 
	data, 
	error, 
	isLoading, 
	readonly = true, 
	onChangeFirstName, 
	onChangeLastName,
	onChangeAge,
	onChangeCity,
	onChangeCountry,
	onChangeCurrency
} : { 
		className?: string,
		data?: Profile, 
		error?: string, 
		isLoading?: boolean,
		readonly?: boolean,
		onChangeFirstName?: (value?: string) => void,
		onChangeLastName?: (value?: string) => void,
		onChangeAge?: (value?: string) => void,
		onChangeCountry?: (value?: Country) => void,
		onChangeCity?: (value?: string) => void,
		onChangeCurrency?: (currnecy?: Currency) => void,
}) => {
	const { t } = useTranslation('profile')

	if (isLoading) {
		return (
			<div className={cx(cls.profileCard, {}, [className, cls.loading])}><Loader/></div>
		)
	}
	
	if (error) {
		return (
			<div className={cx(cls.profileCard, {}, [className, cls.loading])}>
				<UiText 
					theme={TextTheme.ERROR}
				 	title={t('Did not succeed to load profile')}
					text={t('Try to refresh the page')}
					align={TextAlign.CENTER}
				/>
					
			</div>
		)
	}
	const mods: Mods = {
		[cls.editing]: !readonly
	}
  
	return (
		<div className={cx(cls.profileCard, mods, [className])}>
			
			<div className={cls.data}>

				{data?.avatar && (
					<div className={cls.avatarWrapper}>
						<Avatar 
							alt='Profile Avatar' 
							size={100} 
							src={data.avatar} 
						/>
					</div>)
				}

				<UiInput value={data?.firstName}
					onChange={onChangeFirstName}
					placeholder={t('Your Name')}
					className={cls.input}
					readonly={readonly}
				/>

				<UiInput value={data?.lastName}
					onChange={onChangeLastName}
					placeholder={t('Your Last Name')}
					className={cls.input}
					readonly={readonly}
				/>

				<UiInput value={data?.age}
					onChange={onChangeAge}
					placeholder={t('Your Age')}
					className={cls.input}
					readonly={readonly}
				/>

				<UiInput value={data?.city}
					onChange={onChangeCity}
					placeholder={t('Your City')}
					className={cls.input}
					readonly={readonly}
				/>

				<CountrySelect 
					className={ cls.input }
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>

				<CurrencySelect 
					className={ cls.input }
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				
			</div>
		</div>
	)
  

}
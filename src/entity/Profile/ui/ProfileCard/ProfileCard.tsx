import { getProfileData } from 'entity/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entity/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entity/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input'
import { Text } from 'shared/ui/Text'
import cls from './ProfileCard.module.scss'

export const ProfileCard = ({className}: {className?: string}) => {
  const { t } = useTranslation('profile')
  const data = useAppSelector(getProfileData)
  const error = useAppSelector(getProfileError)
  const isLoading = useAppSelector(getProfileIsLoading)
  
  return (
  <div className={cx(cls.profileCard, {}, [className])}>
    <div className={cls.header}>
      <Text title={t('Profile')}/>
      <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
        {t('Edit')}
      </Button>
    </div>
    <div className={cls.data}>
      <Input value={data?.firstName}
        placeholder={t('Your Name')}
        className={cls.input}
        />
      <Input value={data?.lastName}
        placeholder={t('Your Last Name')}
        className={cls.input}
        />
    </div>
  </div>
  )
  

}
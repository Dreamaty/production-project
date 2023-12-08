import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/storeHooks/storeHooks';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { UiInput as UiInputDeprecated } from '@/shared/ui/deprecated/Input';
import {
  TextTheme,
  UiText as UiTextDeprecated,
} from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { UiInput } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import {
  loginActions,
  loginReducer,
} from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(function LoginForm({
  className,
  onSuccess,
}: LoginFormProps) {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const forceUpdate = useForceUpdate();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(
      loginByUsername({ username, password }),
    );
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      forceUpdate();
    }
  }, [dispatch, username, password, onSuccess, forceUpdate]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <VStack
            gap='8'
            className={cx(cls.loginFormRedesigned, {}, [
              className,
            ])}
          >
            <UiText title={t('Authorization form')} />
            {error && <UiText variant='error' text={t(error)} />}

            <UiInput
              type='text'
              placeholder={t('Login')}
              value={username}
              autoFocus
              onChange={onChangeUsername}
            />

            <UiInput
              type='text'
              placeholder={t('Password')}
              value={password}
              onChange={onChangePassword}
            />

            <Button
              variant='outline'
              className={cls.loginBtn}
              onClick={onLoginClick}
              inactive={isLoading}
            >
              {t('Sign In')}
            </Button>
          </VStack>
        }
        off={
          <div className={cx(cls.loginForm, {}, [className])}>
            <UiTextDeprecated title={t('Authorization form')} />
            {error && (
              <UiTextDeprecated
                theme={TextTheme.ERROR}
                text={t(error)}
              />
            )}
            <UiInputDeprecated
              type='text'
              placeholder={t('Login')}
              value={username}
              autoFocus
              onChange={onChangeUsername}
            />

            <UiInputDeprecated
              type='text'
              placeholder={t('Password')}
              value={password}
              onChange={onChangePassword}
            />

            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              className={cls.loginBtn}
              onClick={onLoginClick}
              inactive={isLoading}
            >
              {t('Sign In')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { UiInput as UiInputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { UiInput } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';

import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();

    const text = useAppSelector(getAddCommentFormText);
    const error = useAppSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentChangeHandler = useCallback(
      (data: string) => {
        dispatch(addCommentFormActions.setText(data));
      },
      [dispatch],
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text || '');
      onCommentChangeHandler('');
    }, [onCommentChangeHandler, onSendComment, text]);

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
            <Card padding='24' border='round' max>
              <HStack
                max
                gap='16'
                className={cx(cls.addCommentFormRedesigned, {}, [
                  className,
                ])}
                data-testid='AddCommentForm'
              >
                <UiInput
                  data-testid='AddCommentForm.Input'
                  className={cls.input}
                  placeholder={t('Type your comment')}
                  value={text}
                  onChange={onCommentChangeHandler}
                />

                <Button
                  data-testid='AddCommentForm.Button'
                  variant='outline'
                  onClick={onSendHandler}
                >
                  {t('Send')}
                </Button>
              </HStack>
            </Card>
          }
          off={
            <HStack
              max
              className={cx(cls.addCommentForm, {}, [className])}
              data-testid='AddCommentForm'
            >
              <UiInputDeprecated
                data-testid='AddCommentForm.Input'
                className={cls.input}
                placeholder={t('Type your comment')}
                value={text}
                onChange={onCommentChangeHandler}
              />

              <ButtonDeprecated
                data-testid='AddCommentForm.Button'
                theme={ButtonTheme.OUTLINE}
                onClick={onSendHandler}
              >
                {t('Send')}
              </ButtonDeprecated>
            </HStack>
          }
        />
      </DynamicModuleLoader>
    );
  },
);

export default AddCommentForm;

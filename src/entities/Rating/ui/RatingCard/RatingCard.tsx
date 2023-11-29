import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { UiInput as UiInputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { UiText as UiTextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { UiInput } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

export const RatingCard = memo(
  ({
    className,
    feedbackTitle,
    hasFeedback,
    title,
    onAccept,
    onCancel,
    rate = 0,
  }: {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    rate?: number;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
  }) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(selectedStarsCount);
        }
      },
      [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
      setIsModalOpen(false);
      onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
      <>
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
            <>
              <UiText title={feedbackTitle} />
              <UiInput
                data-testid='RatingCard.Input'
                placeholder={t('Your Feedback')}
                value={feedback}
                onChange={setFeedback}
                autoFocus
              />
            </>
          }
          off={
            <>
              <UiTextDeprecated title={feedbackTitle} />
              <UiInputDeprecated
                data-testid='RatingCard.Input'
                placeholder={t('Your Feedback')}
                value={feedback}
                onChange={setFeedback}
                autoFocus
              />
            </>
          }
        />
      </>
    );

    const content = (
      <>
        <VStack align='center' gap='8'>
          <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
              <UiText
                title={
                  starsCount
                    ? t('Thanks for your rating')
                    : title
                }
              />
            }
            off={
              <UiTextDeprecated
                title={
                  starsCount
                    ? t('Thanks for your rating')
                    : title
                }
              />
            }
          />

          <StarRating
            size={40}
            onSelect={onSelectStars}
            selectedStars={starsCount}
          />
        </VStack>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            <VStack gap='32' max>
              {modalContent}
              <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                  <HStack max gap='16' justify='end'>
                    <Button
                      variant='outline'
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
                }
                off={
                  <HStack max gap='16' justify='end'>
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={cancelHandle}
                      data-testid='RatingCard.Close'
                    >
                      {t('Close')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      data-testid='RatingCard.Send'
                      onClick={acceptHandle}
                    >
                      {t('Send')}
                    </ButtonDeprecated>
                  </HStack>
                }
              />
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer
            isOpen={isModalOpen}
            lazy
            onClose={cancelHandle}
          >
            <VStack gap='32' max>
              {modalContent}
              <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Button onClick={acceptHandle} size={'l'} />}
                off={
                  <ButtonDeprecated
                    onClick={acceptHandle}
                    size={ButtonSize.L}
                  />
                }
              />
            </VStack>
          </Drawer>
        </MobileView>
      </>
    );
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Card
            padding='24'
            border='round'
            className={className}
            max
            data-testid='RatingCard'
          >
            {content}
          </Card>
        }
        off={
          <CardDeprecated
            className={className}
            max
            data-testid='RatingCard'
          >
            {content}
          </CardDeprecated>
        }
      />
    );
  },
);

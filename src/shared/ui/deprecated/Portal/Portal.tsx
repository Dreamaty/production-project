import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 *  @deprecated
 */
export const Portal = ({
  children,
  element = document.body,
}: {
  children: ReactNode;
  element?: HTMLElement;
}) => {
  return createPortal(children, element);
};

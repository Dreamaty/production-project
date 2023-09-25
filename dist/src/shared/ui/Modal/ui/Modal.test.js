import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Modal } from './Modal';
describe('Modal check', function () {
    test('should render', function () {
        componentRender(_jsx(Modal, { isOpen: true }));
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
    // test('should close', () => {
    // 	componentRender(<Modal isOpen />)
    // 	const overlayDiv = screen.getByTestId('overlay')
    // 	fireEvent.click(overlayDiv)
    // 	expect(screen.getByTestId('modal')).toHaveClass('closing')
    // })
});

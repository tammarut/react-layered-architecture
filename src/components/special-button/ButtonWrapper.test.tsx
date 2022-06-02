import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonWrapper from './ButtonWrapper';

test('handle onClick Button', () => {
  // Arrange
  const onClickSpy = jest.fn();
  render(<ButtonWrapper title="Add item" onClick={onClickSpy} />);

  // Act
  const buttonElement = screen.getByText('Add item');
  userEvent.click(buttonElement);

  // Assert
  expect(onClickSpy).toHaveBeenCalledTimes(1);
});

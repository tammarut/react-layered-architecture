import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('Counter module', () => {
  // Arrange
  render(<Counter />);

  // Act
  const buttonElement = screen.getByText('+1');
  userEvent.click(buttonElement);
  const displayElement = screen.getByText('You clicked 1 times');

  // Assert
  expect(displayElement).toBeInTheDocument();
  expect(displayElement).toHaveTextContent('You clicked 1 times');
});

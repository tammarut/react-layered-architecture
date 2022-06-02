import { render, screen } from '@testing-library/react';
import Person from './person';

test('Person component, render a name', () => {
  // Arrange
  render(<Person name="John" />);
  // Act
  //   const element = screen.getByText(/My name is John/i);
  const divElement = screen.getByRole('contentinfo');
  // Assert
  expect(divElement).toBeInTheDocument();
  expect(divElement).toHaveTextContent('My name is John');
  expect(divElement).toHaveAttribute('role', 'contentinfo');
});

import { render, screen } from '@testing-library/react';
import SideBar from './sidebar';

test('Person component, render a name', () => {
  // Arrange
  const navigations = [{ name: 'About', href: '#' }];
  render(<SideBar navigations={navigations} />);

  // Act
  const anchorElements = screen.getAllByRole('navigation');

  // Assert
  expect(anchorElements).toHaveLength(navigations.length);
  expect(anchorElements[0]).toHaveTextContent(navigations[0].name);
  expect(anchorElements[0]).toHaveAttribute('href', navigations[0].href);
});

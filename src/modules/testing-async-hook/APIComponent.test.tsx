import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import APIComponent from './APIComponent';

const mockServer = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'John' }));
  })
);

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

test('fetch the data from the API', async () => {
  // Arrange
  render(<APIComponent />);
  // Act
  const contentElement = await waitFor(() => screen.findByRole('contentinfo'));
  // Assert
  expect(contentElement).toHaveTextContent('Name is John');
});

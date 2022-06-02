import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { useFetch } from './useFetch';

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'John' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should increment', async () => {
  // Arrange
  const { result, waitForNextUpdate } = renderHook(() => useFetch());

  // Act
  await waitForNextUpdate();

  // Assert
  expect(result.current).toEqual({ name: 'John' });
});

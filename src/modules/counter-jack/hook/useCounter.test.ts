import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

test('should increment', () => {
  // Arrange
  const { result } = renderHook(() => useCounter());

  // Act
  act(() => {
    result.current.increment();
  });

  // Assert
  expect(result.current.count).toBe(1);
});

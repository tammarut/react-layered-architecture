import { useCallback } from 'react';
import { CounterStore } from '../store/counter.store';
import useCases from '../useCases';

export function useCounter(store: CounterStore) {
  const getCounter = useCallback(() => {
    return useCases.getCounterUseCase({ loadInitialCounter: store.loadInitialCounter });
  }, [store.loadInitialCounter]);

  const incrementCounter = useCallback(() => {
    return useCases.incrementCounterUseCase({
      counter: store.counter,
      setCounter: store.setCounter,
      updateCounter: store.updateCounter,
    });
  }, [store.counter, store.setCounter, store.updateCounter]);

  const decrementCounter = useCallback(() => {
    return useCases.decrementCounterUseCase({
      counter: store.counter,
      updateCounter: store.updateCounter,
      setCounter: store.setCounter,
    });
  }, [store.counter, store.updateCounter, store.setCounter]);

  return {
    count: store.counter?.value,
    shouldShowLoading: store.isLoading,
    shouldDisableButton: store.counter?.value === 0,
    getCounter,
    incrementCounter,
    decrementCounter,
  };
}

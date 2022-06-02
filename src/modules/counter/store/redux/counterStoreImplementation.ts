import { Counter } from 'modules/counter/entity/counter.entity';
import { AppRootState } from 'pages';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterStore } from '../counter.store';
import { CounterStoreState } from './reducer';
import counterAction from './redux';

const counterSelector = (state: AppRootState) => state.counter;

export function useCounterStoreImplementation(): CounterStore {
  const { counter, isLoading, isUpdating } = useSelector<AppRootState, CounterStoreState>(
    counterSelector
  );
  const dispatch = useDispatch();

  const loadInitialCounter = useCallback(
    () => counterAction.getCounterAction()(dispatch),
    [dispatch]
  );

  const setCounter = useCallback(
    (counter: Counter) => counterAction.setCounterAction(counter)(dispatch),
    [dispatch]
  );

  const updateCounter = useCallback(
    (counter: Counter) => counterAction.updateCounterAction(counter)(dispatch),
    [dispatch]
  );

  return {
    counter,
    isLoading,
    isUpdating,
    loadInitialCounter,
    setCounter,
    updateCounter,
  };
}

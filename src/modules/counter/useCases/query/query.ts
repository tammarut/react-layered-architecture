import { CounterStore } from 'modules/counter/store/counter.store';

type GetInitialCounterStore = Pick<CounterStore, 'loadInitialCounter'>;

// Get the counter initial value from a data source
export function getCounterUseCase(store: GetInitialCounterStore) {
  const initialCounter = store.loadInitialCounter();
  return initialCounter;
}

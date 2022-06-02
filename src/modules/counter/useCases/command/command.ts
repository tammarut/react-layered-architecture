import debounce from 'lodash/debounce';
import counterEntity, { Counter } from 'modules/counter/entity/counter.entity';
import { CounterStore } from 'modules/counter/store/counter.store';

type CounterCommandStore = Pick<CounterStore, 'updateCounter' | 'setCounter' | 'counter'>;

type CommandType = (counter: Counter) => Counter;

function updateCounterUseCase(store: CounterCommandStore, command: CommandType) {
  if (!store.counter) return store.counter;
  const updatedCounter = command(store.counter);

  if (!updatedCounter) return;

  const setCounterWithDelay = debounce(() => store.setCounter(updatedCounter), 100);
  setCounterWithDelay();
}

// Increment the counter value
export function incrementCounterUseCase(store: CounterCommandStore) {
  const result = updateCounterUseCase(store, counterEntity.increment);
  return result;
}

// Decrement the counter value
export function decrementCounterUseCase(store: CounterCommandStore) {
  const result = updateCounterUseCase(store, counterEntity.decrement);
  return result;
}

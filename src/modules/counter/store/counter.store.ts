import { Counter } from '../entity/counter.entity';

export interface CounterStore {
  // State
  counter: Counter | null;
  isLoading: boolean;
  isUpdating: boolean;

  // Actions
  loadInitialCounter(): Promise<Counter>;
  setCounter(counter: Counter): void;
  updateCounter(counter: Counter): Promise<Counter | undefined>;
}

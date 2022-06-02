import { CounterStore } from '../counter.store';
import { ACTION_TYPES } from './redux';

export type CounterStoreState = Omit<
  CounterStore,
  'loadInitialCounter' | 'setCounter' | 'updateCounter'
>;

const INITIAL_STATE: CounterStoreState = {
  counter: { value: 0 },
  isLoading: false,
  isUpdating: false,
};

export function counterReducer(state = INITIAL_STATE, action): CounterStoreState {
  switch (action.type) {
    case ACTION_TYPES.GET_COUNTER:
      return { ...state, isLoading: true };

    case ACTION_TYPES.GET_COUNTER_SUCCESS:
      return { ...state, isLoading: false, counter: action.counter };

    case ACTION_TYPES.SET_COUNTER:
      return { ...state, counter: action.counter };

    case ACTION_TYPES.UPDATE_COUNTER:
      return { ...state, isUpdating: true };

    case ACTION_TYPES.UPDATE_COUNTER_SUCCESS:
      return { ...state, isUpdating: false };

    default:
      return state;
  }
}

import { Counter } from 'modules/counter/entity/counter.entity';
import counterService from 'modules/counter/service/counter.service';

export enum ACTION_TYPES {
  GET_COUNTER = 'GET_COUNTER',
  GET_COUNTER_SUCCESS = 'GET_COUNTER_SUCCESS',

  SET_COUNTER = 'SET_COUNTER',

  UPDATE_COUNTER = 'UPDATE_COUNTER',
  UPDATE_COUNTER_SUCCESS = 'UPDATE_COUNTER_SUCCESS',
}

function getCounterAction() {
  return async (dispatch) => {
    dispatch({ type: ACTION_TYPES.GET_COUNTER });

    const counter = await counterService.fetchCounter();
    dispatch({ type: ACTION_TYPES.UPDATE_COUNTER_SUCCESS, counter });
    return counter;
  };
}

function setCounterAction(counter: Counter) {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPES.SET_COUNTER, counter });
  };
}

function updateCounterAction(newCounter: Counter) {
  return async (dispatch) => {
    dispatch({ type: ACTION_TYPES.UPDATE_COUNTER });

    const updatedCounter = await counterService.updateCounter(newCounter);
    dispatch({ type: ACTION_TYPES.UPDATE_COUNTER_SUCCESS });
    return updatedCounter;
  };
}

const counterAction = { getCounterAction, setCounterAction, updateCounterAction };
export default counterAction;

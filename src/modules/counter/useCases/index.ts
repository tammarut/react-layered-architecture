import { decrementCounterUseCase, incrementCounterUseCase } from './command/command';
import { getCounterUseCase } from './query/query';

const useCases = { getCounterUseCase, incrementCounterUseCase, decrementCounterUseCase };
export default useCases;

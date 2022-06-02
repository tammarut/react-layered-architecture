import { Button } from 'components';
import { useEffect } from 'react';
import { useCounter } from './hook/useCounter';
import { useCounterStoreImplementation } from './store/redux/counterStoreImplementation';

function CounterPage() {
  const store = useCounterStoreImplementation();
  const { count, getCounter, incrementCounter, decrementCounter, shouldDisableButton } =
    useCounter(store);

  useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <div>
      <>
        <h2>{count}</h2>
        <Button onClick={decrementCounter} disabled={shouldDisableButton}>
          -1
        </Button>
        <Button onClick={incrementCounter}>+1</Button>
      </>
    </div>
  );
}

export default CounterPage;

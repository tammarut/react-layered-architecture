export interface Counter {
  value: number;
}

function create(count: Counter): Counter {
  return { value: count.value };
}

function increment(counter: Counter): Counter {
  return { value: counter.value + 1 };
}

function decrement(counter: Counter): Counter {
  if (counter.value === 0) return { value: 0 };

  return { value: counter.value - 1 };
}

const counterAction = { create, increment, decrement };
export default counterAction;

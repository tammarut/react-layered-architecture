import axios from 'axios';
import { Counter } from '../entity/counter.entity';

const BASE_URL = 'counter';

async function fetchCounter(): Promise<Counter> {
  const response = await axios.get<Counter>(`${BASE_URL}/my-counter`);
  return response.data;
}

async function updateCounter(counter: Counter): Promise<Counter> {
  const response = await axios.put<Counter>(`${BASE_URL}/my-counter`, counter);
  return response.data;
}

const counterService = { fetchCounter, updateCounter };
export default counterService;

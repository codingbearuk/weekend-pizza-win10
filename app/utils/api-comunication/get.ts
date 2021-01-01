import key from './key';
import fetch from 'node-fetch';

const get = async (query: string): Promise<object> => {
  const data = await fetch(`${key}${query}`);
  const res = await data.json();
  return res;
};

export default get;

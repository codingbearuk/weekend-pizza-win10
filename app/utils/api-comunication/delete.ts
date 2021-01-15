import key from './key';
import fetch from 'node-fetch';

export interface Del {
  (query: string, body: object): Promise<
    {
      status: string;
    } & { [prop: string]: any }
  >;
}

const del: Del = async (query, body) => {
  const getData = await fetch(`${key}${query}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await getData.json();
  return response;
};

export default del;

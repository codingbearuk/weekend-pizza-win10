import key from './key';
import fetch from 'node-fetch';
import { config } from 'dotenv';

export interface Del {
  (query: string, body: object): Promise<
    {
      status: string;
    } & { [prop: string]: any }
  >;
}

const del: Del = async (query, body) => {
  config();
  const getData = await fetch(`${key}${query}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.AUTH_KEY}`,
    },
    body: JSON.stringify(body),
  });
  const response = await getData.json();
  return response;
};

export default del;

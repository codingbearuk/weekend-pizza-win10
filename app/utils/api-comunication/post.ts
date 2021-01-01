import key from './key';
import fetch from 'node-fetch';

export interface POST {
  (query: string, body: object): Promise<object>;
}

const post: POST = async (query, body) => {
  const getData = await fetch(`${key}${query}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await getData.json();
  return response;
};

export default post;

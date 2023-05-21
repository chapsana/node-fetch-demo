jest.mock('node-fetch');

import fetch from 'node-fetch';
import { getUser } from '../src';

const {Response} = jest.requireActual('node-fetch');

test('getUser calls fetch ', async () => {
  // @ts-ignore
  fetch.mockReturnValue(Promise.resolve(new Response('{ "id": "4" }')));

  const user = await getUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/github');
  expect(user).toEqual({ id: '4' });
});

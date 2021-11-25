import { sum, getUser } from '../src';
import fetch, { Response } from 'node-fetch';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

jest.mock('node-fetch');

describe('fetch-mock test', () => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

  it('check fetch mock test', async () => {
    const json = jest.fn() as jest.MockedFunction<any>;

    json.mockResolvedValue({ status: 200 }); //just sample expected json return value

    mockFetch.mockResolvedValue({ ok: true, json } as Response); //just sample expected fetch response

    await getUser();

    expect(json.mock.calls.length).toBe(1);
  });
});

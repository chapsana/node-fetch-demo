import fetch, { Response } from 'node-fetch';
import { getUser } from '../src';

jest.mock('node-fetch');

describe('getUser fetch mock test', () => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

  it('check fetch mock test', async () => {
    const json = jest.fn() as jest.MockedFunction<any>;

    json.mockResolvedValue({ status: 200 }); // just sample expected json return value

    mockFetch.mockResolvedValue({ ok: true, json } as Response); // just sample expected fetch response

    const result = await getUser();

    expect(json.mock.calls.length).toBe(1);
  });
});

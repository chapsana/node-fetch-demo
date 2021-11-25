import { sum, getUser } from '../src';
import fetch, { Response } from 'node-fetch';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('Some logging behavior', () => {
  const log = console.log; // save original console.log function
  beforeEach(() => {
    console.log = jest.fn(); // create a new mock function for each test
  });
  afterAll(() => {
    console.log = log; // restore original console.log after all tests
  });
  test('no log', () => {
    // TODO: test something that should not log
    expect(console.log).not.toHaveBeenCalled();
  });
  test('some log on NODE_ENV=development', () => {
    process.env.NODE_ENV = 'development';
    expect(sum(1, 1)).toEqual(2);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('boop');
  });

  test('no log on NODE_ENV!=development', () => {
    process.env.NODE_ENV = 'production';
    expect(sum(1, 1)).toEqual(2);
    expect(console.log).not.toHaveBeenCalled();
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

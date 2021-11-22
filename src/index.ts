import fetch from 'node-fetch';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

/**
 * getUser Information - get user from github
 *
 * @returns {Promise<string>}
 */
export const getUser = async () => {
  const response = await fetch('https://api.github.com/users/github');
  const data = await response.json();
  return data;
};

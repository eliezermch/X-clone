'use server';

import { getData } from '@/utils/functions';

const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=bfd5963e4e034fcaa6cdc58cd38fe071';

const fetchNewsData = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getData(URL);
      resolve(res);
    } catch (error) {
      console.error('Error fetching user data:', error);
      reject(error);
      return null;
    }
  });
};

export { fetchNewsData };

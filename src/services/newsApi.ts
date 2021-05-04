import axios from 'axios';
import { Config } from 'config';

const fetchNews = async () => {
  try {
    const options = {
      headers: {
        'Ocp-Apim-Subscription-Key': `${Config.newsApiKey}`,
      },
      params: {
        category: 'World',
        mkt: 'en-US',
      },
    };
    const response = await axios.get(Config.newsApiUrl, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchNews;

const apiUrl = process.env.REACT_APP_API_URL || 'https://api.deezer.com/';

type Props = {
  isFull?: boolean;
  method?: 'get';
  path: string;
  data?: {};
};

const fetchApi = async ({ path, method = 'get', isFull = false }: Props): Promise<any> => {
  const errors: any[] = [];

  try {
    const url = !isFull ? apiUrl + path : path;

    // HOTFIX
    const options: any = {
      method,
      headers: {
        'Access-Control-Allow-Headers': '*',
      },
    };

    const response = await window.fetch(url, options);

    if (!response.ok) {
      const responseText = await response.text();

      console.log('responseText:', responseText);

      return {
        errors,
      };
    }

    return await response.json();
  } catch (error) {
    return {
      errors,
    };
  }
};

export default fetchApi;

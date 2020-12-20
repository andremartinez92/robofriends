import { apiCall } from '../api';

describe('#apiCall', () => {
  it('fetches the correct link', () => {
    const link = 'http://www.somelink.com/stuff';
    fetch.mockResponse(JSON.stringify({ body: 'ok' }));

    apiCall(link);
    expect(fetch).toHaveBeenCalledWith(link);
  });
});

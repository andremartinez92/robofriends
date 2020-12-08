import { apiCall } from '../api';

describe('#apiCall', () => {
    it('fetches the correct link', () => {
        const jsonFnMock = jest.fn();
        const link = 'http://www.somelink.com/stuff'
        fetch.mockResponse(JSON.stringify({ body: 'ok' }));

        const fetchedResponse = apiCall(link);
        expect(fetch).toHaveBeenCalledWith(link);
    })
})

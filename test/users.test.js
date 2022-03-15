const request = require('supertest');
const { router } = require('../routes/users');

jest.mock('../services/apiHandlers');
const { getCityUsers, getAllUsers } = require('../services/apiHandlers');
const { allUsers, cityUsers, allLondonUsers } = require('../mock-data');

describe('Test the root path ', () => {
  afterAll(done => {
    done();
  });

  afterEach(() => {
    getCityUsers.mockRestore();
    getAllUsers.mockRestore();
  });

  it('GET London Users based on london city users and users living 50 miles around london', async () => {
    getAllUsers.mockReturnValue(allUsers);
    getCityUsers.mockReturnValue(cityUsers);

    const response = await request(router).get('/London');

    expect(response.statusCode).toBe(200);
    expect(response._body).toStrictEqual(allLondonUsers);   
  });


  it('Return empty array if GET London Users is empty for allUsers and cityUsers', async () => {
    const allUsers = [];
    const cityUsers = [];

    getAllUsers.mockReturnValue(allUsers);
    getCityUsers.mockReturnValue(cityUsers);

    const response = await request(router).get('/London');

    expect(response.statusCode).toBe(200);
    expect(response._body).toStrictEqual([]);   
  });
});

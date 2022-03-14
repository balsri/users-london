const request = require('supertest');
const { router } = require('../routes/users');

jest.mock('../services/apiHandlers');
const { getCityUsers, getAllUsers } = require('../services/apiHandlers');

describe('Test the root path', () => {
  afterAll(done => {
    done();
  });

  afterEach(() => {
    getCityUsers.mockRestore();
    getAllUsers.mockRestore();
  });

  it('GET London Users', async () => {
    const allUsers = [
        {
          id: 4,
          first_name: 'Maurise',
          last_name: 'Shieldon',
          email: 'mshieldon0@squidoo.com',
          ip_address: '192.57.232.111',
          latitude: 34.003135,
          longitude: -117.7228641
        },
        {
          id: 2,
          first_name: 'Bendix',
          last_name: 'Halgarth',
          email: 'bhalgarth1@timesonline.co.uk',
          ip_address: '4.185.73.82',
          latitude: -2.9623869,
          longitude: 104.7399789
        },
        {
          id: 3,
          first_name: 'Meghan',
          last_name: 'Southall',
          email: 'msouthall2@ihg.com',
          ip_address: '21.243.184.215',
          latitude: '15.45033',
          longitude: '44.12768'
    }];

    const cityUsers = [{
        id: 3,
        first_name: 'Meghan',
        last_name: 'Southall',
        email: 'msouthall2@ihg.com',
        ip_address: '21.243.184.215',
        latitude: '15.45033',
        longitude: '44.12768'
      },
      {
        id: 1,
        first_name: 'Mathew',
        last_name: 'Wade',
        email: 'mwade@gmail.com',
        ip_address: '41.243.184.215',
        latitude: '35.45033',
        longitude: '54.12768'
      },
      {
        id: 5,
        first_name: 'Robert',
        last_name: 'Brown',
        email: 'rBrown@gmail.com',
        ip_address: '51.243.144.215',
        latitude: '85.45033',
        longitude: '34.12768'
      }
    ];

    getAllUsers.mockReturnValue(allUsers);
    getCityUsers.mockReturnValue(cityUsers);

    const response = await request(router).get('/London');

    expect(response.statusCode).toBe(200);
    expect(response._body).toStrictEqual([{"email": "mwade@gmail.com", "first_name": "Mathew", 
    "id": 1, "ip_address": "41.243.184.215", "last_name": "Wade", "latitude": "35.45033", 
    "longitude": "54.12768"}, {"email": "msouthall2@ihg.com", "first_name": "Meghan", "id": 3,
    "ip_address": "21.243.184.215", "last_name": "Southall", "latitude": "15.45033", 
    "longitude": "44.12768"}, {"email": "rBrown@gmail.com", "first_name": "Robert", 
    "id": 5, "ip_address": "51.243.144.215", "last_name": "Brown", "latitude": "85.45033",
    "longitude": "34.12768"}]);   
  });


  it('GET London Users', async () => {
    const allUsers = [];
    const cityUsers = [];

    getAllUsers.mockReturnValue(allUsers);
    getCityUsers.mockReturnValue(cityUsers);

    const response = await request(router).get('/London');

    expect(response.statusCode).toBe(200);
    expect(response._body).toStrictEqual([]);   
  });
});

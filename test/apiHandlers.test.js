const { getCityUsers, getAllUsers } = require('../services/apiHandlers');
const axios = require('axios');
let getSpy;

beforeEach(() => {
    getSpy = jest.spyOn(axios, 'get');
});

afterEach(() => {
    getSpy.mockRestore();
});


describe('Api Handlers getLondonUsers', () => {
    it('should return the London Users for status 200', async () => {
        // Arrange
        getSpy.mockReturnValue({ status:200, data: [{id:'1', city: 'London'}, 
                                {id:'2', city: 'London'}]});
        // Act
        const londonUsers = await getCityUsers('London');
        
        // Assert
        expect(londonUsers).toStrictEqual([{id:'1', city: 'London'}, 
                                  {id:'2', city: 'London'}]);
    });

    it('should handle 500 and not return users if not found', async () => {
        // Arrange
        getSpy.mockReturnValue({ status:500 });
        // Act
        const londonUsers = await getCityUsers('London');

        // Assert 
        expect(londonUsers).toStrictEqual([]);
    });

    it('should handle error during api call', async () => {
        // Arrange
        getSpy.mockRejectedValue(new Error("network error"))
        // Act
        const londonUsers = await getCityUsers('London');

        // Assert
        expect(londonUsers).toStrictEqual([]);
    });
});

describe('Api Handlers getAllUsers', () => {
    it('should return all Users for status 200', async () => {
        // Arrange
        getSpy.mockReturnValue({ status:200, data: [{id:'1', city: 'London'}, 
                                {id:'2', city: 'Newcastle'}]});
        // Act
        const londonUsers = await getAllUsers();
        
        // Assert
        expect(londonUsers).toStrictEqual([{id:'1', city: 'London'}, 
                                  {id:'2', city: 'Newcastle'}]);
    });

    it('should handle 500 and not return users if not found', async () => {
        // Arrange
        getSpy.mockReturnValue({ status:500 });
        // Act
        const londonUsers = await getAllUsers();   
        
        // Assert
        expect(londonUsers).toStrictEqual([]);
    });

    it('should handle error during api call', async () => {
        // Arrange
        getSpy.mockRejectedValue(new Error("network error"))
        // Act
        const londonUsers = await getAllUsers();

        // Assert
        expect(londonUsers).toStrictEqual([]);
    });
});

const { distance, findCitiesAroundLondon } = require('../functions/haversineDistance');

describe('Validation Response ', () => {
    it('Should find the distance between two coordinates', () => {
        // Arrange
        const coordinates1 = { latitude:51.509865, longitude:-0.118092 };
        const coordinates2 = { latitude:71.509865, longitude:-0.518092 };
        // Act
        const distanceInMiles = distance(coordinates1.latitude, coordinates1.longitude, 
                                    coordinates2.latitude, coordinates2.longitude);

        // Assert
        expect(distanceInMiles).toBe(1381.8556710169407);
    });
    it('Should find the location within 50 miles from london using findCitiesAroundLondon', () => {
        // Arrange
        const usersCoordinates = [{ latitude:52.009865, longitude:-0.128092 }];
        // Act
        const citiesAroundLondon = findCitiesAroundLondon(usersCoordinates);

        // Assert
        expect(citiesAroundLondon).toStrictEqual([{"latitude": 52.009865, "longitude": -0.128092}]);
    });

    it('Should not return the coordinates if it is more than 50 miles from London', () => {
        // Arrange
        const usersCoordinates = [{ latitude:92.009865, longitude:7.128092 }];
        // Act
        const citiesAroundLondon = findCitiesAroundLondon(usersCoordinates);

        // Assert
        expect(citiesAroundLondon).toStrictEqual([]);
    });
});

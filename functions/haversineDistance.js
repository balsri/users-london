const local  = require('../config/config');

function findCitiesAroundLondon(allUsers) {
    return allUsers.filter(element => {
      const londonLatLong = local.services.herokkuApp.londonLatLong;
      const miles = distance(londonLatLong.latitude, londonLatLong.longitude,
        element.latitude, element.longitude);
      return miles <= 50;
    });
}

function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    return dist;
  }
  

exports = module.exports = {
    findCitiesAroundLondon, distance
};
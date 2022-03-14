const express = require('express');
const router = express();
const { getCityUsers, getAllUsers } = require('../services/apiHandlers');
const { findCitiesAroundLondon } = require('../functions/haversineDistance');
const local = require('../config/config');
const logger = require('../logger');

router.get('/London', async (req, res) => {
  logger.info(`Calling API to return London Users or users living around 50 miles from london`);
  const city = local.services.herokkuApp.city;
  
  // Get All Users
  const allUsers = await getAllUsers();
  // Get user who are listed as living in london
  const londonCityUsers = await getCityUsers(city);

  let citiesAroundLondon = [];
  // Find users around the city of london, within 50 miles
  citiesAroundLondon = findCitiesAroundLondon(allUsers);

  // Append the users listed as living in london and within 50 miles from london
  const londonUsersOrLivingAroundLondon = [...londonCityUsers, ...citiesAroundLondon];
  londonUsersOrLivingAroundLondon.sort((a, b) => a.id > b.id ? 1 : -1);
  
  // Find Unique users from the result
  let uniqueLondonUsersOrLivingAroundLondon = londonUsersOrLivingAroundLondon.filter((v,i,a)=>
                                                a.findIndex(t=>(t.id===v.id))===i);

  logger.info(`Return all users who are listed as either living in London,
  or whose current longitude and lat coordinates are within 50 miles of London.`);

  res.send(uniqueLondonUsersOrLivingAroundLondon);
});

exports = module.exports = {
  router
};



const axios = require('axios');
const local = require('../config/config');
const logger = require('../logger');

// Get City Users based on Name
async function getCityUsers(city) {
    let data = [];
    try {
        const path = `/city/${city}/users`;
        const response = await axios.get(`${local.services.herokkuApp.url}${path}`);
        if (response && response.status === 200){
            logger.info('Get City Users', 'Success');
            data = response.data;
        }
    } catch (error) {
        logger.error('Get City Users', error);
    }
    return data;
}

// Get all users
async function getAllUsers() {
    let data = [];
    try {
        const path = '/users';
        const response = await axios.get(`${local.services.herokkuApp.url}${path}`);
        if (response && response.status === 200){
            logger.info('Get All Users', 'Success');
            data = response.data;
        }
    } catch (error) {
        logger.error('Get All Users', error);
    }
    return data;
}
  
exports = module.exports = {
    getCityUsers, getAllUsers
};
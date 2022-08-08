const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
      username: 'GraceJones',
      email: 'Hurricane@music.ca',
      password: 'password123'
    },
    {
      username: 'BaduBadu',
      email: 'MamasGun@music.ca',
      password: 'password123'
    },
    {
      username: 'ChakaKhan',
      email: 'FunkThis@last.fm',
      password: 'password123'
    },
    {
      username: 'JillScott',
      email: 'TheWay@music.com',
      password: 'password123'
    },
    {
      username: 'BethHart',
      email: 'HidingUnderWater@music.com',
      password: 'password123'
    },
    {
      username: 'TinaTurner',
      email: 'TheBest@lastfm.com',
      password: 'password123'
    },
    {
      username: 'ToriAmos',
      email: 'UnderthePink@music.com',
      password: 'password123'
    },
    {
      username: 'KylieMinogue',
      email: 'ImpossiblePrincess@music.com',
      password: 'password123'
    },
    {
      username: 'LucindaWilliams',
      email: 'CarWheels@music.com',
      password: 'password123'
    },
    {
      username: 'MacyGray',
      email: 'MomenttoMyself@music.com',
      password: 'password123'
    }
  ];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
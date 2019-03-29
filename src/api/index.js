import axios from 'axios';
import config from './config';

const API = {
  baseUrl: 'https://api.twitch.tv/helix',
  getTopGames: async function() {
    const url = `${this.baseUrl}/games/top`;
    const { data } = await axios.get(url, config);
    return data;
  },
  getGameById: async function(gameId) {
    try {
      const url = `${this.baseUrl}/games/?id=${gameId}`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getStreamsByGameId: async function(gameId) {
    try {
      const url = `${this.baseUrl}/streams/?game_id=${gameId}`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      return console.log(err);
    }
  },
  getUserById: async function(userId) {
    try {
      const url = `${this.baseUrl}/users/?id=${userId}`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      return console.log(err);
    }
  }
};

export default API;

const axios = require('axios');

class MonkLogger {
  constructor(configuration) {
    // Check if apiKey is provided in configuration object
    if (!configuration.apiKey) {
      throw new Error('API key is required');
    }
    
    // Save apiKey in the instance of MonkLogger
    this.apiKey = configuration.apiKey;
  }

  async log(payload) {
    try {
      const response = await axios.post('https://example.com/endpoint', payload, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error making API call: ${error.message}`);
    }
  }
}

class Configuration {
  constructor({apiKey}) {
    this.apiKey = apiKey;
  }
}

module.exports = {
  Configuration,
  MonkLogger
};

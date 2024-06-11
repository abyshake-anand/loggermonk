const apiUrlLocal = "http://localhost:3000/api/v1";
const apiUrl = "https://loggermonk.com/api/v1";
const fetch = require('isomorphic-fetch');

class LoggerMonkClient {
    constructor({ apiKey, domain, monkGroup }) {
        this.apiKey = apiKey;
        this.url = domain;
        this.baseUrl = monkGroup ? apiUrlLocal : apiUrl;
    }

    async logEvent({
        project,
        channel,
        event,
        description,
        icon,
        notify,
        tags,
        parser,
        user_id,
        timestamp
    }) {
        const url = `${this.baseUrl}/log-event`;
        const body = {
            project,
            channel,
            event,
            description,
            icon,
            notify,
            tags,
            parser,
            user_id,
            timestamp
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`,
            'x-site-domain': this.url
        };
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error('Failed to log event');
        }
        return await response.json();
    }
}

module.exports = LoggerMonkClient;
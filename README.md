<div align="center">
	<img src="https://loggermonk.com/__og-image__/image/og.png" alt="LoggerMonk"/>
	<br>
    <h1>LoggerMonk</h1>
	<p>Realtime monitoring and notification system for business critical events.</p>
	<a href="https://www.npmjs.com/package/loggermonk"><img src="https://img.shields.io/npm/v/loggermonk" alt="NPM Version"></a>
	<!-- <a href="https://discord.gg/dY3pRxgWua"><img src="https://img.shields.io/discord/922560704454750245?color=%237289DA&label=Discord" alt="Discord"></a> -->
	<!-- <a href="https://docs.logsnag.com"><img src="https://img.shields.io/badge/Docs-LogSnag" alt="Documentation"></a> -->
	<br>
	<br>
</div>


## Installation

If you are using npm:
```sh
npm install --save loggermonk
```

If you are using yarn:
```sh
yarn add loggermonk
```

## Usage

### Import Library

```js
import { LoggerMonk } from 'loggermonk';
```

### Configuring The Client
You need to create a new instance of LoggerMonk with three mandatory parameters:
- `token`: Your project token from LoggerMonk dashboard.
- `project`: Your project name from LoggerMonk dashboard.
- `site`: Your site name from LoggerMonk dashboard.

```js
const loggermonkClient = new LoggerMonk({ 
  token: '7f568d735724351757637b1dbf108e5',
  project: 'my-saas'
});
```

### Track Event

```js
loggermonkClient.track({
    channel: "waitlist",
    event: "User Joined",
    icon: "🎉",
    user_id: "user_123",
    tags: {
      source: "google",
    },
    notify: true
})
```

### User Properties

```js
loggermonkClient.identify({
    user_id: "user_123",
    properties: {
      name: "John Doe",
      email: "john@doe.com",
      plan: "premium",
    }
})
```

### Track Insight

```js
loggermonkClient.insight.track({
    title: "User Count",
    value: "100",
    icon: "👨",
})
```

### Increment Insight

```js
loggermonkClient.insight.increment({
    title: "User Count",
    value: 1,
    icon: "👨",
})
```
# Lariba JavaScript SDK

Official JavaScript SDK for sending events to **Lariba Cloud**.

This SDK allows applications to easily send events to the Lariba Cloud event ingestion API.

---

# Installation

The SDK is currently installed directly from GitHub.

```bash
npm install github:laribacloud/lariba-sdk-js
```

---

# Usage

```javascript
import { Lariba } from "@laribacloud/lariba-sdk-js"

const lariba = new Lariba({
  apiKey: process.env.LARIBA_API_KEY
})

await lariba.track("user.signup", {
  plan: "starter"
})
```

---

# Example

```javascript
await lariba.track("payment.completed", {
  amount: 29,
  currency: "USD"
})
```

---

# API

### Track Event

```javascript
lariba.track(eventName, properties)
```

Example:

```javascript
lariba.track("user.login", {
  method: "google"
})
```

---

# Related Repositories

Lariba Cloud is composed of multiple repositories:

### Core Backend

https://github.com/laribacloud/lariba-cloud

FastAPI backend powering the Lariba Cloud platform.

### API Specification

https://github.com/laribacloud/lariba-spec

OpenAPI specification describing the Lariba Cloud API.

### Developer Documentation

https://github.com/laribacloud/lariba-docs-site

Public developer documentation and integration guides.

---

# License

MIT License © Lariba Cloud
